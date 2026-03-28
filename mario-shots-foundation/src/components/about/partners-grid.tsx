"use client";

import Link from "next/link";
import { partners } from "@/lib/constants";
import { cn } from "@/lib/utils";

type PartnersGridProps = {
  className?: string;
};

export function PartnersGrid({ className }: PartnersGridProps) {
  return (
    <div className={cn("grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center", className)}>
      {partners.map((partner) => (
        <Link
          key={partner.name}
          href={partner.href}
          target="_blank"
          rel="noreferrer"
          className="group h-20 rounded-2xl border border-white/10 bg-white/10 dark:bg-white/5 flex flex-col items-center justify-center gap-2 px-4 transition-transform duration-300 hover:-translate-y-1 hover:border-red-500"
        >
          <img src={partner.logo} alt={`${partner.name} logo`} className="max-h-10 w-full object-contain" />
          <span className="text-xs font-semibold uppercase tracking-wider text-white/80">{partner.name}</span>
        </Link>
      ))}
    </div>
  );
}
