"use client";

import { useState, useCallback } from "react";
import { detectIntent, intentResponses, searchFAQ, easterEggs } from "../rio-utils";
import { type Message, initialMessages } from "../rio-types";
import { useChatHistory } from "./useChatHistory";
import { useRioFeatures } from "./useRioFeatures";
import {
    handleEventRegistrationFlow,
    handleMentorshipChallengeFlow,
    handleCommunityStoryFlow,
    handlePortraitAdviceFlow,
    handleMentalHealthFlow,
    handleCritiqueFlow,
    handleVolunteerFlow,
    handleTechSupportFlow,
} from "../flows/conversationFlow";

export function useRioBrain(userName: string | null, _currentPath: string) {
    const seeded = initialMessages.map((msg) => ({ ...msg, timestamp: null }));
    const { messages, setMessages } = useChatHistory("rio-chat-history", seeded as Message[]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [conversationState, setConversationState] = useState<string | null>(null);
    const [conversationContext, setConversationContext] = useState<Record<string, unknown>>({});
    const [pendingEventType, setPendingEventType] = useState<string | null>(null);
    const [lastAssistantMessage, setLastAssistantMessage] = useState<string>("");

    // Import all new RIO features
    const rioFeatures = useRioFeatures();

    const handleSend = useCallback(() => {
        if (!input.trim()) return;

        // Easter egg check
        const lowerInput = input.toLowerCase();
        const egg = easterEggs.find((e) => lowerInput.includes(e.trigger));
        if (egg) {
            setMessages((prev) => [
                ...prev,
                { role: "user", content: input, timestamp: new Date() },
                { role: "assistant", content: egg.response, timestamp: new Date() },
            ]);
            setLastAssistantMessage(egg.response);
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
        const currentInput = input;
        setInput("");
        setIsTyping(true);

        const processAssistantResponse = () => {
            let assistantMessage: Message | null = null;
            let nextState: string | null = null;
            let nextContext: Record<string, unknown> = { ...conversationContext };

            // Personalized greeting if userName is known and this is a new chat
            if (messages.length === 1 && userName) {
                assistantMessage = {
                    role: "assistant",
                    content: `Welcome back, ${userName}! How can I help you today?`,
                    timestamp: new Date(),
                };
                setMessages((prev) => [...prev, assistantMessage as Message]);
                setLastAssistantMessage(assistantMessage.content);
                setIsTyping(false);
                return;
            }

            // Handle newsletter email flow
            if (conversationState === "awaiting_newsletter_email") {
                const response = rioFeatures.subscribeNewsletter(currentInput);
                assistantMessage = {
                    role: "assistant",
                    content: response,
                    timestamp: new Date(),
                };
                nextState = null;
            }

            // Handle program matcher flow
            if (conversationState === "awaiting_program_interest") {
                const response = rioFeatures.matchProgram(currentInput);
                assistantMessage = {
                    role: "assistant",
                    content: response,
                    timestamp: new Date(),
                };
                nextState = null;
            }

            // Handle social share platform flow
            if (conversationState === "awaiting_share_platform") {
                const response = rioFeatures.shareContent(currentInput);
                assistantMessage = {
                    role: "assistant",
                    content: response,
                    timestamp: new Date(),
                };
                nextState = null;
            }

            // Handle gear type flow
            if (conversationState === "awaiting_gear_type") {
                const response = rioFeatures.getGearAdvice(currentInput);
                assistantMessage = {
                    role: "assistant",
                    content: response,
                    timestamp: new Date(),
                };
                nextState = null;
            }

            // Handle feedback flow
            if (conversationState === "awaiting_feedback") {
                const response = rioFeatures.processFeedback(currentInput);
                assistantMessage = {
                    role: "assistant",
                    content: response,
                    timestamp: new Date(),
                };
                nextState = null;
            }

            // Handle challenge completion
            if (currentInput.toLowerCase().includes("completed") || currentInput.toLowerCase().includes("done") || currentInput.toLowerCase().includes("finished")) {
                const prefs = rioFeatures.getPreferences();
                if (prefs.lastChallengeDate === new Date().toDateString()) {
                    const response = rioFeatures.completeChallenge();
                    assistantMessage = {
                        role: "assistant",
                        content: response,
                        timestamp: new Date(),
                    };
                }
            }

            // Try existing conversation flows if no state-based flow matched
            if (!assistantMessage) {
                const params = { conversationState, input: currentInput, pendingEventType };

                const flows = [
                    () => handleEventRegistrationFlow(params),
                    () => handleMentorshipChallengeFlow({ conversationState, input: currentInput }),
                    () => handleCommunityStoryFlow({ conversationState, input: currentInput }),
                    () => handlePortraitAdviceFlow({ conversationState, input: currentInput }),
                    () => handleMentalHealthFlow({ conversationState, input: currentInput }),
                    () => handleCritiqueFlow({ conversationState, input: currentInput }),
                    () => handleVolunteerFlow({ conversationState, input: currentInput }),
                    () => handleTechSupportFlow({ conversationState, input: currentInput }),
                ];

                for (const flow of flows) {
                    const result = flow();
                    if (result) {
                        assistantMessage = result.assistantMessage;
                        nextState = result.nextState;
                        nextContext = result.nextContext ?? {};
                        break;
                    }
                }
            }

            // Handle specific logic for event registration state changes
            if (conversationState === "awaiting_event_email" && nextState === null) {
                setPendingEventType(null);
            }

            // If no multi-turn flow matched, handle as single-turn with new enhanced intents
            if (!assistantMessage) {
                if (!conversationState) {
                    const intent = detectIntent(currentInput);

                    // Handle new enhanced intents
                    switch (intent) {
                        case "navigate": {
                            const response = rioFeatures.navigateToPage(currentInput);
                            assistantMessage = {
                                role: "assistant",
                                content: response,
                                timestamp: new Date(),
                            };
                            break;
                        }

                        case "theme_switch": {
                            const response = rioFeatures.toggleTheme(currentInput);
                            assistantMessage = {
                                role: "assistant",
                                content: response,
                                timestamp: new Date(),
                            };
                            break;
                        }

                        case "photo_challenge": {
                            const response = rioFeatures.getDailyChallenge();
                            assistantMessage = {
                                role: "assistant",
                                content: response,
                                timestamp: new Date(),
                            };
                            break;
                        }

                        case "mario_quote": {
                            const response = rioFeatures.getMarioQuote();
                            assistantMessage = {
                                role: "assistant",
                                content: response,
                                timestamp: new Date(),
                            };
                            break;
                        }

                        case "donation_impact": {
                            const response = rioFeatures.calculateDonationImpact(currentInput);
                            assistantMessage = {
                                role: "assistant",
                                content: response,
                                timestamp: new Date(),
                            };
                            break;
                        }

                        case "newsletter": {
                            assistantMessage = {
                                role: "assistant",
                                content: "Great! I'd love to keep you updated. What's your email address? 📧",
                                timestamp: new Date(),
                            };
                            nextState = "awaiting_newsletter_email";
                            break;
                        }

                        case "event_countdown": {
                            const response = rioFeatures.getNextEventCountdown(currentInput);
                            assistantMessage = {
                                role: "assistant",
                                content: response,
                                timestamp: new Date(),
                            };
                            break;
                        }

                        case "social_share": {
                            assistantMessage = {
                                role: "assistant",
                                content: "I'll help you share! Which platform would you like to use? (Twitter, Facebook, LinkedIn, or WhatsApp) 🚀",
                                timestamp: new Date(),
                            };
                            nextState = "awaiting_share_platform";
                            break;
                        }

                        case "translate": {
                            const response = rioFeatures.getSwahiliResponse("greeting");
                            assistantMessage = {
                                role: "assistant",
                                content: response,
                                timestamp: new Date(),
                            };
                            break;
                        }

                        case "read_aloud": {
                            if (lastAssistantMessage) {
                                const response = rioFeatures.speakText(lastAssistantMessage);
                                assistantMessage = {
                                    role: "assistant",
                                    content: response,
                                    timestamp: new Date(),
                                };
                            } else {
                                assistantMessage = {
                                    role: "assistant",
                                    content: "I don't have a previous message to read. Ask me something first! 😊",
                                    timestamp: new Date(),
                                };
                            }
                            break;
                        }

                        case "program_matcher": {
                            assistantMessage = {
                                role: "assistant",
                                content: "Let me help you find the perfect program! What's your main interest: photography skills, mental wellness, or community storytelling? 🎯",
                                timestamp: new Date(),
                            };
                            nextState = "awaiting_program_interest";
                            break;
                        }

                        case "gear_recommendation": {
                            assistantMessage = {
                                role: "assistant",
                                content: "I'd love to help you with gear! What type of photography are you interested in: portraits, street, wildlife, or are you a beginner looking for general advice? 📷",
                                timestamp: new Date(),
                            };
                            nextState = "awaiting_gear_type";
                            break;
                        }

                        // Phase 2 intents
                        case "clear_chat": {
                            // Clear messages and reset state
                            setMessages(seeded as Message[]);
                            setConversationState(null);
                            setConversationContext({});
                            assistantMessage = {
                                role: "assistant",
                                content: "✨ Chat cleared! Starting fresh. How can I help you today?",
                                timestamp: new Date(),
                            };
                            break;
                        }

                        case "help_menu": {
                            const response = rioFeatures.getHelpMenu();
                            assistantMessage = {
                                role: "assistant",
                                content: response,
                                timestamp: new Date(),
                            };
                            break;
                        }

                        case "feedback": {
                            const response = rioFeatures.startFeedback();
                            assistantMessage = {
                                role: "assistant",
                                content: response,
                                timestamp: new Date(),
                            };
                            nextState = "awaiting_feedback";
                            break;
                        }

                        case "badges": {
                            const response = rioFeatures.getBadgesDisplay();
                            assistantMessage = {
                                role: "assistant",
                                content: response,
                                timestamp: new Date(),
                            };
                            break;
                        }

                        case "streak": {
                            const response = rioFeatures.getStreakDisplay();
                            assistantMessage = {
                                role: "assistant",
                                content: response,
                                timestamp: new Date(),
                            };
                            break;
                        }

                        case "faq": {
                            const faq = searchFAQ(currentInput);
                            assistantMessage = {
                                role: "assistant",
                                content: faq
                                    ? `${faq.answer}${faq.related.length ? "\n\nRelated questions: " + faq.related.map((q) => `"${q}"`).join(", ") : ""}`
                                    : (intentResponses["faq"] || intentResponses["unknown"])[0],
                                timestamp: new Date(),
                            };
                            break;
                        }

                        // Existing intents that start flows
                        case "creative_coach":
                            assistantMessage = {
                                role: "assistant",
                                content: "What kind of portraits are you interested in? (e.g., outdoor, studio, candid, self-portrait)",
                                timestamp: new Date(),
                            };
                            nextState = "awaiting_portrait_type";
                            break;

                        case "mentorship_legacy":
                            assistantMessage = {
                                role: "assistant",
                                content: "Awesome! What's your favorite subject to photograph? (e.g., people, nature, city, abstract)",
                                timestamp: new Date(),
                            };
                            nextState = "awaiting_challenge_subject";
                            break;

                        case "community_archivist":
                            assistantMessage = {
                                role: "assistant",
                                content: "Is your story about a photo, a memory with Mario, or something else?",
                                timestamp: new Date(),
                            };
                            nextState = "awaiting_story_type";
                            break;

                        case "foundation_guide":
                            assistantMessage = {
                                role: "assistant",
                                content: "Which event are you interested in? (e.g., workshop, exhibition, meetup)",
                                timestamp: new Date(),
                            };
                            nextState = "awaiting_event_type";
                            setPendingEventType("event");
                            break;

                        case "mental_health_support":
                            assistantMessage = {
                                role: "assistant",
                                content: "Would you like a creative affirmation, a self-care tip, or just someone to listen?",
                                timestamp: new Date(),
                            };
                            nextState = "awaiting_checkin_option";
                            break;

                        case "photo_critique": {
                            const responses = intentResponses[intent] || intentResponses["unknown"];
                            const content = Array.isArray(responses)
                                ? responses[Math.floor(Math.random() * responses.length)]
                                : responses;
                            assistantMessage = {
                                role: "assistant",
                                content: content as string,
                                timestamp: new Date(),
                            };
                            nextState = "awaiting_critique_method";
                            break;
                        }

                        case "volunteer_info":
                            assistantMessage = {
                                role: "assistant",
                                content: "Are you interested in mentoring, helping at events, or supporting behind the scenes?",
                                timestamp: new Date(),
                            };
                            nextState = "awaiting_volunteer_type";
                            break;

                        case "technical_support":
                            assistantMessage = {
                                role: "assistant",
                                content: "Are you seeing an error message, or is the upload button not working?",
                                timestamp: new Date(),
                            };
                            nextState = "awaiting_tech_issue_type";
                            break;

                        default: {
                            const responses = intentResponses[intent] || intentResponses["unknown"];
                            const content = Array.isArray(responses)
                                ? responses[Math.floor(Math.random() * responses.length)]
                                : responses;
                            assistantMessage = {
                                role: "assistant",
                                content: content as string,
                                timestamp: new Date(),
                            };
                        }
                    }
                } else {
                    // Fallback if in a state but no flow matched
                    assistantMessage = {
                        role: "assistant",
                        content: "I'm not sure I understood that. Could you rephrase or type 'help' for options?",
                        timestamp: new Date(),
                    };
                    nextState = null;
                    nextContext = {};
                }
            }

            if (assistantMessage) {
                setMessages((prev) => [...prev, assistantMessage as Message]);
                setLastAssistantMessage(assistantMessage.content);
                setIsTyping(false);
                setConversationState(nextState);
                setConversationContext(nextContext);
            }
        };

        setTimeout(processAssistantResponse, 800);
    }, [input, messages, userName, conversationState, conversationContext, pendingEventType, setMessages, rioFeatures, lastAssistantMessage]);

    return {
        messages,
        setMessages,
        input,
        setInput,
        handleSend,
        isTyping,
    };
}

