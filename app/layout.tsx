import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from "@vercel/analytics/next"
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Simuladores FIBI - Herramientas Pedagógicas con IA',
  description: 'Colección de simuladores educativos creados con inteligencia artificial para el aprendizaje de conceptos biomédicos y fisiológicos.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          {children}
          <Analytics />
        </div>
      </body>
    </html>
  )
}
