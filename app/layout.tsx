import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Pel’s Artistry | Handcrafted Décor',
  description:
    'Minimal luxury décor for elegant, meaningful homes. Discover handcrafted pieces and order directly through WhatsApp.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
