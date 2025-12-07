import React from 'react';

import type { Metadata } from 'next';
import { Raleway, Source_Sans_3 } from 'next/font/google';

import GoogleAnalytics from '@/components/Template/GoogleAnalytics';
import Navigation from '@/components/Template/Navigation';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@/static/css/main.scss';

config.autoAddCss = false;

const sourceSans = Source_Sans_3({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-source-sans',
  display: 'swap',
});

const raleway = Raleway({
  weight: ['400', '800', '900'],
  subsets: ['latin'],
  variable: '--font-raleway',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Jane Kamata',
    template: '%s | Jane Kamata',
  },
  description:
    "Jane Kamata's personal website. Data enthusiast, information visualization specialist, and part-time software developer.",
  keywords: [
    'Jane Kamata',
    'data visualization',
    'data science',
    'data analyst',
    'tableau',
    'power bi',
    'python',
    'excel',
    'alteryx',
    ' R ',
    'data storytelling',
    'data analytics',
    'portfolio',
    'personal website',
    'blog',
    'information visualization',
    'data wrangling',
    'dashboard design',
    'business intelligence',
    'data-driven decision making',
    'data visualization tools',
    'data communication',
    'data presentation',
    'data insights',
    'data trends',
    'data patterns',
    'data reporting',
    'data visualization best practices',
    'data visualization techniques',
    'data visualization examples',
    'data visualization blog',
    'data visualization portfolio',
  ],
  authors: [{ name: 'Jane Kamata' }],
  creator: 'Jane Kamata',
  metadataBase: new URL('https://janekamata.github.io/personal-site/'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://janekamata.github.io/personal-site/',
    siteName: 'Jane Kamata',
    title: 'Jane Kamata',
    description:
      'Data enthusiast, information visualization specialist, and part-time software developer.',
    images: [
      {
        url: 'images/me.png',
        width: 1200,
        height: 630,
        alt: 'Jane Kamata',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sourceSans.variable} ${raleway.variable}`}>
      <body>
        <div id="wrapper">
          <Navigation />
          {children}
        </div>
        <GoogleAnalytics />
      </body>
    </html>
  );
}
