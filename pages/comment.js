import React from 'react'
import Layout from '../src/components/layout'
import CommentIndex from '../src/components/comment-index'
import Head from 'next/head'


const Comment = () => (
  <div>
    <Head>
      <title>My styles pages</title>
      <link href='../static/styles.css' rel='stylesheet' />
    </Head>
    <Layout>
      <CommentIndex />
    </Layout>
  </div>
);

export default Comment
