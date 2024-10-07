'use client'
// use client solo afecta a este archivo y no a sus hijos.
import { FC } from 'react';
import Head from 'next/head';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

interface Props {
    title : string, 
    pageDescription: string, 
    imageFullURL?: string
}

export const PageLayout: FC<Props> = ({ children, title, pageDescription, imageFullURL }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name='description' content={pageDescription} />
                <meta name='og:title' content={title} />
                <meta name='og:description' content={pageDescription} />
                
                {
                    imageFullURL && (
                        <meta name='og:title' content={imageFullURL} />
                    )
                }
                
            </Head>
            <nav>
                <Header />
            </nav>

            <main>
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}