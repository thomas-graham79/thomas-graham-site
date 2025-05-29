import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-zinc-50 text-zinc-900 font-serif p-6 text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl italic text-zinc-600 mb-2">Oops... this page wandered off like a user with no onboarding.</p>
      <p className="text-md text-zinc-500 max-w-prose mb-6">
        But don’t worry, even the best users get lost sometimes. Let’s get you back on track.
      </p>
      <Link href="/" className="text-zinc-800 underline decoration-dotted hover:text-zinc-600">
        Return Home
      </Link>
    </main>
  );
}
