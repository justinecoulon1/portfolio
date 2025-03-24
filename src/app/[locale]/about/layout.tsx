import type { Metadata } from 'next';
import '../globals.css';

export const metadata: Metadata = {
  title: 'Portfolio - About',
  description: "Justine Coulon's Portfolio",
};

export default async function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
