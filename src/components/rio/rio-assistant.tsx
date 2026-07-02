"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { dailyTips } from "./rio-utils";
import { ChatHeader } from "./ChatHeader";
import { ChatMessages } from "./ChatMessages";
import { ChatInput } from "./ChatInput";
import { useAutoScroll } from "./hooks/useAutoScroll";
import { useRioBrain } from "./hooks/useRioBrain";

function RIOAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [userName] = useState<string | null>(null); // In a real app, this would come from auth

  const pathname = usePathname();
  const { messages, setMessages, input, setInput, handleSend, isTyping } = useRioBrain(userName, pathname);

  const chatButtonRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
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
  }, [isOpen, messages.length, setMessages]);

  // Keyboard accessibility
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
          <ChatHeader isMinimized={isMinimized} toggleMinimize={toggleMinimize} toggleChat={toggleChat} />
          {!isMinimized && <ChatMessages messages={messages} isTyping={isTyping} endRef={endRef} />}
          {!isMinimized && <ChatInput input={input} setInput={setInput} handleSend={handleSend} isTyping={isTyping} />}
        </div>
      )}
    </>
  );
}

export default RIOAssistant;