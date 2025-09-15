// src/components/rio/ChatHeader.tsx
import React from "react";
import { ChevronDown, ChevronUp, X } from "lucide-react";
import Image from "next/image";

export const ChatHeader = React.memo(function ChatHeader({ isMinimized, toggleMinimize, toggleChat }: { isMinimized: boolean; toggleMinimize: () => void; toggleChat: () => void; }) {
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-mario-600 text-white rounded-t-2xl">
      <div className="flex items-center gap-2">
        <div className="relative w-10 h-10 rounded-full bg-white flex items-center justify-center overflow-hidden">
          <Image src="/images/logo/rio-logo.png" alt="RIO" fill className="object-contain" />
        </div>
        <span className="font-bold text-lg tracking-wide">RIO Assistant</span>
      </div>
      <div className="flex gap-1">
        <button
          onClick={toggleMinimize}
          aria-label={isMinimized ? "Expand chat" : "Minimize chat"}
          className="rounded-full p-1 hover:bg-mario-700 focus:outline-none focus:ring-2 focus:ring-white"
        >
          {isMinimized ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        </button>
        <button
          onClick={toggleChat}
          aria-label="Close chat"
          className="rounded-full p-1 hover:bg-mario-700 focus:outline-none focus:ring-2 focus:ring-white"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}); 