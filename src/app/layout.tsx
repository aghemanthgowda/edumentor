import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "EduMentor — Learn From Expert Mentors",
  description:
    "EduMentor is a premium mentorship & learning platform connecting students with 200+ vetted expert mentors across web development, data science, AI/ML, design, cloud, and career growth. Book 1:1 sessions and level up faster.",
  keywords: [
    "mentorship",
    "online learning",
    "expert mentors",
    "1:1 coaching",
    "web development",
    "data science",
    "career growth",
    "EduMentor",
  ],
  authors: [{ name: "Nexum Projects" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "EduMentor — Learn From Expert Mentors",
    description:
      "Connect with 200+ vetted expert mentors and accelerate your learning with personalized 1:1 sessions.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0B",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
