import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import EditorSettings from "../../editorSettings/editorSettings.json"

const HomePage = ({ data }) => {

  return (
    <Layout>
      <SEO title="Home" />
      <div key="home">
        <h1>Fontane di Roma</h1>
        <p>Explore Roma through photography cartography and short stories.
Sit down, relax, and travel. Live the twelve stories, twelve destinies, twelves photography. Taking place in real spots of Roma.</p>
        <nav>
          <Link
            to='/mapPage'
            style={{
              color: `#000`,
            }}>Travel by Map</Link>
            <Link
            to='/photosGridPage'
            style={{
              color: `#000`,
            }}>Travel by Photo</Link>
            <Link
            to='/storiesGridPage'
            style={{
              color: `#000`,
            }}>Travel by Stories</Link>
        </nav>
      </div>
    </Layout>
  )
}

export default HomePage

export const pageQuery = graphql`
  query {
    allWordpressPost {
      edges {
        node {
          author
          categories
          title
          content
          id
          date
          status
        }
      }
    }
  }
`
