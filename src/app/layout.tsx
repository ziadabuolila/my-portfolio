import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import PageTransition from "../components/PageTransition";
import BackToTopButton from "../components/BackToTopButton";
import WelcomeScreen from "./welcome-screen";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: { default: "Ziad Abuolila — Front-end Developer", template: "%s | Ziad Abuolila" },
  description: "Selected work and services by Ziad Abuolila, front-end developer crafting polished, responsive digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-950 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
        <Header />
        <main className="flex-1">
          <WelcomeScreen>
            <div className="min-h-full">
              <PageTransition>{children}</PageTransition>
            </div>
          </WelcomeScreen>
        </main>
        <BackToTopButton />
        <Footer />
      </body>
    </html>
  );
}
