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

import "../styles/main.css"
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
  const isHomePage = children.some( child => child.key === 'Home');

  return (
    <>
      <div
        style={{
          margin: `0 auto`,
          padding: isMapPage ? '0' : `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
          minHeight: '100vh',
        }}
        className='flex flex-col justify-between'
        >
        { ( !isHomePage && !isMapPage) &&
          <Header siteTitle={data.site.siteMetadata.title} />
        }
        <main>{children}</main>
        <footer className='flex justify-center mt-10'
        >
          {/* TODO: replace by Border Less Border Line email/website */}
          <a href="https://www.gatsbyjs.org" className="text-gray-900">Border Less Border Line </a>
          - © {new Date().getFullYear()}
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
