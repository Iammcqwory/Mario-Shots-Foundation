"use client";

// src/components/donate/DonationTabs.tsx
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AmountSelector } from "./AmountSelector";
import { PaymentMethodList } from "./PaymentMethodList";
import { CardDetailsForm } from "./CardDetailsForm";

export function DonationTabs() {
  const [oneTimeAmount, setOneTimeAmount] = useState<string | undefined>();
  const [oneTimeCustom, setOneTimeCustom] = useState<string>("");
  const [monthlyAmount, setMonthlyAmount] = useState<string | undefined>();
  const [monthlyCustom, setMonthlyCustom] = useState<string>("");
  const [method, setMethod] = useState<string | undefined>();

  return (
    <Tabs defaultValue="one-time" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="one-time" className="py-3 data-[state=active]:bg-red-600 data-[state=active]:text-white">
          One-Time Donation
        </TabsTrigger>
        <TabsTrigger value="monthly" className="py-3 data-[state=active]:bg-red-600 data-[state=active]:text-white">
          Monthly Support
        </TabsTrigger>
      </TabsList>

      <TabsContent value="one-time" className="mt-8">
        <Card className="border-none shadow-lg">
          <CardHeader>
            <CardTitle>Make a One-Time Donation</CardTitle>
            <CardDescription>
              Your contribution will directly support our programs and initiatives.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <AmountSelector
                options={["$25", "$50", "$100", "$250"]}
                value={oneTimeAmount}
                onSelect={setOneTimeAmount}
                customValue={oneTimeCustom}
                onCustomChange={setOneTimeCustom}
                label="Select Amount"
              />

              <div>
                <label className="block text-sm font-medium mb-2">Payment Method</label>
                <PaymentMethodList onSelect={setMethod} />
              </div>

              <CardDetailsForm emailLabel="Email Address" />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col">
            <Button className="w-full py-6 text-lg bg-red-600 hover:bg-red-700">
              Complete Donation
            </Button>
            <p className="mt-4 text-xs text-center text-zinc-500">
              All donations are tax-deductible. Mario Shots Foundation is a registered non-profit organization.
            </p>
          </CardFooter>
        </Card>
      </TabsContent>

      <TabsContent value="monthly" className="mt-8">
        <Card className="border-none shadow-lg">
          <CardHeader>
            <CardTitle>Become a Monthly Supporter</CardTitle>
            <CardDescription>
              Your recurring contribution provides sustainable support for our ongoing programs.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <AmountSelector
                options={["$10", "$25", "$50", "$100"]}
                value={monthlyAmount}
                onSelect={setMonthlyAmount}
                customValue={monthlyCustom}
                onCustomChange={setMonthlyCustom}
                label="Select Monthly Amount"
              />

              <div>
                <label className="block text-sm font-medium mb-2">Payment Method</label>
                <PaymentMethodList onSelect={setMethod} />
              </div>

              <CardDetailsForm emailLabel="Email Address" />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col">
            <Button className="w-full py-6 text-lg bg-red-600 hover:bg-red-700">
              Start Monthly Support
            </Button>
            <p className="mt-4 text-xs text-center text-zinc-500">
              You can cancel your monthly support at any time. All donations are tax-deductible.
            </p>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
