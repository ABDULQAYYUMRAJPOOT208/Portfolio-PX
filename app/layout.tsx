import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ABDUL QAYYUM - Computer Scientist & Software Engineer",
  description:
    "Portfolio of ABDUL QAYYUM, Computer Scientist and Software Engineer specializing in full-stack development, AI/ML, and system architecture.",
    generator: 'v0.dev',
    icons:{
      icon: '/px.ico',
    }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
       <head>
        <link rel="icon" href="/px.ico" sizes="any" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
