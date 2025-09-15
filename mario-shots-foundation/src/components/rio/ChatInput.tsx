// src/components/rio/ChatInput.tsx
import React from "react";
import { Send } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

export const ChatInput = React.memo(function ChatInput({ input, setInput, handleSend, isTyping }: { input: string; setInput: (value: string) => void; handleSend: () => void; isTyping: boolean }) {
  return (
    <form
      className="flex items-center gap-2 px-4 py-3 border-t border-zinc-200 dark:border-zinc-800 rounded-b-2xl bg-black"
      onSubmit={e => { e.preventDefault(); handleSend(); }}
      role="search"
      aria-label="Send a message to RIO"
    >
      <Textarea
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleSend(); } }}
        placeholder="Ask RIO a question…"
        className="flex-1 min-h-[40px] max-h-24 rounded-lg border border-zinc-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-mario-400 resize-none bg-[#000] text-white"
        rows={1}
        aria-label="Type your message to RIO"
      />
      <button
        type="submit"
        className="ml-1 rounded-full bg-mario-600 hover:bg-mario-700 text-white p-3 shadow transition focus:outline-none focus:ring-2 focus:ring-mario-400"
        aria-label="Send message"
        disabled={!input.trim() || isTyping}
      >
        <Send className="h-5 w-5" />
      </button>
    </form>
  );
}); 