import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: "digisystems - Solutions numériques sur mesure",
  description:
    "Experts en développement web, AI, mobile et data, nous accompagnons startups et entreprises dans leurs projets innovants.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  )
}


import './globals.css'