import "./css/globals.scss";
import "./css/layout.module.scss";
import Meta from "@/components/Meta.jsx";
import SkipNav from "@/layout/SkipNav.jsx";
import Header from "@/layout/Header/Header";
import { metadata } from "@/data/metadata";
import { NavProvider } from "@/layout/Header/NavProvider";

import Head from "next/head";
import Footer from "@/layout/Footer";


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
        <NavProvider>
          <div className="wrap">
            <Header />
            {children}
            <Footer />
          </div>
        </NavProvider>
      </body>
    </html>
  );
}
