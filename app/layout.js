import { Inter } from "next/font/google";
import "./globals.css";
import { personalInfo, projects, experience, tools } from '@/lib/constants';
import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Miguel Ferreira | Frontend Developer",
  description: "Porto-based front-end developer, passionate about crafting elegant and effective design solutions.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <div className="min-h-screen bg-background ">
          {/* Header */}
          <div className="flex justify-center pt-6 pb-8 md:pb-16">
            <Header />
          </div>

          {/* Main Layout: Sidebar + Content */}
          <div className="container mx-auto px-4 md:px-8 max-w-6xl">
            <div className="flex flex-row max-md:flex-col gap-8 md:gap-20">
              {/* Sidebar */}
              <Sidebar />
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
