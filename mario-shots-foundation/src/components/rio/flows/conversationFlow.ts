import type { Message } from "../rio-types";

export type ConversationStepResult = {
  assistantMessage: Message | null;
  nextState: string | null;
  nextContext?: Record<string, unknown>;
};

export function handleEventRegistrationFlow(params: {
  conversationState: string | null;
  input: string;
  pendingEventType: string | null;
}): ConversationStepResult | null {
  const { conversationState, input, pendingEventType } = params;

  if (conversationState === "awaiting_event_type") {
    return {
      assistantMessage: {
        role: "assistant",
        content: `Would you like to register for the next available ${input}? If yes, please reply 'register'.`,
        timestamp: new Date(),
      },
      nextState: "awaiting_event_register",
      nextContext: {},
    };
  }

  if (conversationState === "awaiting_event_register") {
    if (input.toLowerCase().includes("register")) {
      return {
        assistantMessage: {
          role: "assistant",
          content: `Great! Please provide your name.`,
          timestamp: new Date(),
        },
        nextState: "awaiting_event_name",
      };
    }
    return {
      assistantMessage: {
        role: "assistant",
        content: `No problem! Let me know if you want to register later or see upcoming dates on our Events page.`,
        timestamp: new Date(),
      },
      nextState: null,
    };
  }

  if (conversationState === "awaiting_event_name") {
    return {
      assistantMessage: {
        role: "assistant",
        content: `Thanks, ${input}! Now, please provide your email address for registration confirmation.`,
        timestamp: new Date(),
      },
      nextState: "awaiting_event_email",
    };
  }

  if (conversationState === "awaiting_event_email") {
    return {
      assistantMessage: {
        role: "assistant",
        content: `You're registered for the next ${pendingEventType || "event"}! Confirmation will be sent to ${input}. Thank you!`,
        timestamp: new Date(),
      },
      nextState: null,
    };
  }

  return null;
}

export function handleMentorshipChallengeFlow(params: {
  conversationState: string | null;
  input: string;
}): ConversationStepResult | null {
  const { conversationState, input } = params;

  if (conversationState === "awaiting_challenge_subject") {
    return {
      assistantMessage: {
        role: "assistant",
        content: `Your challenge: Capture a photo that tells a story about ${input}. Want a quote from Mario for inspiration?`,
        timestamp: new Date(),
      },
      nextState: "awaiting_challenge_quote",
      nextContext: { subject: input },
    };
  }

  if (conversationState === "awaiting_challenge_quote") {
    return {
      assistantMessage: {
        role: "assistant",
        content: input.toLowerCase().includes("yes")
          ? `Mario: "See with your heart, not just your eyes." Good luck!`
          : `Go for it! Let me know if you want more inspiration.`,
        timestamp: new Date(),
      },
      nextState: null,
      nextContext: {},
    };
  }

  return null;
}

export function handleCommunityStoryFlow(params: {
  conversationState: string | null;
  input: string;
}): ConversationStepResult | null {
  const { conversationState, input } = params;

  if (conversationState === "awaiting_story_type") {
    return {
      assistantMessage: {
        role: "assistant",
        content: `Would you like to write your story here, or upload a photo to go with it?`,
        timestamp: new Date(),
      },
      nextState: "awaiting_story_method",
      nextContext: { storyType: input },
    };
  }

  if (conversationState === "awaiting_story_method") {
    const writing = input.toLowerCase().includes("write");
    return {
      assistantMessage: {
        role: "assistant",
        content: writing
          ? `Go ahead and share your story. I'm listening!`
          : `Photo upload coming soon! For now, feel free to write your story here.`,
        timestamp: new Date(),
      },
      nextState: null,
      nextContext: {},
    };
  }

  return null;
}


