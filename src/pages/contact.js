import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => (
  <Layout>
    <SEO title="Contact" />
    <div style={{
      padding: (typeof window !== 'undefined') && window.innerWidth < 900 ? `0` : `50px`,
      maxWidth: `1000px`
    }}>
      <h1 style={{
        marginTop: `30px`,
      }}>Contact</h1>
      <div>
        <h2>Credits</h2>
        <p>An artistic project made by <a href="https://eff.org">"Border Less Border Line</a></p>
        <p>All texts are written by Laura Camacho</p>
        <p>All photos && Web Dev made by Raphael Ferrand</p>
        <h3>External credits</h3>
        <p>React, Gatsby, Babel, Webpack, Wordpress, Internet, EFF, Firefox, Visual Studio, Linux Ubuntu, ...</p>
        <p>Photo from page 404 by David Kovalenko on Unsplash</p>
      </div>

      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export const pageQuery = graphql`
  query {
    allWordpressPage {
      edges {
        node {
          id
          title
          author
          date
          status
          content
          slug
        }
      }
    }
    allWordpressPost {
      edges {
        node {
          title
          excerpt
          slug
        }
      }
    }
    allImageSharp {
      nodes {
        original {
          src
        }
      }
    }
  }
`
