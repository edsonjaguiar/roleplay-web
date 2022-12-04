import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import '@/styles/globals.css';
import { Poppins } from '@next/font/google';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '700'],
    variable: '--font-poppins',
});

export default function App({ Component, pageProps }: AppProps) {
    return (
        <SessionProvider session={pageProps.session}>
            <Head>
                <title>Miami City</title>
                <link
                    rel="shortcut icon"
                    href="/favicon.jpg"
                    type="image/x-icon"
                />
            </Head>

            <main className={`${poppins.variable} font-sans`}>
                <Navbar />
                <Component {...pageProps} />
                <Footer />
            </main>
        </SessionProvider>
    );
}
