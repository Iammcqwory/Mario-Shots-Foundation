// src/components/rio/rio-utils.ts

export function detectIntent(message: string) {
  const msg = message.toLowerCase();

  if (
    msg.includes("tip") ||
    msg.includes("how do i") ||
    msg.includes("shoot") ||
    msg.includes("photo") ||
    msg.includes("edit") ||
    msg.includes("lighting") ||
    msg.includes("framing")
  ) {
    return "creative_coach";
  }

  if (
    msg.includes("advice") ||
    msg.includes("mario say") ||
    msg.includes("quote") ||
    msg.includes("legacy") ||
    msg.includes("challenge")
  ) {
    return "mentorship_legacy";
  }

  if (
    msg.includes("submit") ||
    msg.includes("upload") ||
    msg.includes("share my") ||
    msg.includes("story") ||
    msg.includes("legacy wall")
  ) {
    return "community_archivist";
  }

  if (
    msg.includes("join") ||
    msg.includes("register") ||
    msg.includes("event") ||
    msg.includes("bootcamp") ||
    msg.includes("program")
  ) {
    return "foundation_guide";
  }

  if (
    msg.includes("burnout") ||
    msg.includes("affirmation") ||
    msg.includes("mental health") ||
    msg.includes("check in") ||
    msg.includes("how are you") ||
    msg.includes("creative spirit")
  ) {
    return "mental_health_support";
  }

  if (
    msg.includes("mission") ||
    msg.includes("donate") ||
    msg.includes("gear") ||
    msg.includes("contact") ||
    msg.includes("about mario") ||
    msg.includes("faq")
  ) {
    return "faq";
  }

  if (
    msg.includes("critique") ||
    msg.includes("feedback on my photo") ||
    msg.includes("review my photo") ||
    msg.includes("what do you think of this picture")
  ) {
    return "photo_critique";
  }

  if (
    msg.includes("creative block") ||
    msg.includes("stuck creatively") ||
    msg.includes("need inspiration") ||
    msg.includes("uninspired")
  ) {
    return "creative_block";
  }

  if (
    msg.includes("who was mario") ||
    msg.includes("about mario") ||
    msg.includes("mario job ndege") ||
    msg.includes("mario's story")
  ) {
    return "mario_bio";
  }

  if (
    msg.includes("foundation history") ||
    msg.includes("how did the foundation start") ||
    msg.includes("foundation origin") ||
    msg.includes("foundation impact") ||
    msg.includes("what has the foundation achieved")
  ) {
    return "foundation_history";
  }

  if (
    msg.includes("volunteer") ||
    msg.includes("mentor") ||
    msg.includes("help out") ||
    msg.includes("get involved")
  ) {
    return "volunteer_info";
  }

  if (
    msg.includes("technical support") ||
    msg.includes("site isn't working") ||
    msg.includes("can't upload") ||
    msg.includes("problem with chat") ||
    msg.includes("issue with site")
  ) {
    return "technical_support";
  }

  if (msg.includes("gear") || msg.includes("camera recommendation")) return "gear_recommendation";
  if (msg.includes("edit") || msg.includes("editing tutorial")) return "editing_tutorial";
  if (msg.includes("inspire") || msg.includes("story")) return "inspirational_story";

  return "unknown";
}

