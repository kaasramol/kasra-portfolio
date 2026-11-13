import type { Metadata } from "next";
import { Caveat, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { FloatingNav } from "@/components/floating-nav";
import { Footer } from "@/components/footer";
import { SmoothScroll } from "@/components/smooth-scroll";
import { MotionProvider } from "@/components/motion-provider";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-hand",
  subsets: ["latin"],
  weight: ["500", "600"],
});

export const metadata: Metadata = {
  title: "Kasra Molaei | UX/UI Designer",
  description:
    "UX/UI Designer with a business mindset. Designing end-to-end experiences for SaaS products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakarta.variable} ${geistMono.variable} ${caveat.variable} antialiased`}
      >
        <MotionProvider>
          <SmoothScroll />
          <main>{children}</main>
          <Footer />
          <FloatingNav />
        </MotionProvider>
      </body>
    </html>
  );
}
