export const siteConfig = {
  name: "Mario Shots Foundation",
  description: "A community-driven initiative to honor the life and legacy of Mario—a visionary storyteller and photographer.",
  url: "https://marioshotsfoundation.org",
  ogImage: "/images/og-image.jpg",
  links: {
    twitter: "https://twitter.com/marioshotsfoundation",
    instagram: "https://instagram.com/marioshotsfoundation",
    facebook: "https://facebook.com/marioshotsfoundation",
    github: "https://github.com/marioshotsfoundation",
  },
};

export const navigationLinks = [
  { name: "Home", href: "/" },
  { name: "Programs", href: "/programs" },
  { name: "Stories", href: "/stories" },
  { name: "Gallery", href: "/gallery" },
  { name: "Events", href: "/events" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export const programs = [
  {
    title: "Workshops",
    description: "Photography and storytelling workshops for youth creatives",
    href: "/programs/workshops",
    imageSrc: "https://images.unsplash.com/photo-1522204523234-8729aa6e3d23?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Mental Wellness",
    description: "Resources and support for creative mental health",
    href: "/programs/mental-wellness",
    imageSrc: "https://images.unsplash.com/photo-1543946604-061803704870?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Archive",
    description: "Preserving Mario's legacy through digital and physical archives",
    href: "/programs/archive",
    imageSrc: "https://images.unsplash.com/photo-1616401777080-60298a183577?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const impactStats = [
  { value: "1,000+", label: "Creatives Impacted" },
  { value: "25+", label: "Photography Workshops" },
  { value: "5,000+", label: "Archive Visitors" },
];

export type TestimonialType = {
  quote: string;
  name: string;
  role: string;
  avatar: string;
};

export const testimonials: TestimonialType[] = [
  {
    quote: "The Mario Shots Foundation completely transformed my approach to photography. The mentorship and equipment support helped me launch my career.",
    name: "Sarah Johnson",
    role: "Workshop Graduate 2024",
    avatar: "https://images.unsplash.com/photo-1506794778202-193c0d76b81b?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote: "Being part of the mental wellness program has given me tools to balance creativity with self-care. It's been life-changing.",
    name: "David Kimani",
    role: "Mental Wellness Program Participant",
    avatar: "https://images.unsplash.com/photo-1522529599102-193c0d76b81b?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote: "The grant I received allowed me to document my community's stories. Mario's legacy lives on through opportunities like this.",
    name: "Maria Rodriguez",
    role: "Grant Recipient 2025",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const blogPosts = [
  {
    title: "Annual Mario Shots Bootcamp Opens Applications",
    excerpt: "Apply now for our intensive photography training program with industry mentors.",
    slug: "bootcamp-applications",
    date: "May 15, 2025",
    author: "Team MSF",
    category: "Workshops",
    imageSrc: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Mental Health in the Creative Industry",
    excerpt: "Exploring the unique challenges photographers face and how to overcome them.",
    slug: "mental-health-creatives",
    date: "April 28, 2025",
    author: "Dr. Lisa Wong",
    category: "Mental Wellness",
    imageSrc: "https://images.unsplash.com/photo-1627993025686-e8d71221f7ed?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Mario's Legacy: Five Years Later",
    excerpt: "Reflecting on the impact and continued influence of Mario's work on young photographers.",
    slug: "marios-legacy",
    date: "April 10, 2025",
    author: "James Omondi",
    category: "Legacy",
    imageSrc: "https://images.unsplash.com/photo-1517487881594-2787fef5ee43?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const upcomingEvents = [
  {
    title: "Photography Essentials Workshop",
    date: "June 15, 2025",
    location: "Studio Sitini Hub",
    description: "Learn the fundamentals of composition, lighting, and storytelling through photography.",
    registrationLink: "/events/photography-essentials",
    imageSrc: "https://images.unsplash.com/photo-1507901740-41076be1c028?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Mario Legacy Exhibition",
    date: "July 5-15, 2025",
    location: "National Gallery",
    description: "A curated selection of Mario's most impactful work alongside pieces from foundation graduates.",
    registrationLink: "/events/legacy-exhibition",
    imageSrc: "https://images.unsplash.com/photo-1505373877845-8f2a2ceb5ab2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Creative Mental Health Dialogue",
    date: "July 25, 2025",
    location: "Virtual Event",
    description: "Join our panel discussion on maintaining wellness while pursuing creative passions.",
    registrationLink: "/events/mental-health-dialogue",
    imageSrc: "https://images.unsplash.com/photo-1543946604-061803704870?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const galleryCategories = [
  "portraits",
  "street",
  "documentary",
  "nature",
  "abstract",
];
