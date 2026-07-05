import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const siteUrl = 'https://aurion-health-intelligence-website-nu.vercel.app';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Aurion Health Intelligence Limited | AI & Health Data Intelligence',
    template: '%s | Aurion Health Intelligence Limited',
  },
  description:
    'Aurion Health Intelligence Limited helps health institutions, public health teams, and partners turn fragmented health data into decision-ready intelligence using AI, analytics, dashboards, and responsible digital innovation.',
  keywords: [
    'Aurion Health Intelligence',
    'health data analytics Nigeria',
    'healthcare AI consulting Africa',
    'public health intelligence',
    'health command centre',
    'healthcare dashboards',
    'responsible AI healthcare',
  ],
  authors: [{ name: 'Aurion Health Intelligence Limited' }],
  creator: 'Aurion Health Intelligence Limited',
  publisher: 'Aurion Health Intelligence Limited',
  alternates: { canonical: '/' },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/brand/favicon.png', type: 'image/png', sizes: '256x256' },
    ],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'Aurion Health Intelligence Limited',
    title: 'Aurion Health Intelligence Limited | AI & Health Data Intelligence',
    description:
      'African health intelligence consulting for AI strategy, health data analytics, public health intelligence, dashboards, responsible AI, and command-centre prototypes.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Aurion Health Intelligence Limited health data and AI visual',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aurion Health Intelligence Limited',
    description:
      'AI and health data intelligence for better decisions, stronger systems, and healthier communities.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Aurion Health Intelligence Limited',
  url: siteUrl,
  logo: `${siteUrl}/brand/aurion-logo-header.png`,
  description:
    'Aurion Health Intelligence Limited is an AI and health data intelligence consulting company focused on healthcare systems, public health, analytics, responsible AI, and digital health innovation in Nigeria and Africa.',
  areaServed: ['Nigeria', 'Africa'],
  founder: {
    '@type': 'Person',
    name: 'Sabo Mustapha',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
