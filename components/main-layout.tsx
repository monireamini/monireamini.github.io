import React from 'react';
import Head from 'next/head'
import { useRouter } from "next/router";
import Footer from "./footer";

const MainLayout = ({children, ...customMeta}) => {
  const router = useRouter();

  const meta = {
    title: "Monireh Amini - Front-end Developer",
    description: `I've been developing websites for 3 years straight. Get in touch with me to know more.`,
    image: "/avatar.png",
    type: "website",
    ...customMeta,
  };

  return (
      <div>
        <Head>
          <title>{meta.title}</title>
          <meta name="robots" content="follow, index" />
          <meta content={meta.description} name="description" />
          <meta
              property="og:url"
              content={`https://monireamini.github.io${router.asPath}`}
          />
          <link
              rel="canonical"
              href={`https://monireamini.github.io${router.asPath}`}
          />
          <meta property="og:type" content={meta.type} />
          <meta property="og:site_name" content="Monireh Amini" />
          <meta property="og:description" content={meta.description} />
          <meta property="og:title" content={meta.title} />
          <meta property="og:image" content={meta.image} />
          {/*{meta.date && (*/}
          {/*    <meta property="article:published_time" content={meta.date} />*/}
          {/*)}*/}
        </Head>
        <main className="dark:bg-gray-800 w-full">
          {/*<Navbar />*/}
          <div>{children}</div>
          <Footer />
        </main>
      </div>
  );
};

export default MainLayout;
