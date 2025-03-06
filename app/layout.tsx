import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rolls-Royce Luxury Car Rental | Ghost 6.6 with Driver",
  description: "Luxury Rolls-Royce Ghost 6.6 rental with professional driver for weddings, birthdays, and private parties in Campania, Italy.",
  keywords: ["Rolls-Royce rental", "luxury car with driver", "Ghost 6.6", "wedding car", "birthday luxury car", "private party transportation", "Campania"],
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
