import React from "react";

export function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl border bg-white text-zinc-900 shadow-sm">
      {children}
    </div>
  );
}

export function CardContent({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}
