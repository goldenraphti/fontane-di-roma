/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "../styles/normalize.css"
import "../styles/typography.css"
import "../styles/layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const isMapPage = children.some( child => child.key === 'MapUI');

  return (
    <>
    { !isMapPage &&
      <Header siteTitle={data.site.siteMetadata.title} />
    }
      <div
        style={{
          margin: `0 auto`,
          maxWidth: isMapPage ? `100%` : 960,
          padding: isMapPage ? '0' : `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            display:'none',
          }}
        >
          © {new Date().getFullYear()}, Built by
          {` `}
          {/* TODO: replace by Border Less Border Line email */}
          <a href="https://www.gatsbyjs.org">Border Less, Border Line</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
