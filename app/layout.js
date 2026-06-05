export const metadata = {
  title: 'Переход...',
  description: 'Подождите, сейчас перенаправим',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}
