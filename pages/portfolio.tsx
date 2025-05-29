import React from "react";
import Link from "next/link";
import { Card, CardContent } from "../components/ui/card";

export default function Portfolio() {
  return (
    <main className="bg-zinc-50 min-h-screen text-zinc-900 font-serif p-6">
      <div className="max-w-5xl mx-auto space-y-8">
        <h2 className="text-3xl font-bold tracking-tight mb-2">UX Research Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
          <Card><CardContent className="p-4"><h3 className="text-lg font-semibold">Zocdoc</h3><Link href="/case-studies/zocdoc">Read</Link></CardContent></Card>
          <Card><CardContent className="p-4"><h3 className="text-lg font-semibold">Chat Assistant</h3><Link href="/case-studies/chat-assistant">Read</Link></CardContent></Card>
          <Card><CardContent className="p-4"><h3 className="text-lg font-semibold">App 3.0</h3><Link href="/case-studies/app-3">Read</Link></CardContent></Card>
          <Card><CardContent className="p-4"><h3 className="text-lg font-semibold">Onboarding</h3><Link href="/case-studies/conversion">Read</Link></CardContent></Card>
        </div>
      </div>
    </main>
  );
}
