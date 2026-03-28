// src/components/rio/ChatInput.tsx
import React from "react";
import { Send } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

export const ChatInput = React.memo(function ChatInput({ input, setInput, handleSend, isTyping }: { input: string; setInput: (value: string) => void; handleSend: () => void; isTyping: boolean }) {
  return (
    <div className="flex flex-col bg-black border-t border-zinc-900 rounded-b-2xl overflow-hidden">
      {/* Suggested Questions */}
      {!input && (
        <div className="flex gap-2 p-3 overflow-x-auto no-scrollbar mask-fade-right">
          {["How can I join a workshop?", "Volunteer opportunities", "Tell me about Mario", "Camera advice"].map((q, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setInput(q)}
              className="flex-shrink-0 text-xs bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-300 px-3 py-1.5 rounded-full transition-colors whitespace-nowrap"
            >
              {q}
            </button>
          ))}
        </div>
      )}

      <form
        className="flex items-center gap-2 px-4 pb-3 pt-1"
        onSubmit={e => { e.preventDefault(); handleSend(); }}
        role="search"
        aria-label="Send a message to RIO"
      >
        <Textarea
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleSend(); } }}
          placeholder="Ask RIO a question…"
          className="flex-1 min-h-[40px] max-h-24 rounded-lg border border-zinc-800 bg-zinc-900/50 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-mario-600 resize-none text-white placeholder:text-zinc-500"
          rows={1}
          aria-label="Type your message to RIO"
        />
        <button
          type="submit"
          className="ml-1 rounded-full bg-red-600 hover:bg-mario-700 text-white p-2.5 shadow transition focus:outline-none focus:ring-2 focus:ring-mario-400 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Send message"
          disabled={!input.trim() || isTyping}
        >
          <Send className="h-4 w-4" />
        </button>
      </form>
    </div>
  );
}); 