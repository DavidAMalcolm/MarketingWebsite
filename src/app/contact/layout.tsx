import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - UWI-GPT",
  description: "Reach out to us for questions, feedback, or collaboration opportunities.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="bg-white text-foreground antialiased">
      {children}
    </main>
  );
}