import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import { Footer } from "@/components/footer"
import { LoadingScreen } from "@/components/loading-screen"
import type React from "react"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Pixel Portfolio",
  description: "A pixelated portfolio showcasing my work",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-pixelify bg-background min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="flex min-h-screen">
            <Navbar />
            <div className="flex-1 flex flex-col ml-20">
              <main className="flex-1 p-4 sm:p-6 md:p-8">
                <div className="max-w-6xl mx-auto w-full">
                  <Suspense fallback={<LoadingScreen />}>
                    {children}
                  </Suspense>
                </div>
              </main>
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
