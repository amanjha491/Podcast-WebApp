import { useState } from "react";
import Head from "next/head";
import Header from "../components/header.js";
import Sidebar from "../components/sidebar.js";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <Head>
        <title>Podcast Player</title>
        <meta name="description" content="Podcast Player" />
        <link
          rel="icon"
          href="https://img.freepik.com/premium-vector/podcast-flat-icon_180786-8.jpg"
        />
      </Head>
      <div className="bg-main-gray min-h-screen text-white">
        <Header setShowSidebar={setShowSidebar} />
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}

export default MyApp;
