// src/components/donate/DonationHero.tsx
import React from "react";

export function DonationHero({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="text-center mb-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
      <p className="text-xl text-zinc-600 max-w-3xl mx-auto">{description}</p>
    </div>
  );
}
