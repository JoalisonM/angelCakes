import Head from "next/head";
import CakeFavorite from "../components/CakeFavorite";
import Catalog from "../components/Catalog";

import Abstract from "../components/Abstract";
import Steps from "../components/Steps";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | angel cakes</title>
      </Head>
      <main>
        <Abstract />
        <Catalog />
        <Steps />
        <CakeFavorite />
        <Footer />
      </main>
    </>
  )
}
