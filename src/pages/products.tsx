import { NextPage } from 'next'
import Head from "next/head";

const Products: NextPage = () => {
  return (
    <>
      <Head>
        <title>Nossos produtos</title>
        <meta name="description" content="Conheça todos os nossos produtos!" />
        <link rel="icon" href="favicon.ico" />
      </Head>

      <h1>
        Nossos produtos
      </h1>
    </>
  )
}