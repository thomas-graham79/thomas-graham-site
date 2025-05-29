import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <main className="p-6 space-y-12 max-w-3xl mx-auto font-serif text-zinc-900 bg-zinc-50">
      <section className="text-center space-y-4">
        <Image
          src="/headshot.jpg"
          alt="Thomas Graham headshot"
          width={160}
          height={160}
          className="rounded-full mx-auto shadow-md"
        />
        <h1 className="text-4xl font-bold tracking-tight">Hi, I'm Thomas Graham</h1>
        <p className="text-lg italic text-zinc-600">
          I’m a User Experience Researcher passionate about turning data into design clarity.
        </p>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold border-b pb-2 border-zinc-300">My Journey</h2>
        <p className="leading-relaxed">I began my career in UX design...</p>
      </section>
    </main>
  );
}