// src/components/donate/CardDetailsForm.tsx
import React from "react";
import { Input } from "@/components/ui/input";

export function CardDetailsForm({ emailLabel = "Email Address" }: { emailLabel?: string }) {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-2">Card Information</label>
        <Input type="text" placeholder="Card number" className="mb-2" />
        <div className="grid grid-cols-2 gap-3">
          <Input type="text" placeholder="MM / YY" />
          <Input type="text" placeholder="CVC" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Name on Card</label>
        <Input type="text" placeholder="Name as it appears on your card" />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">{emailLabel}</label>
        <Input type="email" placeholder="For your receipt" />
      </div>
    </div>
  );
}
