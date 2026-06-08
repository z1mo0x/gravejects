import type { Metadata } from "next";
import { Unbounded, JetBrains_Mono, Manrope, Cinzel, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const unboundedSans = Unbounded({
  variable: "--font-unbound-sans",
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
});

const cinzelSans = Cinzel({
  variable: "--font-cinzel-sans",
  subsets: ["latin"],
});
const garamondSans = Cormorant_Garamond({
  variable: "--font-garamond-sans",
  subsets: ["latin", 'cyrillic'],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const manropeSans = Manrope({
  variable: "--font-manrope-sans",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Project Yard | Кладбище всех ваших проектов, которые вы не закончили",
  description: "Кладбище проектов",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme');
                if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                }
              })()
            `,
          }}
        />
      </head>

      <body
        className={`${unboundedSans.variable} ${garamondSans.variable} ${cinzelSans.variable} ${manropeSans.variable} ${jetBrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}