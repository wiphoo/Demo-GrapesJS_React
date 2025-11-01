'use client';

import dynamic from 'next/dynamic';

// Dynamic import to avoid SSR issues with GrapesJS
const GrapesJSEditor = dynamic(
  () => import('./components/GrapesJSEditor'),
  { ssr: false }
);

export default function Home() {
  return (
    <main className="h-screen w-screen overflow-hidden">
      <GrapesJSEditor />
    </main>
  );
}
