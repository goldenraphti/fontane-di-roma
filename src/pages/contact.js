import React, { Component } from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => (
  <Layout>
    <SEO title="Contact" />
    <h1>Contact</h1>
    <p>Welcome to Contact Page</p>

    <div>
      <h1>Pages</h1>
      {data.allWordpressPage.edges.map(({ node }) => (
        <div key={node.slug}>
          <Link to={node.slug}>
            <h2>{node.title}</h2>
          </Link>
          <h3>{node.title}</h3>
          <p>{node.id}</p>
          <p>{node.author}</p>
          <p>{node.date}</p>
          <p>{node.status}</p>
          <p dangerouslySetInnerHTML={{__html: node.content}}></p>
          <p>{node.slug}</p>
        </div>
      ))}
    </div>

    <div>
      <h2>Credits</h2>
      <p>All texts are written by Laura Camacho</p>
      <p>All photos are made by Raphael Ferrand</p>
      <p>Development of the website made by Raphael Ferrand</p>
      <h3>External credits</h3>
      <p>React, Gatsby, Babel, Webpack, Wordpress, Internet, EFF, Firefox, Visual Studio, Linux Ubuntu, ...</p>
      <p>Photo from page 404 by David Kovalenko on Unsplash</p>
    </div>

    <Link to="/">Go back to the homepage</Link>
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
