import { Inter } from 'next/font/google';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClientProvider } from "@/app/providers";
import '@/index.css';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Bella Casa Inspections | Wind Mitigation Inspections New Orleans',
    template: '%s | Bella Casa Inspections'
  },
  description: 'Professional wind mitigation inspections in Greater New Orleans. Save thousands on home insurance with our certified inspections. Licensed and insured inspector serving Louisiana.',
  keywords: ['wind mitigation inspection', 'home insurance savings', 'New Orleans inspector', 'Louisiana home inspection', 'wind mitigation survey', 'insurance premium reduction'],
  authors: [{ name: 'Al Spitale' }],
  creator: 'Al Spitale',
  metadataBase: new URL('https://bellacasainspections.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Bella Casa Inspections | Wind Mitigation Inspections New Orleans',
    description: 'Professional wind mitigation inspections in Greater New Orleans. Save thousands on home insurance with our certified inspections.',
    siteName: 'Bella Casa Inspections',
    images: [
      {
        url: '/lovable-uploads/3ccedcb6-254b-4d8b-ba65-c9dba2d41af2.png',
        width: 1200,
        height: 630,
        alt: 'Bella Casa Inspections',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bella Casa Inspections | Wind Mitigation Inspections New Orleans',
    description: 'Professional wind mitigation inspections in Greater New Orleans. Save thousands on home insurance.',
    images: ['/lovable-uploads/3ccedcb6-254b-4d8b-ba65-c9dba2d41af2.png'],
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
  verification: {
    google: 'add-your-google-site-verification-here',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryClientProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            {children}
          </TooltipProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
