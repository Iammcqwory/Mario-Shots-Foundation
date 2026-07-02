// src/components/donate/ImpactSection.tsx
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart } from "lucide-react";

export function ImpactSection() {
  return (
    <div className="max-w-4xl mx-auto mt-16">
      <h2 className="text-2xl font-bold mb-6 text-center">Your Donation Makes a Difference</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="text-center pb-2">
            <Heart className="h-12 w-12 text-red-600 mx-auto mb-2" />
            <CardTitle className="text-xl">$25</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p>Provides photography materials for one youth workshop participant</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="text-center pb-2">
            <Heart className="h-12 w-12 text-red-600 mx-auto mb-2" />
            <CardTitle className="text-xl">$100</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p>Sponsors a mental wellness session for five creative professionals</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="text-center pb-2">
            <Heart className="h-12 w-12 text-red-600 mx-auto mb-2" />
            <CardTitle className="text-xl">$250</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p>Funds a full photography workshop for ten young creatives</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
