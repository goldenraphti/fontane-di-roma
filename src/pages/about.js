import React from "react"
import { graphql } from "gatsby"

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
      }}>About</h1>
      <div>
        <p>
          "Fontane di Roma" is an artistic project made by "Border Less Border Line",
           with the idea of mixing together several forms of art: photography, litterature,
            cartography and web development.
  
          
        </p>
      </div>
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
