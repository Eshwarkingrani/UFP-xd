import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Unity Foundation Pakistan - Empowering Lives with Education, Care & Skills",
  description:
    "Unity Foundation Pakistan is dedicated to transforming lives through comprehensive programs in education, skills development, women empowerment, and care for orphans and elderly.",
  keywords:
    "NGO Pakistan, charity, education, women empowerment, orphanage, elderly care, skills training, community outreach",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
