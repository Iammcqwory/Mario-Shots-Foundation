// src/components/donate/AmountSelector.tsx
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DollarSign } from "lucide-react";

export function AmountSelector({
  options,
  value,
  onSelect,
  customValue,
  onCustomChange,
  label,
}: {
  options: string[];
  value?: string;
  onSelect: (amount: string) => void;
  customValue?: string;
  onCustomChange: (val: string) => void;
  label: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">{label}</label>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {options.map((amount) => (
          <Button
            key={amount}
            variant="outline"
            className="border-2 h-12"
            onClick={() => onSelect(amount)}
            aria-pressed={value === amount}
          >
            {amount}
          </Button>
        ))}
      </div>
      <div className="mt-3">
        <label className="block text-sm font-medium mb-2">Custom Amount</label>
        <div className="relative">
          <DollarSign className="absolute left-3 top-3 h-4 w-4 text-zinc-500" />
          <Input
            type="number"
            placeholder="Enter amount"
            className="pl-10"
            value={customValue}
            onChange={(e) => onCustomChange(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
