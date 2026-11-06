import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'DevStudio Dashboard | Real-Time Telemetry & Traces',
  description: 'Production developer SaaS analytics dashboard built with Next.js 15 and React 19.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#090d16] text-slate-100 min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
