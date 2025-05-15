import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/src/components/theme-provider";
import { ModeToggle } from "@/src/components/theme-toggler";
import { Header } from "@/src/components";
import Footer from "@/src/components/ui/Footer/index";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pricing Page",
  description: "Pricing page for a SaaS product using Shadcn UI",
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
      >
        <main className={inter.className}>{children}</main>
      </ThemeProvider>
    </>
  );
}
