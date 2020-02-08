import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>

      {/* TODO: use a photo of very lost for BG */}
      <Img
        className=""
        fluid={data.file.childImageSharp.fluid}
        alt="lost page"
      />

    </Layout>
  )
}

export default NotFoundPage

export const query = graphql`
  query {
    file(relativePath: { eq: "external/david-kovalenko-G85VuTpw6jg-unsplash.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

