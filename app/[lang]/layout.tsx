import "@/styles/globals.css";
import { PageLayout } from "./components/page-layout";
import { i18n } from "@/i18n-config";
import Head from "./head";
import Header from "./components/header";
import { Londrina_Solid } from "next/font/google";
import { Londrina_Outline } from "next/font/google";

const londrina_solid = Londrina_Solid({
    weight: ['400'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-londrina-solid'
})

const londrina_outline = Londrina_Outline({
    weight: ['400'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-londrina-outline'
})

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'es' }];
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html className={`h-full ${londrina_outline.variable} ${londrina_solid.variable}`} lang={params.lang}>
      <Head />
      <body className="h-full w-full absolute top-0 left-0 overscroll-none">
        <PageLayout>{children}</PageLayout>
      </body>
    </html>
  );
}