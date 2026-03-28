// src/components/rio/rio-utils.ts

export function detectIntent(message: string) {
  const msg = message.toLowerCase();

  // Navigation intents
  if (
    msg.includes("go to") ||
    msg.includes("take me to") ||
    msg.includes("navigate to") ||
    msg.includes("show me the") ||
    msg.includes("open the")
  ) {
    return "navigate";
  }

  // Theme switching
  if (
    msg.includes("dark mode") ||
    msg.includes("light mode") ||
    msg.includes("switch theme") ||
    msg.includes("toggle theme") ||
    msg.includes("change theme")
  ) {
    return "theme_switch";
  }

  // Photo challenges
  if (
    msg.includes("challenge") ||
    msg.includes("photo challenge") ||
    msg.includes("give me a challenge") ||
    msg.includes("daily challenge")
  ) {
    return "photo_challenge";
  }

  // Mario quotes
  if (
    msg.includes("inspire me") ||
    msg.includes("mario quote") ||
    msg.includes("wisdom") ||
    msg.includes("motivation") ||
    msg.includes("inspire")
  ) {
    return "mario_quote";
  }

  // Donation impact
  if (
    msg.includes("what can $") ||
    msg.includes("donation impact") ||
    msg.includes("how much can") ||
    msg.includes("what does $") ||
    msg.includes("impact of")
  ) {
    return "donation_impact";
  }

  // Newsletter
  if (
    msg.includes("newsletter") ||
    msg.includes("subscribe") ||
    msg.includes("email updates") ||
    msg.includes("sign up for updates")
  ) {
    return "newsletter";
  }

  // Event countdown
  if (
    msg.includes("when is") ||
    msg.includes("how long until") ||
    msg.includes("countdown") ||
    msg.includes("next event") ||
    msg.includes("upcoming event")
  ) {
    return "event_countdown";
  }

  // Social sharing
  if (
    msg.includes("share") ||
    msg.includes("tweet") ||
    msg.includes("post about") ||
    msg.includes("share to")
  ) {
    return "social_share";
  }

  // Language/Translation
  if (
    msg.includes("swahili") ||
    msg.includes("kiswahili") ||
    msg.includes("translate") ||
    msg.includes("habari") ||
    msg.includes("asante") ||
    msg.includes("jambo")
  ) {
    return "translate";
  }

  // Text-to-speech
  if (
    msg.includes("read aloud") ||
    msg.includes("read this") ||
    msg.includes("speak") ||
    msg.includes("say that") ||
    msg.includes("read out")
  ) {
    return "read_aloud";
  }

  // Program matcher
  if (
    msg.includes("which program") ||
    msg.includes("recommend a program") ||
    msg.includes("what program should") ||
    msg.includes("best program for me") ||
    msg.includes("program quiz")
  ) {
    return "program_matcher";
  }

  // Clear chat
  if (
    msg.includes("start fresh") ||
    msg.includes("clear chat") ||
    msg.includes("clear history") ||
    msg.includes("reset chat") ||
    msg.includes("new conversation")
  ) {
    return "clear_chat";
  }

  // Help menu
  if (
    msg === "help" ||
    msg === "?" ||
    msg.includes("what can you do") ||
    msg.includes("commands") ||
    msg.includes("show me what you can do") ||
    msg.includes("how do i use")
  ) {
    return "help_menu";
  }

  // Feedback
  if (
    msg.includes("give feedback") ||
    msg.includes("feedback about rio") ||
    msg.includes("rate rio") ||
    msg.includes("improve rio") ||
    msg.includes("suggestion for rio")
  ) {
    return "feedback";
  }

  // Badges/achievements
  if (
    msg.includes("my badges") ||
    msg.includes("achievements") ||
    msg.includes("what badges") ||
    msg.includes("show badges") ||
    msg.includes("my progress")
  ) {
    return "badges";
  }

  // Streak
  if (
    msg.includes("my streak") ||
    msg.includes("challenge streak") ||
    msg.includes("how many challenges")
  ) {
    return "streak";
  }

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
    msg.includes("legacy")
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

  if (msg.includes("gear") || msg.includes("camera recommendation") || msg.includes("what camera") || msg.includes("best lens")) return "gear_recommendation";
  if (msg.includes("edit") || msg.includes("editing tutorial")) return "editing_tutorial";

  return "unknown";
}

// Navigation routes mapping
export const navigationRoutes: Record<string, string> = {
  home: "/",
  programs: "/programs",
  gallery: "/gallery",
  events: "/events",
  about: "/about",
  contact: "/contact",
  donate: "/donate",
  volunteer: "/volunteer",
};

