// src/components/rio/rio-types.ts

export type Message = {
  role: "user" | "assistant";
  content: string;
  timestamp: Date | null;
};

export const initialMessages: Omit<Message, 'timestamp'>[] = [
  {
    role: "assistant",
    content: "Hello! I'm RIO, your photography assistant. How can I help you today?",
  },
]; 