import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout";
import SEO from "../components/seo";

const NotFoundPage = () => {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <div className="flex flex-col items-center">
        <h1
          className='text-6xl'
          style={{
            color:`#A2108F`,
        }}>NOT FOUND</h1>
        <p
          className='text-2xl'
          style={{
            color:`#A2108F`,
        }}>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>

    </Layout>
  )
}

export default NotFoundPage