// Mario's inspirational quotes
export const marioQuotes = [
  "See with your heart, not just your eyes.",
  "The best stories are told through honest images.",
  "Don't be afraid to make mistakes. Every shot is a lesson.",
  "Photography is not about the camera—it's about seeing.",
  "Light reveals truth. Learn to work with it, not against it.",
  "Your perspective is unique. Trust it.",
  "A photograph should feel like a conversation, not a monologue.",
  "The moment you stop learning is the moment you stop growing.",
  "Every subject has a story. Your job is to find it.",
  "Patience is the photographer's greatest tool.",
  "The world is full of beauty—train your eye to see it.",
  "Create for yourself first. The audience will follow.",
  "Emotion is more important than perfection.",
  "The best photographs come from genuine connection.",
  "Never stop exploring. The next great shot is always ahead.",
];

// Daily photo challenges
export const photoChallenges = [
  "📸 Capture reflections in unexpected places.",
  "📸 Photograph the same subject from 5 different angles.",
  "📸 Tell a story using only shadows and light.",
  "📸 Find beauty in something ordinary today.",
  "📸 Capture emotion without showing a face.",
  "📸 Photograph a stranger's hands (with permission!).",
  "📸 Create a portrait using only natural light.",
  "📸 Document your neighborhood in 10 frames.",
  "📸 Capture motion blur intentionally.",
  "📸 Photograph textures around you.",
  "📸 Create a minimalist composition.",
  "📸 Tell a story through color alone.",
  "📸 Capture a decisive moment on the street.",
  "📸 Photograph the same location at dawn and dusk.",
  "📸 Create an abstract image from everyday objects.",
  "📸 Document someone's workspace.",
  "📸 Capture the essence of your city in one frame.",
  "📸 Photograph leading lines in architecture.",
  "📸 Create a self-portrait that tells your story.",
  "📸 Find and photograph patterns in nature.",
];

// Gear recommendations by category
export const gearRecommendations: Record<string, string[]> = {
  beginner: [
    "📷 Canon EOS Rebel T7 - Great entry-level DSLR with excellent image quality.",
    "📷 Nikon D3500 - Lightweight, easy to use, perfect for learning.",
    "📷 Sony a6100 - Mirrorless option with fast autofocus.",
    "📱 Your smartphone! - The best camera is the one you have with you.",
  ],
  portrait: [
    "🎯 50mm f/1.8 lens - The 'nifty fifty' is perfect for portraits.",
    "🎯 85mm f/1.8 lens - Creates beautiful background blur.",
    "💡 Reflector - Affordable way to improve lighting.",
  ],
  street: [
    "📷 Fujifilm X100V - Compact, discreet, excellent image quality.",
    "📷 Ricoh GR III - Pocketable street photography legend.",
    "👟 Comfortable shoes - You'll be walking a lot!",
  ],
  wildlife: [
    "🔭 70-300mm telephoto lens - Good reach without breaking the bank.",
    "🎒 Sturdy tripod - Essential for sharp wildlife shots.",
    "⏰ Patience - The most important gear of all!",
  ],
};

// Donation impact descriptions
export const donationImpacts = [
  { amount: 10, impact: "Provides photography prints for one exhibition participant." },
  { amount: 25, impact: "Supplies a workshop participant with basic photography materials." },
  { amount: 50, impact: "Provides a camera for a weekend workshop participant." },
  { amount: 100, impact: "Sponsors one youth for a full workshop program." },
  { amount: 250, impact: "Funds mental wellness resources for 10 creatives." },
  { amount: 500, impact: "Supports a community exhibition showcasing emerging artists." },
  { amount: 1000, impact: "Sponsors a full photography bootcamp for 5 youth." },
];

// Swahili responses
export const swahiliResponses: Record<string, string> = {
  greeting: "Karibu! Mimi ni RIO, msaidizi wako wa Mario Shots Foundation. Ninaweza kukusaidia vipi leo?",
  programs: "Programu zetu zinajumuisha Warsha za Upigaji Picha, Afya ya Akili, na Hifadhi ya Sanaa. Je, ungependa kujua zaidi?",
  donate: "Asante kwa kufikiri kutoa mchango! Mchango wako unasaidia vijana wabunifu. Tembelea ukurasa wetu wa Mchango.",
  thanks: "Asante sana! Je, kuna kitu kingine ninachoweza kukusaidia?",
  goodbye: "Kwaheri! Karibu tena wakati wowote.",
  unknown: "Samahani, sikuelewa vizuri. Unaweza kuuliza kuhusu programu zetu, matukio, au historia ya Mario.",
};

