import React from 'react'
import Link from 'next/link'
import Head from 'next/head';
import Layout from '../src/components/layout'
import StarWarIndex from '../src/components/star-war-index'

const IndexPage = () => (
  <Layout>
    <Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" />
    </Head>
    <h3>Star War Character</h3>
    <StarWarIndex />
  </Layout>
)

export default IndexPage
