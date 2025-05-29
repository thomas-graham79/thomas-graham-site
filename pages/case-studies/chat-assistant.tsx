import React from "react";

export default function ChatAssistantCaseStudy() {
  return (
    <main className="p-6 space-y-12 max-w-3xl mx-auto font-serif text-zinc-900 bg-zinc-50">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Virtual Chat Assistant Study</h1>
        <p className="text-lg italic text-zinc-600">
          A quantitative study using the Kano Model to evaluate patient preferences and expectations around automated chat features.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold border-b pb-2 border-zinc-300">Project Overview</h2>
        <p className="leading-relaxed">
          This research explored how ACA patients perceive chatbots within care advocacy programs. The goal was to design a chatbot experience that complemented—not replaced—human interaction, while identifying must-have, attractive, and indifferent features through Kano analysis.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold border-b pb-2 border-zinc-300">Methods</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Survey distributed to 19,300 ACA patients</li>
          <li>1,116 completed submissions (888 complete, 228 partial)</li>
          <li>Kano Model used to categorize feature desirability and impact</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold border-b pb-2 border-zinc-300">Key Insights</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Human Touch Matters:</strong> Patients strongly prefer having access to live care advocates.</li>
          <li><strong>Flexibility Is Key:</strong> Most users want the option to use chat—not to be forced into it.</li>
          <li><strong>Bypass = Must-Have:</strong> Ability to skip automation scored as a Must-Be feature.</li>
          <li><strong>Email Intro Preferred:</strong> Email was the most welcomed method for introducing the virtual assistant.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold border-b pb-2 border-zinc-300">Impact</h2>
        <p className="leading-relaxed">
          The research helped design a more human-centric chatbot experience. Key outcomes included clearer messaging, flexible entry points, and the assurance that chatbots would support—not replace—human advocates. It also laid the groundwork for future voice and AI feature testing with an opt-in mindset.
        </p>
      </section>
    </main>
  );
}
