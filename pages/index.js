import React from 'react'
import Link from 'next/link'
import Layout from '../src/components/layout'
import StarWarIndex from '../src/components/star-war-index'

const IndexPage = () => (
  <Layout>
    <h3>Star War Character</h3>
    <StarWarIndex />
  </Layout>
)

export default IndexPage
