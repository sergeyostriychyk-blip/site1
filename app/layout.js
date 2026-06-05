export const metadata = {
  title: 'Redirecting...',
  description: 'Please wait, redirecting shortly',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}