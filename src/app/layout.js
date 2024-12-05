import "./globals.css";
import Meta from "@/components/Meta.jsx"
import SkipNav from "@/layout/SkipNav.jsx";
import Header from "@/layout/Header/Header";
import { metadata } from "@/data/metadata";
import Head from "next/head";


export default function RootLayout({ children }) {
  return (
    <html lang="ko">
    <Head>
      <Meta 
        title={metadata.title} 
        description={metadata.description} 
        image={metadata.image} 
        url={metadata.url} 
        siteName={metadata.siteName}
      />
      <title>{metadata.title}</title>
    </Head>
    <body>
      <SkipNav />
      <div className="wrap">
        <Header />
        {children}
      </div>
    </body>
    </html>
  );
}
