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

export function handlePortraitAdviceFlow(params: {
  conversationState: string | null;
  input: string;
}): ConversationStepResult | null {
  const { conversationState, input } = params;

  if (conversationState === "awaiting_portrait_type") {
    return {
      assistantMessage: {
        role: "assistant",
        content: `Great! Are you shooting with a phone or a camera?`,
        timestamp: new Date(),
      },
      nextState: "awaiting_portrait_device",
      nextContext: { portraitType: input },
    };
  }

  if (conversationState === "awaiting_portrait_device") {
    return {
      assistantMessage: {
        role: "assistant",
        content: input.toLowerCase().includes("phone")
          ? "Portraits on phones are great! Use natural light and focus on the eyes. Want a quick tutorial or editing tips?"
          : "For professional portraits, lighting and connection are key. Want a tutorial or editing tips?",
        timestamp: new Date(),
      },
      nextState: null,
      nextContext: {},
    };
  }

  return null;
}

export function handleMentalHealthFlow(params: {
  conversationState: string | null;
  input: string;
}): ConversationStepResult | null {
  const { conversationState, input } = params;

  if (conversationState === "awaiting_checkin_option") {
    if (input.toLowerCase().includes("affirmation")) {
      return {
        assistantMessage: {
          role: "assistant",
          content: `Affirmation: "Your vision matters. Take a breath, and create at your own pace."`,
          timestamp: new Date(),
        },
        nextState: null,
      };
    }
    if (input.toLowerCase().includes("self-care")) {
      return {
        assistantMessage: {
          role: "assistant",
          content: `Take a short break and do something you love outside photography. Would you like a daily check-in reminder?`,
          timestamp: new Date(),
        },
        nextState: "awaiting_checkin_reminder",
      };
    }
    return {
      assistantMessage: {
        role: "assistant",
        content: `I'm here to listen. Remember, you're not alone.`,
        timestamp: new Date(),
      },
      nextState: null,
    };
  }

  if (conversationState === "awaiting_checkin_reminder") {
    return {
      assistantMessage: {
        role: "assistant",
        content: input.toLowerCase().includes("yes")
          ? `I'll check in with you daily! Stay creative and take care.`
          : `No problem! I'm always here if you need a boost.`,
        timestamp: new Date(),
      },
      nextState: null,
    };
  }

  return null;
}

export function handleCritiqueFlow(params: {
  conversationState: string | null;
  input: string;
}): ConversationStepResult | null {
  const { conversationState, input } = params;

  if (conversationState === "awaiting_critique_method") {
    const isUpload = input.toLowerCase().includes("upload");
    return {
      assistantMessage: {
        role: "assistant",
        content: isUpload
          ? `Photo upload is coming soon! For now, you can describe your photo for feedback.`
          : `Go ahead and describe your photo. What were you hoping to capture?`,
        timestamp: new Date(),
      },
      nextState: "awaiting_critique_description",
    };
  }

  if (conversationState === "awaiting_critique_description") {
    return {
      assistantMessage: {
        role: "assistant",
        content: `That sounds beautiful! Pay attention to contrast and composition. Would you like tips on editing?`,
        timestamp: new Date(),
      },
      nextState: null,
    };
  }

  return null;
}

export function handleVolunteerFlow(params: {
  conversationState: string | null;
  input: string;
}): ConversationStepResult | null {
  const { conversationState, input } = params;

  if (conversationState === "awaiting_volunteer_type") {
    return {
      assistantMessage: {
        role: "assistant",
        content: `Do you have experience in photography, video, or another creative field?`,
        timestamp: new Date(),
      },
      nextState: "awaiting_volunteer_experience",
      nextContext: { volunteerType: input },
    };
  }

  if (conversationState === "awaiting_volunteer_experience") {
    return {
      assistantMessage: {
        role: "assistant",
        content: `Perfect. Please share a bit about your background, and we'll connect you with our mentorship team.`,
        timestamp: new Date(),
      },
      nextState: null,
    };
  }

  return null;
}

export function handleTechSupportFlow(params: {
  conversationState: string | null;
  input: string;
}): ConversationStepResult | null {
  const { conversationState, input } = params;

  if (conversationState === "awaiting_tech_issue_type") {
    const isError = input.toLowerCase().includes("error");
    return {
      assistantMessage: {
        role: "assistant",
        content: isError
          ? `Can you tell me what the error message says? I'll help you fix it or connect you with support.`
          : `Are you seeing an error message, or is the upload button not working?`,
        timestamp: new Date(),
      },
      nextState: null,
    };
  }

  return null;
}
