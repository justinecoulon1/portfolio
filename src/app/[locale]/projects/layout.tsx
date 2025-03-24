import type { Metadata } from 'next';
import '../globals.css';

export const metadata: Metadata = {
  title: 'Portfolio - Projects',
  description: "Justine Coulon's Portfolio",
};

export default async function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
