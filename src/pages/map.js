import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MapUI from "../components/mapui"

const MapPage = () => (
  <Layout>
    <SEO title="Contact" />
    <h1>Map</h1>
    <p>Welcome to Map Page</p>
    <MapUI
      style={{
        width: `600px`,
        height: `400px`,
      }}
     />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default MapPage
