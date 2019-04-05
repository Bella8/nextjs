import React from 'react'
import Layout from '../src/components/layout'
import CommentIndex from '../src/components/comment-index'
import Head from 'next/head'

const Comment = () => (
  <div>
    <Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" />
    </Head>
    <Layout>
      <CommentIndex />
    </Layout>
  </div>
)

export default Comment