// Upcoming events for countdown
export const upcomingEventsData = [
  { name: "Photography Essentials Workshop", date: "2026-06-15" },
  { name: "Mario Legacy Exhibition", date: "2026-07-05" },
  { name: "Creative Mental Health Dialogue", date: "2026-07-25" },
];

// Help menu content
export const helpMenuContent = `
🤖 **RIO Commands & Features**

📍 **Navigation**
• "Go to [page]" - Navigate to any page
• "Dark/Light mode" - Switch theme

📸 **Photography**
• "Give me a challenge" - Get a photo challenge
• "Inspire me" - Get a Mario quote
• "Gear recommendations" - Camera/lens advice

🎯 **Foundation**
• "When is the next event" - Event countdown
• "What can $50 do" - Donation impact
• "Subscribe newsletter" - Stay updated
• "Which program for me" - Find your program

🌍 **Accessibility**
• "Habari" - Switch to Swahili
• "Read this" - Text-to-speech

🏆 **Your Progress**
• "My badges" - View achievements
• "My streak" - Challenge streak

🔧 **Utility**
• "Start fresh" - Clear chat
• "Give feedback" - Share suggestions
• "Help" - Show this menu

Just type naturally—I understand many variations! 💬
`;

// Achievement badges
export const achievementBadges = [
  { id: "first_chat", name: "First Contact", icon: "👋", description: "Started your first conversation with RIO" },
  { id: "challenge_1", name: "Challenge Accepted", icon: "📸", description: "Completed your first photo challenge" },
  { id: "challenge_5", name: "Rising Star", icon: "⭐", description: "Completed 5 photo challenges" },
  { id: "challenge_10", name: "Dedicated Creator", icon: "🌟", description: "Completed 10 photo challenges" },
  { id: "streak_3", name: "On a Roll", icon: "🔥", description: "3-day challenge streak" },
  { id: "streak_7", name: "Week Warrior", icon: "💪", description: "7-day challenge streak" },
  { id: "streak_30", name: "Monthly Master", icon: "🏆", description: "30-day challenge streak" },
  { id: "explorer", name: "Explorer", icon: "🧭", description: "Used navigation to visit 5 pages" },
  { id: "subscriber", name: "Community Member", icon: "💌", description: "Subscribed to the newsletter" },
  { id: "multilingual", name: "Multilingual", icon: "🌍", description: "Used RIO in Swahili" },
  { id: "sharer", name: "Ambassador", icon: "📣", description: "Shared foundation content on social media" },
  { id: "helper", name: "Feedback Hero", icon: "💡", description: "Provided feedback to help improve RIO" },
];

// Extended daily photography tips
export const extendedDailyTips = [
  "💡 Morning light tip: The hour after sunrise offers soft, warm light perfect for portraits.",
  "💡 Composition tip: Try the rule of thirds—place your subject off-center for more dynamic shots.",
  "💡 Street tip: Shoot with a wide angle and get close to your subjects for intimate street photos.",
  "💡 Portrait tip: Focus on the eyes—they're the window to the soul in any portrait.",
  "💡 Landscape tip: Include foreground elements to add depth to your landscape shots.",
  "💡 Night tip: Use a tripod and long exposure to capture beautiful light trails.",
  "💡 Color tip: Look for complementary colors to make your subjects pop.",
  "💡 Story tip: Before pressing the shutter, ask yourself: 'What story am I telling?'",
  "💡 Mobile tip: Clean your phone lens! A smudge can ruin an otherwise perfect shot.",
  "💡 Weather tip: Overcast days provide natural soft boxes—perfect for outdoor portraits.",
  "💡 Practice tip: Take 100 photos of the same subject from different angles.",
  "💡 Patience tip: The best wildlife shots require waiting—bring a book!",
  "💡 Creativity tip: Set a limitation (one lens, one location) to boost creativity.",
  "💡 Editing tip: Less is more—subtle edits often look more professional.",
  "💡 Mario's wisdom: 'The best camera is the one you have with you.'",
];

