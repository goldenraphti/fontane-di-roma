import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
// import MapUI from "../components/mapui"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Home (map)</h1>
    <p>Browse the map, or browse by story/photo at the bottom</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    {/* <MapUI></MapUI> */}
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
