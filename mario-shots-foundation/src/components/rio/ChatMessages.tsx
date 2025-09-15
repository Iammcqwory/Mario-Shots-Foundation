// src/components/rio/ChatMessages.tsx
import React from "react";
import { Message } from "./rio-types";
import { cn } from "@/lib/utils";

export const ChatMessages = React.memo(function ChatMessages({ messages, isTyping, endRef }: { messages: Message[]; isTyping: boolean; endRef?: React.RefObject<HTMLDivElement> }) {
  return (
    <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 bg-black">
      {messages.map((msg, idx) => (
        <div
          key={idx}
          className={cn(
            "flex flex-col max-w-[80%]",
            msg.role === "user" ? "ml-auto items-end" : "items-start"
          )}
        >
          <div
            className={cn(
              "px-4 py-2 rounded-2xl shadow-sm",
              msg.role === "user"
                ? "bg-mario-600 text-white rounded-br-md"
                : "bg-mario-600 text-white rounded-bl-md border border-mario-700"
            )}
          >
            {msg.content}
          </div>
          <span className="text-xs text-zinc-400 mt-1">
            {msg.timestamp ? new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : null}
          </span>
        </div>
      ))}
      {isTyping && (
        <div className="flex items-center gap-2 mt-2">
          <span className="w-2 h-2 rounded-full bg-zinc-400 animate-bounce [animation-delay:0ms]"></span>
          <span className="w-2 h-2 rounded-full bg-zinc-400 animate-bounce [animation-delay:150ms]"></span>
          <span className="w-2 h-2 rounded-full bg-zinc-400 animate-bounce [animation-delay:300ms]"></span>
        </div>
      )}
      <div ref={endRef} />
    </div>
  );
}); 