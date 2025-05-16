import type { ReactNode } from "react";

export default function AboutLayout({ children }: { children: ReactNode }) {
  return (
    <main className="text-white">
      {children}
    </main>
  );
}
