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
        <p className="leading-relaxed">
          I began my career in UX design, crafting interfaces that were functional and beautiful. Over
          time, I discovered that the real power of product design lies not just in aesthetics, but in
          understanding what users need before they ask for it. That curiosity led me to UX research,
          where I now specialize in generating insights that drive meaningful design decisions.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold border-b pb-2 border-zinc-300">Core Values</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Evidence Over Assumption:</strong> Decisions should be data-informed, not gut-driven.</li>
          <li><strong>Empathy Through Inquiry:</strong> Listening deeply uncovers real user motivations.</li>
          <li><strong>Clarity Is Kindness:</strong> Research should simplify complexity, not add to it.</li>
          <li><strong>Design with Purpose:</strong> Research is only as valuable as the actions it inspires.</li>
        </ul>
      </section>

      <section className="space-y-4 prose prose-zinc">
        <h2 className="text-2xl font-semibold border-b pb-2 border-zinc-300">Let’s Work Together</h2>
        <p>
          If you’re building something meaningful and want to understand your users more deeply,
          I’d love to hear from you. Let’s connect, collaborate, and design better experiences together.
        </p>
        <p className="mt-4">
          <a
            href="mailto:thomas@thomas-graham.me"
            className="text-zinc-800 underline decoration-dotted hover:text-zinc-600"
          >
            thomas@thomas-graham.me
          </a>
        </p>
      </section>
    </main>
  );
}
