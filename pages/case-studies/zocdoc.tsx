import React from "react";

export default function ZocdocCaseStudy() {
  return (
    <main className="p-6 space-y-12 max-w-3xl mx-auto font-serif text-zinc-900 bg-zinc-50">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Zocdoc Provider Experience Study</h1>
        <p className="text-lg italic text-zinc-600">
          Discovery research into scheduling behaviors and provider matching to improve patient experience.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold border-b pb-2 border-zinc-300">Project Overview</h2>
        <p className="leading-relaxed">
          This study focused on how patients interact with Zocdoc's scheduling and provider matching tools. Using remote moderated testing, we uncovered what drives or hinders online appointment booking within the AdventHealth ecosystem.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold border-b pb-2 border-zinc-300">Methods</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Remote moderated interviews via dscout</li>
          <li>7 participants, ages 33–45</li>
          <li>Focus: usability, preferences, search behaviors, and insurance flow</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold border-b pb-2 border-zinc-300">Key Insights</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Insurance Is King:</strong> Accurate insurance filtering is essential for trust.</li>
          <li><strong>Guided Search:</strong> Helpful but must be optional and context-aware.</li>
          <li><strong>Availability {">"} Ratings:</strong> Users prioritize schedule fit over provider reviews.</li>
          <li><strong>Direct Searches:</strong> Patients prefer searching by provider type, not symptoms.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold border-b pb-2 border-zinc-300">Impact</h2>
        <p className="leading-relaxed">
          The findings informed updates to AdventHealth’s provider search UX. Recommendations included improved insurance indicators, guided flow flexibility, and real-time availability displays—all with the goal of boosting patient confidence and completion rates.
        </p>
      </section>
    </main>
  );
}