export const intentResponses: Record<string, string[]> = {
  creative_coach: [
    "Here's a tip: Great photos start with great light! Try shooting during golden hour for beautiful, soft results.",
    "Mario always said: 'The best camera is the one you have with you.' Practice framing and experiment with angles!",
    "For portraits, focus on the eyes and use natural light when possible. Would you like a tutorial link?",
  ],
  mentorship_legacy: [
    "Mario believed in honest feedback and creative courage. One of his favorite quotes: 'See with your heart, not just your eyes.'",
    "Creative challenge: Take a photo that tells a story in a single frame. Want more challenges?",
    "Mario's advice: 'Don't be afraid to make mistakes. Every shot is a lesson.'",
  ],
  community_archivist: [
    "You can submit your photos or stories to our Legacy Wall! (Feature coming soon.)",
    "We'd love to preserve your memories. Soon, you'll be able to upload directly here.",
    "Want to share a tribute to Mario? Stay tuned for our submission portal!",
  ],
  foundation_guide: [
    "To join a bootcamp or event, check our Events page or ask me for upcoming dates!",
    "Our programs empower young creatives. Would you like to register or learn more?",
    "You can get involved by volunteering, attending events, or joining our workshops.",
  ],
  mental_health_support: [
    "How's your creative spirit today? Remember, it's okay to rest. Mario always encouraged balance.",
    "Affirmation: 'Your vision matters. Take a breath, and create at your own pace.'",
    "Feeling burnt out? Try a short walk or a new creative exercise. I'm here if you need support.",
  ],
  faq: [
    "The Mario Shots Foundation's mission is to empower youth through photography and storytelling.",
    "You can donate via our Donate page. Every contribution helps us reach more young creatives!",
    "Mario's favorite gear included a trusty DSLR and a keen eye for detail. Want recommendations?",
    "For more info or to contact us, visit our Contact page or ask me here!",
  ],
  photo_critique: [
    "Photo critique is coming soon! For now, try to focus on story, light, and emotion in your shots—just like Mario did!",
    "When you upload your photo, I'll offer feedback inspired by Mario's eye for detail and heart for story.",
  ],
  creative_block: [
    "Creative block happens to everyone—even Mario! Try changing your environment or shooting something totally new.",
    "Here's a prompt: Take a photo of something ordinary and make it extraordinary. Let your creativity flow!",
    "Mario would say: 'Sometimes, the best way to get unstuck is to just start shooting—no pressure, just play.'",
  ],
  mario_bio: [
    "Mario Job Ndege was a visionary photographer, mentor, and founder whose legacy inspires our foundation.",
    "Mario's story is one of creativity, compassion, and community. Want to know more about his journey or philosophy?",
    "He believed in seeing with the heart and empowering others through art. His legacy lives on in every frame.",
  ],
  foundation_history: [
    "The Mario Shots Foundation was started to honor Mario's life and empower young creatives through photography.",
    "Our foundation began as a tribute to Mario's impact and has grown to support youth, mental wellness, and storytelling.",
    "We've hosted workshops, exhibitions, and mentorship programs—impacting countless lives in Mario's spirit.",
  ],
  volunteer_info: [
    "We'd love to have you volunteer! You can mentor, help at events, or support our programs. Want to sign up?",
    "Mentors and volunteers are the heart of our foundation. Visit our Volunteer page or ask me for more info!",
    "Getting involved is easy—just let us know your interest, and we'll connect you with opportunities.",
  ],
  technical_support: [
    "Sorry you're having trouble! Try refreshing the page or checking your connection. If issues persist, contact our support team.",
    "If you can't upload or use the chat, please let us know via the Contact page. We're here to help!",
    "Technical hiccups happen. Describe your issue, and I'll do my best to guide you or connect you with support.",
  ],
  gear_recommendation: [
    "Mario loved using a simple DSLR, but the best camera is the one you have! Check out this guide: https://www.digitalcameraworld.com/buying-guides/best-cameras-for-beginners",
    "For beginners, try a Canon Rebel or Nikon D3500. More info: https://www.techradar.com/news/best-entry-level-dslr-camera"
  ],
  editing_tutorial: [
    "Here's a great video on editing basics: https://www.youtube.com/watch?v=F8T94sdiNjc",
    "Try this article for Lightroom tips: https://www.adobe.com/creativecloud/photography/discover/photo-editing-tips.html"
  ],
  inspirational_story: [
    "Mario once mentored a young photographer who went on to win a national award. Read more: https://marioshotsfoundation.org/stories",
    "Every great photographer started as a beginner. Here's an inspiring story: https://www.nationalgeographic.com/photography/article/inspiring-photographers"
  ],
  unknown: [
    "I'm here to help with anything about Mario, photography, or the foundation. Could you rephrase your question?",
    "I didn't quite catch that. Try asking about photography, Mario's legacy, or our programs!",
  ],
};

export const faqs = [
  {
    question: "How can I join a workshop?",
    keywords: ["join", "workshop", "sign up", "register"],
    answer: "You can sign up for our workshops through the Events page. Registration opens about a month before each workshop.",
    related: ["Do I need to bring my own camera?", "How can I apply for a grant?"]
  },
  {
    question: "Do I need to bring my own camera?",
    keywords: ["camera", "bring", "equipment"],
    answer: "No, we provide cameras and equipment for participants who don't have their own. Just bring your creativity!",
    related: ["How can I join a workshop?", "How can I apply for a grant?"]
  },
  {
    question: "How can I apply for a grant?",
    keywords: ["grant", "apply", "funding"],
    answer: "Grant applications are accepted quarterly. Visit our Programs page for details on the application process.",
    related: ["How can I join a workshop?", "Do I need to bring my own camera?"]
  },
  {
    question: "Can I volunteer as a mentor?",
    keywords: ["volunteer", "mentor", "help"],
    answer: "Yes! We're always looking for experienced photographers to mentor our participants. Fill out the volunteer form on our Volunteer page.",
    related: ["How can I join a workshop?", "How can I apply for a grant?"]
  },
];

export function searchFAQ(message: string) {
  const msg = message.toLowerCase();
  for (const faq of faqs) {
    if (faq.keywords.some((kw) => msg.includes(kw))) {
      return faq;
    }
  }
  return null;
}

export const dailyTips = [
  "Tip: Try shooting during golden hour for beautiful, soft light!",
  "Affirmation: Your creative vision matters. Keep going!",
  "Tip: Change your perspective—get low or high for a unique shot.",
  "Affirmation: Every photo is a step forward. Embrace the journey!",
  "Tip: Focus on the story, not just the subject."
];

export const easterEggs: { trigger: string; response: string }[] = [
  { trigger: "joke", response: "Why did the photographer get lost? Because he lost his focus!" },
  { trigger: "who's your creator", response: "I was created by the Mario Shots Foundation team—with a little help from AI!" },
  { trigger: "favorite camera", response: "RIO loves any camera that helps you tell your story!" },
];

export const chatThemes = [
  { name: "Light", value: "light" },
  { name: "Dark", value: "dark" },
  { name: "Mario Red", value: "mario" },
];

export const languages = [
  { name: "English", value: "en" },
  { name: "Swahili", value: "sw" },
]; 