import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import EditorSettings from "../../editorSettings/editorSettings.json"
import PropTypes from 'prop-types'
import ImageFontana from '../components/imageFontana'
import filterPosts from '../utils/filterPosts'

const PhotosGridPage = ({ data }) => {

    const arrFountains = filterPosts(data, EditorSettings);

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
