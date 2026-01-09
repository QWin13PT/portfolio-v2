import { Inter } from "next/font/google";
import "./globals.css";
import Header from '@/components/layout/Header';
import AnimatedLayout from '@/components/layout/AnimatedLayout';

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
            <AnimatedLayout>
              {children}
            </AnimatedLayout>
          </div>
        </div>
      </body>
    </html>
  );
}
