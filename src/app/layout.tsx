import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ChakraProvider } from '@chakra-ui/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
   title: 'DevCub',
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang='pt-br'>
         <body className={inter.className}>
            <ChakraProvider>{children}</ChakraProvider>
         </body>
      </html>
   );
}
