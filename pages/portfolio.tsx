import React from "react";
import Link from "next/link";
import { Card, CardContent } from "../components/ui/card";

export default function Portfolio() {
  return (
    <main className="bg-zinc-50 min-h-screen text-zinc-900 font-serif p-6">
      <div className="max-w-5xl mx-auto space-y-8">
        <h2 className="text-3xl font-bold tracking-tight mb-2">UX Research Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
          <Card>
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold">Zocdoc Provider Experience</h3>
              <p className="text-sm text-zinc-600">Discovery research into scheduling behaviors and provider matching.</p>
              <Link href="/case-studies/zocdoc" className="underline">Read Case Study</Link>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold">Virtual Chat Assistant</h3>
              <p className="text-sm text-zinc-600">Kano-model research to design chatbot integration.</p>
              <Link href="/case-studies/chat-assistant" className="underline">Read Case Study</Link>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold">App 3.0 In-Person Study</h3>
              <p className="text-sm text-zinc-600">Usability testing on personalization and accessibility.</p>
              <Link href="/case-studies/app-3" className="underline">Read Case Study</Link>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold">Improving User Conversion</h3>
              <p className="text-sm text-zinc-600">Behavioral design strategies to improve onboarding.</p>
              <Link href="/case-studies/conversion" className="underline">Read Case Study</Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
