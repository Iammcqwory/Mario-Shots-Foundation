// src/components/donate/OtherWaysSection.tsx
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function OtherWaysSection() {
  return (
    <div className="max-w-4xl mx-auto mt-16">
      <h2 className="text-2xl font-bold mb-6 text-center">Other Ways to Support</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Equipment Donation</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-zinc-600 mb-4">
              Donate used cameras, lenses, or other photography equipment to support our workshops
              and equipment loan program for youth photographers.
            </p>
            <Button variant="outline" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Corporate Sponsorship</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-zinc-600 mb-4">
              Partner with the Mario Shots Foundation as a corporate sponsor to support our programs
              and reach our community of creatives and supporters.
            </p>
            <Button variant="outline" asChild>
              <Link href="/contact">Learn More</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
