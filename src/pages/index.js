import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import ImageFontana from '../components/imageFontana';
import SEO from "../components/seo"



const IndexPage = ({ data }) => {

  const cleanString = (stringFiltered) => stringFiltered.split('{')[1].split('}')[0];

  const filterPostsContent = (postContent) => {
    const arrCleanedContent = postContent.split('>{')
                                          .filter( str => str[0] === '[');
    const latLong = cleanString( arrCleanedContent.find( str => str.includes('LAT-LONG')) );
    const imgPath = cleanString( arrCleanedContent.find( str => str.includes('IMAGE URL')) );
    const story = cleanString( arrCleanedContent.find( str => str.includes('STORY')) );
    console.log('arrCleanedContent', arrCleanedContent, latLong, imgPath, story, { latLong, imgPath, story });
    return { latLong, imgPath, story };
  }

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Home (map)</h1>
      <p>Browse the map, or browse by story/photo at the bottom</p>
      <p>Now go build something great.</p>
      <div>
        {data.allWordpressPost.edges.map(({ node }) => (
          <div key={node.id}>
            <h3 dangerouslySetInnerHTML={{__html: node.title}}></h3>
            <p dangerouslySetInnerHTML={{__html: filterPostsContent(node.content).story}}></p>
            <p>Location = {filterPostsContent(node.content).latLong}</p>
            <div style={{ maxWidth: `300px` }}>
              <ImageFontana alt={node.title} filename={filterPostsContent(node.content).imgPath} />
            </div>
          </div>
        ))}
      </div>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>

  )
}

export default IndexPage

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
