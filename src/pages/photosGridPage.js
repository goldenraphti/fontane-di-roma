import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import EditorSettings from "../../editorSettings/editorSettings.json"
import PropTypes from 'prop-types'
import ImageFontana from '../components/imageFontana'

const PhotosGridPage = ({ data }) => {

    const posts = data.allWordpressPost.edges;
    const cleanString = (stringFiltered) => stringFiltered.split('{')[1].split('}')[0];
    const regex = /^(\-?\d+(\.\d+)?),\s*(\-?\d+(\.\d+)?)$/gm;

    const filterPostsContent = (postContent, title) => {
        const arrCleanedContent = postContent.split('>{')
            .filter(str => str[0] === '[');
        const id = cleanString(arrCleanedContent.find(str => str.includes('FOUNTAIN ID')));
        const latLong = cleanString(arrCleanedContent.find(str => str.includes('LAT-LONG')));
        const imgPath = cleanString(arrCleanedContent.find(str => str.includes('IMAGE URL')));
        const story = cleanString(arrCleanedContent.find(str => str.includes('STORY')));
        return { id, latLong, imgPath, story, title };
    }
    const arrFountains = posts.filter(({ node }) => (EditorSettings.fountainsToActivate[filterPostsContent(node.content, node.title).id] === true && regex.test(filterPostsContent(node.content, node.title).latLong))).map(({ node }) => (filterPostsContent(node.content, node.title)));
    console.log('arrFountains', arrFountains);

    return (
        <Layout>
            <SEO title="Home" />
            <div>
                <h1>Fontane di Roma</h1>
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
            <div>
                <ul className={`flex flex-wrap justify-between`}>
                    {arrFountains.map(fountain =>
                        <li key={fountain.id} className='m-4'>
                            <Link to={`/mapPage?${fountain.id}`}>
                                <div style={{
                                    height: `auto`,
                                    width: `250px`
                                }}>
                                    <ImageFontana alt={fountain.title} filename={fountain.imgPath} />
                                </div>
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
        </Layout>
    )
}

PhotosGridPage.propTypes = {
    data: PropTypes.object.isRequired
}

export default PhotosGridPage

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
