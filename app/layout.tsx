import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap", // Prevents font flashing
});

export const metadata: Metadata = {
  title: "Stop Blødning Danmark",
  description:
    "Dedikeret til at øge bevidstheden om hjælp ved akutte blødningssituationer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="da" suppressHydrationWarning>
      {/* ✅ Prevents HTML mismatches */}
      <body className={`${poppins.variable} antialiased`}>{children}</body>
    </html>
  );
}
