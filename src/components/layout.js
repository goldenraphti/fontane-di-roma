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
import "../styles/color.css"
import "../styles/typography.css"
import "../styles/layout.css"
import "../styles/index.css"
import "../styles/buttons.css"

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
          backgroundColor: 'var(--pink)',
          zIndex: '1500',
        }}
        className='h-1 w-auto absolute top-0 left-0 right-0'></div>
      <div
        style={{
          margin: `0 auto`,
          padding: isMapPage ? '0' : `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
          minHeight: '100vh',
        }}
        className='flex flex-col justify-between text-sm lg:text-base'
        >
        { ( !isHomePage && !isMapPage) &&
          <Header siteTitle={data.site.siteMetadata.title} />
        }
        <main>{children}</main>
        <footer
          style={{
            zIndex:'1500',
          }}
          className={`flex justify-center mt-10 text-sm ${isMapPage ? 'absolute bottom-0 w-screen mb-2 text-gray-500' : ''}`}>
          {/* TODO: replace by Border Less Border Line email/website */}
          <a href="https://www.gatsbyjs.org" className={`${isMapPage ? 'text-gray-500' : 'text-gray-900'}`}>Border Less Border Line </a>
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
