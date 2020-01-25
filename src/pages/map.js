import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MapUI from "../components/mapui"
import { nominalTypeHack } from "prop-types"

const MapPage = () => (
  <Layout>
    <SEO title="Contact" />
    <h1
      style={{
        display: 'none',
      }}
    >Map</h1>
    <MapUI
      style={{
        width: `600px`,
        height: `100%`,
      }}
      key='MapUI'
     />
  </Layout>
)

export default MapPage
