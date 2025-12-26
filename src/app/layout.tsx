import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "@/styles/globals.css";
import Layout from "@/components/Layout";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://skillwave.academy"),
  title: {
    default: "SkillWave Academy | Learn with clarity and confidence",
    template: "%s | SkillWave Academy"
  },
  description:
    "SkillWave Academy is a modern learning platform delivering structured courses, expert mentors, and community-driven learning paths.",
  openGraph: {
    title: "SkillWave Academy",
    description:
      "Discover courses, read insights, and build skills with a modern learning experience.",
    url: "https://skillwave.academy",
    siteName: "SkillWave Academy",
    locale: "en_US",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${sora.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Layout>{children}</Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}
