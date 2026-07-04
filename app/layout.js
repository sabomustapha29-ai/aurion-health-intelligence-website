import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Aurion Health Intelligence Limited',
  description: 'AI strategy, health data analytics, public health intelligence, and digital transformation for Nigeria and Africa.',
  icons: { icon: '/brand/favicon.png' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
