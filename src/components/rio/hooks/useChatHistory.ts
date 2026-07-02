// src/components/rio/hooks/useChatHistory.ts
import { useEffect, useState } from "react";
import type { Message } from "../rio-types";

export function useChatHistory(storageKey: string, initialMessages: Message[]) {
  const [messages, setMessages] = useState<Message[]>(initialMessages);

  // Load
  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        setMessages(JSON.parse(saved));
      }
    } catch {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Save
  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(messages));
    } catch {}
  }, [storageKey, messages]);

  return { messages, setMessages } as const;
}
