import type { Metadata } from "next";
import "./global.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://shubhangdhawan.com"),
  title: "Shubhang Dhawan | AI / ML Engineer",
  description:
    "Shubhang Dhawan \u2014 AI/ML Engineer specializing in Generative AI, LLMs, RAG, NLP and intelligent AI systems.",
  robots:
    process.env.MAINTENANCE_MODE === "true"
      ? { index: false, follow: false }
      : { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
