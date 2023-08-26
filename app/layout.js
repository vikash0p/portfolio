import './globals.css'
import { Roboto } from 'next/font/google'

const play = Roboto({
  subsets: ['latin'],
  weight: '300',
  display: 'swap',
})

export const metadata = {
  title: 'Vikash',
  description: 'This portfolio is more than a collection of work; it\'s a reflection of my growth and adaptability.With every project, I\'ve embraced challenges as stepping stones towards self-improvement. The journey has been a testament to my thirst for learning and my determination to stay at the forefront of innovation.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${play.className} bg-black text-white`}>{children}</body>
    </html>
  )
}
