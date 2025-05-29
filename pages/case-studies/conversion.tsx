import React from "react";

export default function OnboardingCaseStudy() {
  return (
    <main className="p-6 space-y-12 max-w-3xl mx-auto font-serif text-zinc-900 bg-zinc-50">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Improving New User Conversion</h1>
        <p className="text-lg italic text-zinc-600">
          A behavioral design strategy to optimize mobile onboarding using insights from psychology, gamification, and comparative analysis.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold border-b pb-2 border-zinc-300">Project Overview</h2>
        <p className="leading-relaxed">
          This conceptual research piece explored how to improve onboarding for AdventHealth’s mobile app by applying behavioral psychology principles, onboarding benchmarks, and motivational design patterns. The work aimed to reduce abandonment and increase early engagement.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold border-b pb-2 border-zinc-300">Approach</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Benchmarked onboarding flows across 6 industry apps</li>
          <li>Applied behavioral models: Hook Framework, IKEA Effect, Variable Rewards</li>
          <li>Proposed 3-phase user research plan to validate insights</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold border-b pb-2 border-zinc-300">Key Strategies</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Engage at the Right Moments:</strong> Design for critical decision points with nudges and clarity.</li>
          <li><strong>Personalize the Journey:</strong> Let users tailor their onboarding path for relevance and agency.</li>
          <li><strong>Gamify Learning:</strong> Use levels, streaks, and visual progress to guide behavior.</li>
          <li><strong>Respect Time:</strong> Onboarding should demonstrate value quickly—or give users a reason to stay.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold border-b pb-2 border-zinc-300">Impact</h2>
        <p className="leading-relaxed">
          These strategies laid the foundation for future onboarding experiments. The team aligned around a north star metric (early task completion) and began implementing personalization, clarity, and progression cues based on these recommendations.
        </p>
      </section>
    </main>
  );
}
