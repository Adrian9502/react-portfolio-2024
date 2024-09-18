import { GlowMouse } from '@/GlowMouse';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="relative z-10">
        <GlowMouse />
        {children}
      </body>
    </html>
  );
}
