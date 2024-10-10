// pages/_app.js
import Layout from "../components/layout.jsx";
import "../styles/global.css"; // Import global styles if you have any
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
