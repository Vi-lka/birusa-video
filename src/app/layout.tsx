import './globals.css'
import localFont from 'next/font/local'

export const metadata = {
  title: 'Место силы – Сибирь. Бирюса',
  description: 'Интерактивный фильм с тремя историями о молодых ребятах и образовательном форуме «ТИМ» Бирюса',
}

const MullerNextTrial = localFont({
  src: [
    {
      path: '../fonts/MullerNextTrial-Thin.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../fonts/MullerNextTrial-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/MullerNextTrial-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    }
  ],
  variable: '--font-MN'
});

const MullerNextWideTrial = localFont({
  src: [
    {
      path: '../fonts/MullerNextWideTrial-Thin.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../fonts/MullerNextWideTrial-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/MullerNextWideTrial-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    }
  ],
  variable: '--font-MNWide'
});

const MullerNextExpandedTrial = localFont({
  src: [
    {
      path: '../fonts/MullerNextExpandedTrial-Thin.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../fonts/MullerNextExpandedTrial-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/MullerNextExpandedTrial-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    }
  ],
  variable: '--font-MNExpanded'
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={`${MullerNextTrial.variable} ${MullerNextWideTrial.variable} ${MullerNextExpandedTrial.variable}`}>
        {children}
      </body>
    </html>
  )
}
