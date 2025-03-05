import type { Metadata } from "next";
import "@/css/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/sora/300.css";
import "@fontsource/sora/400.css";
import "@fontsource/sora/500.css";
import "@fontsource/sora/600.css";
import "@fontsource/sora/700.css";
import LiveChat from "@/components/LiveChat/LiveChat";

export const metadata: Metadata = {
  title: "Bintel Analytics",
  description:
    "Bintel Analytics is a data analytics and business intelligence consulting firm that helps organizations make data-driven decisions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="hide-scrollbar">
        <Navbar />
        <LiveChat />
        {children}
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
