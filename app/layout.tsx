import { Metadata } from 'next'
import Image from 'next/image'
import '../styles/globals.css'
import styles from './layout.module.css'

export const metadata: Metadata = {
  title: {
    default: 'Next.js',
    template: '%s | Next.js',
  },
  description: 'Generated by Next.js',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className={styles.body}>

          <header>
            {/* Add header content  */}
          </header>

          <main className={styles.bodyContent}>{children}</main>

          <footer className={styles.footer}>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Powered by{' '}
              <span className={styles.logo}>
                <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
              </span>
            </a>
          </footer>
        </div>
      </body>
    </html>
  )
}