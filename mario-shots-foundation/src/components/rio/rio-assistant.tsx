"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Bot, X, Send, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { useRef } from "react";
import { detectIntent, intentResponses, searchFAQ, faqs, dailyTips, easterEggs, chatThemes, languages } from "./rio-utils";
import { Message, initialMessages } from "./rio-types";
import { ChatHeader } from "./ChatHeader";
import { ChatMessages } from "./ChatMessages";
import { ChatInput } from "./ChatInput";
import { useChatHistory } from "./hooks/useChatHistory";
import { useAutoScroll } from "./hooks/useAutoScroll";
import { handleMentorshipChallengeFlow, handleCommunityStoryFlow } from "./flows/conversationFlow";
import { handleEventRegistrationFlow } from "./flows/conversationFlow";


export function RIOAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  // Initial message with no timestamp
  const seeded = initialMessages.map(msg => ({ ...msg, timestamp: null }));
  const { messages, setMessages } = useChatHistory("rio-chat-history", seeded as Message[]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  // Multi-turn conversation state
  const [conversationState, setConversationState] = useState<string | null>(null);
  const [conversationContext, setConversationContext] = useState<any>({});
  // Restore state and handlers for photo upload
  const [showPhotoUpload, setShowPhotoUpload] = useState(false);
  const [uploadedPhoto, setUploadedPhoto] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Restore handlePhotoUpload function
  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedPhoto(reader.result as string);
        setShowPhotoUpload(false);
      setInput("Uploaded photo for critique: " + file.name);
        handleSend();
      };
    reader.readAsDataURL(file);
  };
  // Remove all state and handlers related to photo upload
  // Remove showPhotoUpload, uploadedPhoto, fileInputRef, handlePhotoUpload
  // Remove the UI for the file input and any logic that sets or checks showPhotoUpload
  // In the photo_critique intent, just respond with a text message
  const [pendingEventType, setPendingEventType] = useState<string | null>(null);
  const [pendingRegistration, setPendingRegistration] = useState<{ eventType: string; name: string; email: string } | null>(null);
  const [userName, setUserName] = useState<string | null>(null);
  const chatButtonRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [chatTheme, setChatTheme] = useState("light");
  const [showHistory, setShowHistory] = useState(false);
  const [language, setLanguage] = useState("en");
  const endRef = useAutoScroll([messages, isOpen]);

  const toggleChat = useCallback(() => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setIsMinimized(false);
    }
  }, [isOpen]);

  const toggleMinimize = useCallback(() => {
    setIsMinimized(!isMinimized);
  }, [isMinimized]);

  // Show daily tip/affirmation at chat open
  useEffect(() => {
    if (isOpen && messages.length === 1) {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: dailyTips[Math.floor(Math.random() * dailyTips.length)],
            timestamp: new Date(),
          },
        ]);
      }, 800);
    }
  }, [isOpen]);

  // Keyboard accessibility: open chat with Enter, close with Esc
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
        chatButtonRef.current?.focus();
      }
      if ((e.key === "Enter" || e.key === " ") && document.activeElement === chatButtonRef.current && !isOpen) {
        setIsOpen(true);
        setTimeout(() => inputRef.current?.focus(), 200);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Analytics: log message count and most common intent
  useEffect(() => {
    if (messages.length > 1) {
      const intents = messages.filter(m => m.role === "user").map(m => detectIntent(m.content));
      const freq: Record<string, number> = {};
      intents.forEach(i => { freq[i] = (freq[i] || 0) + 1; });
      const mostCommon = Object.entries(freq).sort((a, b) => b[1] - a[1])[0]?.[0];
      (window as any).rioAnalytics?.track('chat-opened');
      (window as any).rioAnalytics?.track('chat-stats', {
        messageCount: messages.length,
        mostCommonIntent: mostCommon,
      });
    }
  }, [messages]);

  const handleSend = useCallback(() => {
    if (!input.trim()) return;
    // Easter egg check
    const lowerInput = input.toLowerCase();
    const egg = easterEggs.find(e => lowerInput.includes(e.trigger));
    if (egg) {
      setMessages((prev) => [
        ...prev,
        { role: "user", content: input, timestamp: new Date() },
        { role: "assistant", content: egg.response, timestamp: new Date() },
      ]);
      setInput("");
      return;
    }

    // Add user message
    const userMessage: Message = {
      role: "user",
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    const processAssistantResponse = () => {
      // Multi-turn conversation logic
      let assistantMessage: Message | null = null;
      let nextState: string | null = null;
      let nextContext: any = { ...conversationContext };

      // Personalized greeting if userName is known and this is a new chat
      if (messages.length === 1 && userName) {
        assistantMessage = {
          role: "assistant",
          content: `Welcome back, ${userName}! How can I help you today?`,
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, assistantMessage as Message]);
        setIsTyping(false);
        return;
      }

      // Event registration multi-turn logic (extracted)
      const eventFlow = handleEventRegistrationFlow({
        conversationState,
        input,
        pendingEventType,
      });
      if (eventFlow) {
        assistantMessage = eventFlow.assistantMessage;
        nextState = eventFlow.nextState;
        nextContext = eventFlow.nextContext ?? {};
        if (conversationState === "awaiting_event_name") {
          setPendingRegistration({ eventType: pendingEventType || "event", name: input, email: "" });
        }
        if (conversationState === "awaiting_event_email") {
        setPendingRegistration(null);
        setPendingEventType(null);
        }
      } else {
        // If in a multi-turn flow, handle accordingly
        if (conversationState) {
          // Try extracted flows first
          const mentorshipFlow = handleMentorshipChallengeFlow({ conversationState, input });
          if (mentorshipFlow) {
            assistantMessage = mentorshipFlow.assistantMessage;
            nextState = mentorshipFlow.nextState;
            nextContext = mentorshipFlow.nextContext ?? {};
          }
          const storyFlow = !assistantMessage
            ? handleCommunityStoryFlow({ conversationState, input })
            : null;
          if (storyFlow) {
            assistantMessage = storyFlow.assistantMessage;
            nextState = storyFlow.nextState;
            nextContext = storyFlow.nextContext ?? {};
          }

          // Fallback to existing switch for remaining cases
          if (!assistantMessage) {
          switch (conversationState) {
            // --- Creative Coach: Portrait Advice ---
            case "awaiting_portrait_type": {
              nextContext.portraitType = input;
              assistantMessage = {
                role: "assistant",
                content: `Great! Are you shooting with a phone or a camera?`,
                timestamp: new Date(),
              };
              nextState = "awaiting_portrait_device";
              break;
            }
            case "awaiting_portrait_device": {
              nextContext.device = input;
              assistantMessage = {
                role: "assistant",
                content:
                  nextContext.portraitType.toLowerCase().includes("outdoor")
                    ? `Try using natural light and focus on your subject's eyes. Would you like a quick tutorial or some editing tips?`
                    : `For ${nextContext.portraitType} portraits, lighting and connection with your subject are key. Want a tutorial or editing tips?`,
                timestamp: new Date(),
              };
              nextState = null;
              nextContext = {};
              break;
            }
            // --- Mentorship Legacy Bot: Creative Challenge ---
            case "awaiting_challenge_subject": {
              nextContext.subject = input;
              assistantMessage = {
                role: "assistant",
                content: `Your challenge: Capture a photo that tells a story about ${input}. Want a quote from Mario for inspiration?`,
                timestamp: new Date(),
              };
              nextState = "awaiting_challenge_quote";
              break;
            }
            case "awaiting_challenge_quote": {
              if (input.toLowerCase().includes("yes")) {
                assistantMessage = {
                  role: "assistant",
                  content: `Mario: "See with your heart, not just your eyes." Good luck!`,
                  timestamp: new Date(),
                };
              } else {
                assistantMessage = {
                  role: "assistant",
                  content: `Go for it! Let me know if you want more inspiration.`,
                  timestamp: new Date(),
                };
              }
              nextState = null;
              nextContext = {};
              break;
            }
            // --- Community Archivist: Submitting a Story ---
            case "awaiting_story_type": {
              nextContext.storyType = input;
              assistantMessage = {
                role: "assistant",
                content: `Would you like to write your story here, or upload a photo to go with it?`,
                timestamp: new Date(),
              };
              nextState = "awaiting_story_method";
              break;
            }
            case "awaiting_story_method": {
              if (input.toLowerCase().includes("write")) {
                assistantMessage = {
                  role: "assistant",
                  content: `Go ahead and share your story. I'm listening!`,
                  timestamp: new Date(),
                };
                nextState = null;
                nextContext = {};
              } else {
                assistantMessage = {
                  role: "assistant",
                  content: `Photo upload coming soon! For now, feel free to write your story here.`,
                  timestamp: new Date(),
                };
                nextState = null;
                nextContext = {};
              }
              break;
            }
            // --- Foundation Guide: Event Registration ---
            case "awaiting_event_type": {
              nextContext.eventType = input;
              assistantMessage = {
                role: "assistant",
                content: `Would you like to see upcoming dates or register for the next available ${input}?`,
                timestamp: new Date(),
              };
              nextState = "awaiting_event_action";
              break;
            }
            case "awaiting_event_action": {
              if (input.toLowerCase().includes("register")) {
                assistantMessage = {
                  role: "assistant",
                  content: `Great! Please provide your name and email, and I'll sign you up.`,
                  timestamp: new Date(),
                };
                nextState = null;
                nextContext = {};
              } else {
                assistantMessage = {
                  role: "assistant",
                  content: `You can see upcoming dates on our Events page. Let me know if you want to register!`,
                  timestamp: new Date(),
                };
                nextState = null;
                nextContext = {};
              }
              break;
            }
            // --- Mental Health Support: Creative Check-In ---
            case "awaiting_checkin_option": {
              if (input.toLowerCase().includes("affirmation")) {
                assistantMessage = {
                  role: "assistant",
                  content: `Affirmation: "Your vision matters. Take a breath, and create at your own pace."`,
                  timestamp: new Date(),
                };
              } else if (input.toLowerCase().includes("self-care")) {
                assistantMessage = {
                  role: "assistant",
                  content: `Take a short break and do something you love outside photography. Would you like a daily check-in reminder?`,
                  timestamp: new Date(),
                };
                nextState = "awaiting_checkin_reminder";
                break;
              } else {
                assistantMessage = {
                  role: "assistant",
                  content: `I'm here to listen. Remember, you're not alone.`,
                  timestamp: new Date(),
                };
              }
              nextState = null;
              nextContext = {};
              break;
            }
            case "awaiting_checkin_reminder": {
              if (input.toLowerCase().includes("yes")) {
                assistantMessage = {
                  role: "assistant",
                  content: `I'll check in with you daily! Stay creative and take care.`,
                  timestamp: new Date(),
                };
              } else {
                assistantMessage = {
                  role: "assistant",
                  content: `No problem! I'm always here if you need a boost.`,
                  timestamp: new Date(),
                };
              }
              nextState = null;
              nextContext = {};
              break;
            }
            // --- Photo Critique: Feedback Request ---
            case "awaiting_critique_method": {
              if (input.toLowerCase().includes("upload")) {
                assistantMessage = {
                  role: "assistant",
                  content: `Photo upload is coming soon! For now, you can describe your photo for feedback.`,
                  timestamp: new Date(),
                };
                nextState = "awaiting_critique_description";
              } else {
                assistantMessage = {
                  role: "assistant",
                  content: `Go ahead and describe your photo. What were you hoping to capture?`,
                  timestamp: new Date(),
                };
                nextState = "awaiting_critique_description";
              }
              break;
            }
            case "awaiting_critique_description": {
              nextContext.photoDescription = input;
              assistantMessage = {
                role: "assistant",
                content: `That sounds beautiful! Pay attention to contrast and composition. Would you like tips on editing?`,
                timestamp: new Date(),
              };
              nextState = null;
              nextContext = {};
              break;
            }
            // --- Volunteer Info: Getting Involved ---
            case "awaiting_volunteer_type": {
              nextContext.volunteerType = input;
              assistantMessage = {
                role: "assistant",
                content: `Do you have experience in photography, video, or another creative field?`,
                timestamp: new Date(),
              };
              nextState = "awaiting_volunteer_experience";
              break;
            }
            case "awaiting_volunteer_experience": {
              nextContext.volunteerExperience = input;
              assistantMessage = {
                role: "assistant",
                content: `Perfect. Please share a bit about your background, and we'll connect you with our mentorship team.`,
                timestamp: new Date(),
              };
              nextState = null;
              nextContext = {};
              break;
            }
            // --- Technical Support: Troubleshooting ---
            case "awaiting_tech_issue_type": {
              if (input.toLowerCase().includes("error")) {
                assistantMessage = {
                  role: "assistant",
                  content: `Can you tell me what the error message says? I'll help you fix it or connect you with support.`,
                  timestamp: new Date(),
                };
                nextState = null;
                nextContext = {};
              } else {
                assistantMessage = {
                  role: "assistant",
                  content: `Are you seeing an error message, or is the upload button not working?`,
                  timestamp: new Date(),
                };
                nextState = null;
                nextContext = {};
              }
              break;
            }
            default:
              // fallback to single-turn if state is unknown
              nextState = null;
              nextContext = {};
          }
        } else {
          // Not in a multi-turn flow: detect intent and start if needed
          const intent = detectIntent(input);
          // Enhanced FAQ system
          if (intent === "faq") {
            const faq = searchFAQ(input);
            if (faq) {
              assistantMessage = {
                role: "assistant",
                content: `${faq.answer}${faq.related.length ? "\n\nRelated questions: " + faq.related.map(q => `\"${q}\"`).join(", ") : ""}`,
                timestamp: new Date(),
              };
              nextState = null;
              nextContext = {};
            } else {
              // fallback to default FAQ response
              const responses = intentResponses["faq"] || intentResponses["unknown"];
              assistantMessage = {
                role: "assistant",
                content: responses[Math.floor(Math.random() * responses.length)],
                timestamp: new Date(),
              };
              nextState = null;
              nextContext = {};
            }
          } else switch (intent) {
            case "creative_coach": {
              assistantMessage = {
                role: "assistant",
                content: `What kind of portraits are you interested in? (e.g., outdoor, studio, candid, self-portrait)`,
                timestamp: new Date(),
              };
              nextState = "awaiting_portrait_type";
              break;
            }
            case "mentorship_legacy": {
              assistantMessage = {
                role: "assistant",
                content: `Awesome! What's your favorite subject to photograph? (e.g., people, nature, city, abstract)`,
                timestamp: new Date(),
              };
              nextState = "awaiting_challenge_subject";
              break;
            }
            case "community_archivist": {
              assistantMessage = {
                role: "assistant",
                content: `Is your story about a photo, a memory with Mario, or something else?`,
                timestamp: new Date(),
              };
              nextState = "awaiting_story_type";
              break;
            }
            case "foundation_guide": {
              assistantMessage = {
                role: "assistant",
                content: `Which event are you interested in? (e.g., workshop, exhibition, meetup)`,
                timestamp: new Date(),
              };
              nextState = "awaiting_event_type";
              break;
            }
            case "mental_health_support": {
              assistantMessage = {
                role: "assistant",
                content: `Would you like a creative affirmation, a self-care tip, or just someone to listen?`,
                timestamp: new Date(),
              };
              nextState = "awaiting_checkin_option";
              break;
            }
            case "photo_critique": {
              assistantMessage = {
                role: "assistant",
                content: `Photo critique is coming soon! For now, try to focus on story, light, and emotion in your shots—just like Mario did!`,
                timestamp: new Date(),
              };
              nextState = null;
              nextContext = {};
              break;
            }
            case "volunteer_info": {
              assistantMessage = {
                role: "assistant",
                content: `Are you interested in mentoring, helping at events, or supporting behind the scenes?`,
                timestamp: new Date(),
              };
              nextState = "awaiting_volunteer_type";
              break;
            }
            case "technical_support": {
              assistantMessage = {
                role: "assistant",
                content: `Are you seeing an error message, or is the upload button not working?`,
                timestamp: new Date(),
              };
              nextState = "awaiting_tech_issue_type";
              break;
            }
            case "gear_recommendation": {
              assistantMessage = {
                role: "assistant",
                content: `Here are some camera recommendations: ${intentResponses["gear_recommendation"]?.map(r => `\n- ${r}`).join("")}`,
                timestamp: new Date(),
              };
              nextState = null;
              nextContext = {};
              break;
            }
            case "editing_tutorial": {
              assistantMessage = {
                role: "assistant",
                content: `Here are some editing tutorials: ${intentResponses["editing_tutorial"]?.map(r => `\n- ${r}`).join("")}`,
                timestamp: new Date(),
              };
              nextState = null;
              nextContext = {};
              break;
            }
            case "inspirational_story": {
              assistantMessage = {
                role: "assistant",
                content: `Here are some inspirational stories: ${intentResponses["inspirational_story"]?.map(r => `\n- ${r}`).join("")}`,
                timestamp: new Date(),
              };
              nextState = null;
              nextContext = {};
              break;
            }
            case "unknown": {
              const responses = intentResponses["unknown"] || [];
              assistantMessage = {
                role: "assistant",
                content: responses[Math.floor(Math.random() * responses.length)],
                timestamp: new Date(),
              };
              nextState = null;
              nextContext = {};
              break;
            }
          }
        }
      }

      if (assistantMessage) {
        setMessages((prev) => [...prev, assistantMessage as Message]);
        setIsTyping(false);

        // If nextState is not null, update conversation state
        if (nextState) {
          setConversationState(nextState);
          setConversationContext(nextContext);
        } else {
          setConversationState(null);
          setConversationContext({});
        }
      }
    };
    window.setTimeout(processAssistantResponse, 1000); // Simulate typing speed
  }, [input, messages, userName, conversationState, conversationContext, pendingEventType]);

  // Remove handlePhotoUpload function

  return (
    <>
      {/* Floating Chat Button */}
      <button
        ref={chatButtonRef}
        onClick={toggleChat}
        aria-label={isOpen ? "Close chat with RIO" : "Open chat with RIO"}
        aria-haspopup="dialog"
        aria-controls="rio-chat-panel"
        className={cn(
          "fixed bottom-6 right-6 z-[9999] flex items-center justify-center w-16 h-16 rounded-full shadow-lg bg-mario-600 hover:bg-mario-700 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-mario-400 shadow-[0_4px_24px_0_rgba(0,0,0,0.18)]",
          isOpen ? "scale-90 opacity-70" : "hover:scale-105 hover:shadow-2xl"
        )}
      >
        <span className="sr-only">Open chat with RIO</span>
        {/* Update logo container to be a perfect circle with white background */}
        <div className="relative w-12 h-12 rounded-full bg-white flex items-center justify-center overflow-hidden">
          <Image src="/images/logo/rio-logo.png" alt="RIO" fill className="object-contain" />
        </div>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Chat with RIO Assistant"
          id="rio-chat-panel"
          className={cn(
            "fixed bottom-28 right-6 w-[95vw] max-w-sm md:max-w-md rounded-2xl shadow-2xl border border-zinc-200 dark:border-zinc-800 flex flex-col transition-all duration-300 animate-fade-in z-[9999] bg-black",
            isMinimized ? "h-16 overflow-hidden" : "h-[500px]"
          )}
        >
          {/* Header */}
          <ChatHeader isMinimized={isMinimized} toggleMinimize={toggleMinimize} toggleChat={toggleChat} />
          {/* Messages */}
          {!isMinimized && <ChatMessages messages={messages} isTyping={isTyping} endRef={endRef} />}
          {/* Input Area */}
          {!isMinimized && <ChatInput input={input} setInput={setInput} handleSend={handleSend} isTyping={isTyping} />}
        </div>
      )}
    </>
  );
}