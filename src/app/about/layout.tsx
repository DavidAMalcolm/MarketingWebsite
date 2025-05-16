import type { ReactNode } from "react";

export default function AboutLayout({ children }: { children: ReactNode }) {
  return (
    <main className="bg-black text-white">
      {children}
    </main>
  );
}
