import "@/app/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { siteConfig } from "@/lib/constants";
import { ClientBody } from "./ClientBody";
import { ThemeProvider } from "@/components/theme/theme-provider";
import RIOAssistant from "@/components/rio/rio-assistant";
import { ToastProvider } from "@/components/ui/toast-provider";
import { BackToTop } from "@/components/ui/back-to-top";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-black`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ToastProvider>
            <ClientBody>
              <div className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-grow pt-16">{children}</main>
                <Footer />
                <RIOAssistant />
                <BackToTop />
              </div>
              <Analytics />
            </ClientBody>
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