export const intentResponses: Record<string, string[]> = {
  navigate: [
    "I'll take you there right away! 🚀",
  ],
  theme_switch: [
    "Switching theme for you! ✨",
  ],
  photo_challenge: [
    "Here's your photography challenge! Good luck! 📸",
  ],
  mario_quote: [
    "Here's some wisdom from Mario...",
  ],
  donation_impact: [
    "Here's what your donation can accomplish:",
  ],
  newsletter: [
    "Great! I'd love to keep you updated. What's your email address?",
  ],
  event_countdown: [
    "Let me check the upcoming events for you! 🗓️",
  ],
  social_share: [
    "I'll help you share! Which platform would you like to use?",
  ],
  translate: [
    "Karibu! I can help you in Swahili.",
  ],
  read_aloud: [
    "I'll read that for you! 🔊",
  ],
  program_matcher: [
    "Let me help you find the perfect program! What's your main interest: photography skills, mental wellness, or community storytelling?",
  ],
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
    "Mario loved using a simple DSLR, but the best camera is the one you have! Want recommendations for a specific type of photography?",
  ],
  editing_tutorial: [
    "Here's a great video on editing basics: https://www.youtube.com/watch?v=F8T94sdiNjc",
    "Try this article for Lightroom tips: https://www.adobe.com/creativecloud/photography/discover/photo-editing-tips.html",
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
    related: ["Do I need to bring my own camera?", "How can I apply for a grant?"],
  },
  {
    question: "Do I need to bring my own camera?",
    keywords: ["camera", "bring", "equipment"],
    answer: "No, we provide cameras and equipment for participants who don't have their own. Just bring your creativity!",
    related: ["How can I join a workshop?", "How can I apply for a grant?"],
  },
  {
    question: "How can I apply for a grant?",
    keywords: ["grant", "apply", "funding"],
    answer: "Grant applications are accepted quarterly. Visit our Programs page for details on the application process.",
    related: ["How can I join a workshop?", "Do I need to bring my own camera?"],
  },
  {
    question: "Can I volunteer as a mentor?",
    keywords: ["volunteer", "mentor", "help"],
    answer: "Yes! We're always looking for experienced photographers to mentor our participants. Fill out the volunteer form on our Volunteer page.",
    related: ["How can I join a workshop?", "How can I apply for a grant?"],
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
  "Tip: Focus on the story, not just the subject.",
];

export const easterEggs: { trigger: string; response: string }[] = [
  { trigger: "joke", response: "Why did the photographer get lost? Because he lost his focus! 📸😄" },
  { trigger: "who's your creator", response: "I was created by the Mario Shots Foundation team—with a little help from AI! 🤖✨" },
  { trigger: "favorite camera", response: "RIO loves any camera that helps you tell your story! 📷❤️" },
  { trigger: "secret", response: "Psst! Here's a secret: The magic isn't in the camera—it's in you! ✨" },
  { trigger: "mario mario mario", response: "🎮 It's-a me, RIO! (But I'm inspired by the legendary Mario Job Ndege, not the plumber! 😉)" },
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

// Helper function to get random item from array
export function getRandomItem<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Helper function to extract page name from message
export function extractPageName(message: string): string | null {
  const msg = message.toLowerCase();
  for (const page of Object.keys(navigationRoutes)) {
    if (msg.includes(page)) {
      return page;
    }
  }
  return null;
}

// Helper function to parse donation amount from message
export function extractDonationAmount(message: string): number | null {
  const match = message.match(/\$?(\d+)/);
  if (match) {
    return parseInt(match[1], 10);
  }
  return null;
}

// Helper function to get donation impact
export function getDonationImpact(amount: number): string {
  const sorted = [...donationImpacts].sort((a, b) => b.amount - a.amount);
  for (const tier of sorted) {
    if (amount >= tier.amount) {
      return `With $${amount}, you can: ${tier.impact}`;
    }
  }
  return `Every dollar helps! Your $${amount} contribution makes a difference.`;
}

// Helper function to get event countdown
export function getEventCountdown(eventName?: string): string {
  const now = new Date();
  const events = upcomingEventsData
    .map((e) => ({ ...e, dateObj: new Date(e.date) }))
    .filter((e) => e.dateObj > now)
    .sort((a, b) => a.dateObj.getTime() - b.dateObj.getTime());

  if (events.length === 0) {
    return "No upcoming events scheduled at the moment. Check back soon!";
  }

  let event = events[0];
  if (eventName) {
    const found = events.find((e) => e.name.toLowerCase().includes(eventName.toLowerCase()));
    if (found) event = found;
  }

  const diffTime = event.dateObj.getTime() - now.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return `🎉 ${event.name} is TODAY!`;
  if (diffDays === 1) return `🗓️ ${event.name} is TOMORROW!`;
  return `🗓️ ${event.name} is in ${diffDays} days! (${event.date})`;
}
