export const metadata = {
  title: 'EventMaster',
  description: 'EventMaster is a comprehensive, user-friendly event management system that streamlines every aspect of event planning and execution.',
  icons: {
    icon: "/images/event-master-logo.png"
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
