import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MapUI from "../components/mapui"
import EditorSettings from "../../editorSettings/editorSettings.json"
import { nominalTypeHack, node } from "prop-types"

const MapPage = ({ data }) => {

  const cleanString = (stringFiltered) => stringFiltered.split('{')[1].split('}')[0];

  console.log('EditorSettings', EditorSettings)

  const filterPostsContent = (postContent, title) => {
    const arrCleanedContent = postContent.split('>{')
                                          .filter( str => str[0] === '[');
    const id = cleanString( arrCleanedContent.find( str => str.includes('FOUNTAIN ID')) );
    const latLong = cleanString( arrCleanedContent.find( str => str.includes('LAT-LONG')) );
    const imgPath = cleanString( arrCleanedContent.find( str => str.includes('IMAGE URL')) );
    const story = cleanString( arrCleanedContent.find( str => str.includes('STORY')) );
    console.log('arrCleanedContent', arrCleanedContent, latLong, imgPath, story, { latLong, imgPath, story });
    return { id, latLong, imgPath, story, title };
  }

  return (
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
        // arrFountains={data.allWordpressPost.edges.map(({ node }) => ( filterPostsContent(node.content, node.title)  ) )}
        arrFountains={data.allWordpressPost.edges.filter(({ node }) => ( EditorSettings.fountainsToActivate[filterPostsContent(node.content, node.title).id] === true ) ).map(({ node }) => ( filterPostsContent(node.content, node.title) ) ) }
      />
    </Layout>
  )
}

export default MapPage

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
