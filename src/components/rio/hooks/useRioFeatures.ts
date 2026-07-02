"use client";

import { useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import {
    navigationRoutes,
    marioQuotes,
    photoChallenges,
    gearRecommendations,
    swahiliResponses,
    getRandomItem,
    getDonationImpact,
    getEventCountdown,
    extractPageName,
    extractDonationAmount,
    helpMenuContent,
    achievementBadges,
    extendedDailyTips,
} from "../rio-utils";

// Local storage keys
const PREFERENCES_KEY = "rio-user-preferences";
const BADGES_KEY = "rio-user-badges";
const STATS_KEY = "rio-user-stats";

interface UserPreferences {
    language: "en" | "sw";
    userName?: string;
    newsletterSubscribed: boolean;
    lastChallengeDate?: string;
    lastChallengeIndex?: number;
    lastDailyTipDate?: string;
}

interface UserStats {
    challengesCompleted: number;
    currentStreak: number;
    longestStreak: number;
    lastStreakDate?: string;
    pagesVisited: string[];
    feedbackGiven: boolean;
}

const defaultPreferences: UserPreferences = {
    language: "en",
    newsletterSubscribed: false,
};

const defaultStats: UserStats = {
    challengesCompleted: 0,
    currentStreak: 0,
    longestStreak: 0,
    pagesVisited: [],
    feedbackGiven: false,
};

export function useRioFeatures() {
    const router = useRouter();
    const { setTheme, theme } = useTheme();
    const speechRef = useRef<SpeechSynthesisUtterance | null>(null);

    // ============ User Preferences ============
    const getPreferences = useCallback((): UserPreferences => {
        if (typeof window === "undefined") return defaultPreferences;
        try {
            const stored = localStorage.getItem(PREFERENCES_KEY);
            return stored ? { ...defaultPreferences, ...JSON.parse(stored) } : defaultPreferences;
        } catch {
            return defaultPreferences;
        }
    }, []);

    const savePreference = useCallback(<K extends keyof UserPreferences>(
        key: K,
        value: UserPreferences[K]
    ) => {
        if (typeof window === "undefined") return;
        const current = getPreferences();
        const updated = { ...current, [key]: value };
        localStorage.setItem(PREFERENCES_KEY, JSON.stringify(updated));
    }, [getPreferences]);

    // ============ User Stats ============
    const getStats = useCallback((): UserStats => {
        if (typeof window === "undefined") return defaultStats;
        try {
            const stored = localStorage.getItem(STATS_KEY);
            return stored ? { ...defaultStats, ...JSON.parse(stored) } : defaultStats;
        } catch {
            return defaultStats;
        }
    }, []);

    const saveStats = useCallback((stats: Partial<UserStats>) => {
        if (typeof window === "undefined") return;
        const current = getStats();
        const updated = { ...current, ...stats };
        localStorage.setItem(STATS_KEY, JSON.stringify(updated));
    }, [getStats]);

    // ============ Badges ============
    const getUserBadges = useCallback((): string[] => {
        if (typeof window === "undefined") return [];
        try {
            const stored = localStorage.getItem(BADGES_KEY);
            return stored ? JSON.parse(stored) : [];
        } catch {
            return [];
        }
    }, []);

    const awardBadge = useCallback((badgeId: string): boolean => {
        const current = getUserBadges();
        if (current.includes(badgeId)) return false;

        const updated = [...current, badgeId];
        localStorage.setItem(BADGES_KEY, JSON.stringify(updated));
        return true;
    }, [getUserBadges]);

    const getBadgesDisplay = useCallback((): string => {
        const userBadges = getUserBadges();
        const stats = getStats();

        if (userBadges.length === 0) {
            return "🏆 **Your Badges**\n\nYou haven't earned any badges yet! Start by:\n• Completing a photo challenge\n• Subscribing to the newsletter\n• Using RIO in Swahili\n\nKeep exploring to unlock achievements!";
        }

        const earned = achievementBadges
            .filter(b => userBadges.includes(b.id))
            .map(b => `${b.icon} **${b.name}** - ${b.description}`)
            .join("\n");

        const locked = achievementBadges
            .filter(b => !userBadges.includes(b.id))
            .length;

        return `🏆 **Your Badges** (${userBadges.length}/${achievementBadges.length})\n\n${earned}\n\n🔒 ${locked} more badges to unlock!\n\n📊 Stats: ${stats.challengesCompleted} challenges | ${stats.currentStreak} day streak`;
    }, [getUserBadges, getStats]);

    // ============ Streak Tracking ============
    const getStreakDisplay = useCallback((): string => {
        const stats = getStats();
        const today = new Date().toDateString();

        let streakEmoji = "🔥";
        if (stats.currentStreak >= 7) streakEmoji = "💪";
        if (stats.currentStreak >= 30) streakEmoji = "🏆";

        if (stats.currentStreak === 0) {
            return "📸 **Challenge Streak**\n\nYou don't have an active streak yet!\n\nComplete a photo challenge to start your streak. Consistency is key to improvement!";
        }

        let message = `${streakEmoji} **Challenge Streak: ${stats.currentStreak} days!**\n\n`;
        message += `🏅 Longest streak: ${stats.longestStreak} days\n`;
        message += `📸 Total challenges: ${stats.challengesCompleted}\n\n`;

        if (stats.lastStreakDate !== today) {
            message += "⚠️ Don't forget to complete today's challenge to keep your streak!";
        } else {
            message += "✅ Today's challenge completed! Keep it up!";
        }

        return message;
    }, [getStats]);

    const completeChallenge = useCallback((): string => {
        const stats = getStats();
        const today = new Date().toDateString();
        const yesterday = new Date(Date.now() - 86400000).toDateString();

        let newStreak = 1;
        if (stats.lastStreakDate === yesterday) {
            newStreak = stats.currentStreak + 1;
        } else if (stats.lastStreakDate === today) {
            return "You've already completed today's challenge! Come back tomorrow for a new one. 🌟";
        }

        const newStats = {
            challengesCompleted: stats.challengesCompleted + 1,
            currentStreak: newStreak,
            longestStreak: Math.max(stats.longestStreak, newStreak),
            lastStreakDate: today,
        };

        saveStats(newStats);

        // Award badges
        if (newStats.challengesCompleted === 1) awardBadge("challenge_1");
        if (newStats.challengesCompleted === 5) awardBadge("challenge_5");
        if (newStats.challengesCompleted === 10) awardBadge("challenge_10");
        if (newStats.currentStreak === 3) awardBadge("streak_3");
        if (newStats.currentStreak === 7) awardBadge("streak_7");
        if (newStats.currentStreak === 30) awardBadge("streak_30");

        let response = `🎉 Challenge completed! That's ${newStats.challengesCompleted} total!\n\n`;
        response += `🔥 Current streak: ${newStats.currentStreak} days`;

        if (newStats.currentStreak > stats.longestStreak) {
            response += " (New record! 🏆)";
        }

        return response;
    }, [getStats, saveStats, awardBadge]);

    // ============ Navigation ============
    const navigateToPage = useCallback((message: string): string => {
        const pageName = extractPageName(message);
        if (pageName && navigationRoutes[pageName]) {
            // Track page visits for badge
            const stats = getStats();
            if (!stats.pagesVisited.includes(pageName)) {
                const newPages = [...stats.pagesVisited, pageName];
                saveStats({ pagesVisited: newPages });
                if (newPages.length >= 5) awardBadge("explorer");
            }

            router.push(navigationRoutes[pageName]);
            return `Taking you to the ${pageName.charAt(0).toUpperCase() + pageName.slice(1)} page! 🚀`;
        }
        return "I couldn't find that page. Try saying 'go to about', 'go to events', or 'go to gallery'.";
    }, [router, getStats, saveStats, awardBadge]);

    // ============ Theme Switching ============
    const toggleTheme = useCallback((message: string): string => {
        const msg = message.toLowerCase();
        if (msg.includes("dark")) {
            setTheme("dark");
            return "Done! Switched to dark mode. 🌙";
        } else if (msg.includes("light")) {
            setTheme("light");
            return "Done! Switched to light mode. ☀️";
        } else {
            setTheme(theme === "dark" ? "light" : "dark");
            return `Switched to ${theme === "dark" ? "light" : "dark"} mode! ✨`;
        }
    }, [setTheme, theme]);

    // ============ Photo Challenges ============
    const getDailyChallenge = useCallback((): string => {
        const today = new Date().toDateString();
        const prefs = getPreferences();

        if (prefs.lastChallengeDate === today && prefs.lastChallengeIndex !== undefined) {
            return `Today's Challenge: ${photoChallenges[prefs.lastChallengeIndex]}\n\nType "completed" when you finish to track your progress!`;
        }

        const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000);
        const index = dayOfYear % photoChallenges.length;

        savePreference("lastChallengeDate", today);
        savePreference("lastChallengeIndex", index);

        return `Today's Challenge: ${photoChallenges[index]}\n\nType "completed" when you finish to track your progress!`;
    }, [getPreferences, savePreference]);

    const getRandomChallenge = useCallback((): string => {
        return `Here's a challenge for you: ${getRandomItem(photoChallenges)}`;
    }, []);

    // ============ Mario Quotes ============
    const getMarioQuote = useCallback((): string => {
        const quote = getRandomItem(marioQuotes);
        return `💭 Mario once said: "${quote}"`;
    }, []);

    // ============ Gear Recommendations ============
    const getGearAdvice = useCallback((message: string): string => {
        const msg = message.toLowerCase();

        let category = "beginner";
        if (msg.includes("portrait")) category = "portrait";
        else if (msg.includes("street")) category = "street";
        else if (msg.includes("wildlife") || msg.includes("nature")) category = "wildlife";

        const recommendations = gearRecommendations[category];
        if (recommendations) {
            return `Here are some ${category} photography gear recommendations:\n\n${recommendations.join("\n")}`;
        }

        return `For ${category} photography, I'd recommend starting with what you have! What type of photography interests you most: portraits, street, or wildlife?`;
    }, []);

    // ============ Donation Impact ============
    const calculateDonationImpact = useCallback((message: string): string => {
        const amount = extractDonationAmount(message);
        if (amount) {
            return getDonationImpact(amount);
        }
        return "Tell me a donation amount (e.g., 'What can $50 do?') and I'll show you the impact!";
    }, []);

    // ============ Event Countdown ============
    const getNextEventCountdown = useCallback((message: string): string => {
        const msg = message.toLowerCase();
        let eventName: string | undefined;

        if (msg.includes("workshop")) eventName = "workshop";
        else if (msg.includes("exhibition")) eventName = "exhibition";
        else if (msg.includes("dialogue") || msg.includes("mental")) eventName = "dialogue";

        return getEventCountdown(eventName);
    }, []);

    // ============ Newsletter ============
    const subscribeNewsletter = useCallback((email: string): string => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return "That doesn't look like a valid email. Please try again with a valid email address.";
        }

        savePreference("newsletterSubscribed", true);
        awardBadge("subscriber");
        return `🎉 You're subscribed! We'll send updates to ${email}. Thank you for joining our community!`;
    }, [savePreference, awardBadge]);

    // ============ Social Sharing ============
    const shareContent = useCallback((platform: string): string => {
        const shareText = encodeURIComponent("Check out the Mario Shots Foundation - empowering youth through photography! #MarioShotsFoundation");
        const shareUrl = encodeURIComponent("https://marioshotsfoundation.org");

        let url = "";
        const platformLower = platform.toLowerCase();

        if (platformLower.includes("twitter") || platformLower.includes("x")) {
            url = `https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`;
        } else if (platformLower.includes("facebook")) {
            url = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`;
        } else if (platformLower.includes("linkedin")) {
            url = `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`;
        } else if (platformLower.includes("whatsapp")) {
            url = `https://wa.me/?text=${shareText}%20${shareUrl}`;
        } else {
            return "You can share on Twitter, Facebook, LinkedIn, or WhatsApp. Which would you prefer?";
        }

        if (typeof window !== "undefined") {
            window.open(url, "_blank", "width=600,height=400");
        }

        awardBadge("sharer");
        return `Opening ${platform} share dialog! 🚀 Thanks for spreading the word!`;
    }, [awardBadge]);

    // ============ Language/Translation ============
    const getSwahiliResponse = useCallback((type: string): string => {
        awardBadge("multilingual");
        return swahiliResponses[type] || swahiliResponses.greeting;
    }, [awardBadge]);

    const setLanguage = useCallback((lang: "en" | "sw"): string => {
        savePreference("language", lang);
        if (lang === "sw") {
            awardBadge("multilingual");
            return swahiliResponses.greeting;
        }
        return "Language set to English. How can I help you today?";
    }, [savePreference, awardBadge]);

    // ============ Text-to-Speech ============
    const speakText = useCallback((text: string): string => {
        if (typeof window === "undefined" || !("speechSynthesis" in window)) {
            return "Sorry, text-to-speech isn't supported in your browser. 😔";
        }

        window.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 0.9;
        utterance.pitch = 1;
        utterance.volume = 1;

        speechRef.current = utterance;
        window.speechSynthesis.speak(utterance);

        return "🔊 Reading aloud...";
    }, []);

    const stopSpeaking = useCallback((): string => {
        if (typeof window !== "undefined" && "speechSynthesis" in window) {
            window.speechSynthesis.cancel();
        }
        return "Stopped reading.";
    }, []);

    // ============ Program Matcher ============
    const matchProgram = useCallback((interest: string): string => {
        const msg = interest.toLowerCase();

        if (msg.includes("photo") || msg.includes("skill") || msg.includes("camera") || msg.includes("technique")) {
            return "📸 Perfect! Our **Photography Workshops** are ideal for you! We offer beginner to advanced training in composition, lighting, and storytelling. Visit our Programs page to learn more!";
        }

        if (msg.includes("mental") || msg.includes("wellness") || msg.includes("health") || msg.includes("stress") || msg.includes("burnout")) {
            return "💚 I recommend our **Mental Wellness Program**! It's designed specifically for creatives dealing with burnout, imposter syndrome, and the unique pressures of the creative industry.";
        }

        if (msg.includes("story") || msg.includes("community") || msg.includes("archive") || msg.includes("legacy")) {
            return "📖 You'd love our **Community Archive Program**! It's all about preserving stories, memories, and cultural heritage through photography and storytelling.";
        }

        return "Tell me more about your interests! Are you looking to:\n• Improve your photography skills?\n• Focus on mental wellness as a creative?\n• Document community stories and heritage?";
    }, []);

    // ============ Help Menu ============
    const getHelpMenu = useCallback((): string => {
        return helpMenuContent;
    }, []);

    // ============ Feedback ============
    const startFeedback = useCallback((): string => {
        return "💬 I'd love your feedback! How would you rate your experience with RIO?\n\n⭐ Great - I love RIO!\n⭐⭐ Good - RIO is helpful\n⭐⭐⭐ Okay - Room for improvement\n\nOr just tell me what you think in your own words!";
    }, []);

    const processFeedback = useCallback((feedback: string): string => {
        const stats = getStats();
        if (!stats.feedbackGiven) {
            saveStats({ feedbackGiven: true });
            awardBadge("helper");
        }

        return "🙏 Thank you for your feedback! You've earned the **Feedback Hero** badge! 💡\n\nYour input helps us make RIO better for everyone. Is there anything specific you'd like me to help you with?";
    }, [getStats, saveStats, awardBadge]);

    // ============ Daily Tip ============
    const getDailyTip = useCallback((): string => {
        const today = new Date().toDateString();
        const prefs = getPreferences();

        // Check if we already showed a tip today
        if (prefs.lastDailyTipDate === today) {
            return "";
        }

        const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000);
        const tipIndex = dayOfYear % extendedDailyTips.length;

        savePreference("lastDailyTipDate", today);

        return extendedDailyTips[tipIndex];
    }, [getPreferences, savePreference]);

    return {
        // Navigation
        navigateToPage,

        // Theme
        toggleTheme,

        // Challenges
        getDailyChallenge,
        getRandomChallenge,
        completeChallenge,

        // Quotes
        getMarioQuote,

        // Gear
        getGearAdvice,

        // Donations
        calculateDonationImpact,

        // Events
        getNextEventCountdown,

        // Newsletter
        subscribeNewsletter,

        // Social
        shareContent,

        // Language
        getSwahiliResponse,
        setLanguage,

        // Speech
        speakText,
        stopSpeaking,

        // Program Matcher
        matchProgram,

        // Preferences & Stats
        getPreferences,
        savePreference,
        getStats,
        saveStats,

        // Phase 2 Features
        getHelpMenu,
        getBadgesDisplay,
        getStreakDisplay,
        startFeedback,
        processFeedback,
        getDailyTip,
        awardBadge,
        getUserBadges,
    };
}
