import React from "react";

export default function App3CaseStudy() {
  return (
    <main className="p-6 space-y-12 max-w-3xl mx-auto font-serif text-zinc-900 bg-zinc-50">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">App 3.0 – In-Person Usability Study</h1>
        <p className="text-lg italic text-zinc-600">
          Evaluating updates to a healthcare mobile app through in-person user testing with a focus on personalization, navigation, and accessibility.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold border-b pb-2 border-zinc-300">Project Overview</h2>
        <p className="leading-relaxed">
          This in-person study evaluated version 3.0 of a healthcare mobile app, assessing whether recent updates improved user experience across navigation, care team access, and MyChart integration. The goal was to uncover friction points and prioritize improvements for accessibility and personalization.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold border-b pb-2 border-zinc-300">Methods</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>In-person usability testing</li>
          <li>Patients with existing app familiarity</li>
          <li>Focus on homepage, navigation, and accessibility settings</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold border-b pb-2 border-zinc-300">Key Insights</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Mixed Reactions:</strong> Some users appreciated the cleaner layout, while others felt lost.</li>
          <li><strong>Desire for Personalization:</strong> Users wanted provider-first views, not generic virtual care.</li>
          <li><strong>Accessibility Gaps:</strong> Enlarged text and screen contrast settings broke layouts and confused users.</li>
          <li><strong>Navigation Challenges:</strong> Being taken out of the app to external pages led to trust issues and disorientation.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold border-b pb-2 border-zinc-300">Impact</h2>
        <p className="leading-relaxed">
          The team prioritized bug fixes and design adjustments that addressed accessibility issues, personalized care options, and internal page routing. These changes increased clarity, reduced friction, and aligned the app closer to user expectations.
        </p>
      </section>
    </main>
  );
}
