"use client";

import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Twitter, Mail, Heart } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { siteConfig, navigationLinks } from "@/lib/constants";
import { useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // In a real app, this would send the email to a service
      console.log(`Subscribing email: ${email}`);
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-zinc-900 text-white pt-16 pb-8 dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="relative w-10 h-10">
                <Image
                  src="/images/logo/ChatGPT_Image_May_5,_2025,_04_56_29_PM.png"
                  alt="Mario Shots Foundation"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold">Mario Shots Foundation</h3>
            </div>
            <p className="text-zinc-400">
              Empowering youth in photography, promoting mental wellness, and preserving cultural memory through storytelling.
            </p>
            <div className="flex space-x-4">
              <a
                href={siteConfig.links.instagram}
                target="_blank"
                rel="noreferrer"
                className="text-zinc-400 hover:text-mario-500 transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href={siteConfig.links.facebook}
                target="_blank"
                rel="noreferrer"
                className="text-zinc-400 hover:text-mario-500 transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href={siteConfig.links.twitter}
                target="_blank"
                rel="noreferrer"
                className="text-zinc-400 hover:text-mario-500 transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Navigation</h3>
            <ul className="space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-zinc-400 hover:text-mario-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact Us</h3>
            <p className="text-zinc-400">Nairobi, Kenya</p>
            <p className="text-zinc-400">info@marioshotsfoundation.org</p>
            <p className="text-zinc-400">+254 700 000 000</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Subscribe to Our Newsletter</h3>
            <p className="text-zinc-400">
              Stay updated on our programs, events, and success stories.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="rounded-r-none bg-zinc-800 border-zinc-700 text-white dark:bg-zinc-800"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button
                  type="submit"
                  className="rounded-l-none mario-red-bg mario-red-hover"
                >
                  Subscribe
                </Button>
              </div>
              {subscribed && (
                <p className="text-green-400 text-sm">Thanks for subscribing!</p>
              )}
            </form>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-8 mt-8 text-center text-zinc-500 text-sm">
          <p>
            © {new Date().getFullYear()} Mario Shots Foundation. All rights reserved.
          </p>
          <p className="mt-2 flex items-center justify-center">
            Made with <Heart className="h-4 w-4 mx-1 text-mario-600" /> for Mario's Legacy
          </p>
        </div>
      </div>
    </footer>
  );
}
