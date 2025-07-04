import { Playfair_Display } from 'next/font/google';
import { Roboto } from 'next/font/google';
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-playfair', 
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-roboto',
});

export const metadata = {
  title: "Duc Loi",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.className}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
