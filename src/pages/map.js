import React, { useState }  from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MapUI from "../components/mapui"
import EditorSettings from "../../editorSettings/editorSettings.json"
import { nominalTypeHack, node } from "prop-types"
import ImageFontana from '../components/imageFontana'

const MapPage = ({ data }) => {

  const cleanString = (stringFiltered) => stringFiltered.split('{')[1].split('}')[0];
  const [isOpened, setIsOpened] = useState(false);
  const [openedStory, setOpenedStory] = useState({});

  const onOpenMarker = (markersFountain) => {
    setIsOpened(true);
    setOpenedStory(markersFountain);
  }

  // close the story panel when press Esc
  document.addEventListener('keyup', (e) => e.keyCode === 27 ? setIsOpened(false) : null );

  const filterPostsContent = (postContent, title) => {
    const arrCleanedContent = postContent.split('>{')
                                          .filter( str => str[0] === '[');
    const id = cleanString( arrCleanedContent.find( str => str.includes('FOUNTAIN ID')) );
    const latLong = cleanString( arrCleanedContent.find( str => str.includes('LAT-LONG')) );
    const imgPath = cleanString( arrCleanedContent.find( str => str.includes('IMAGE URL')) );
    const story = cleanString( arrCleanedContent.find( str => str.includes('STORY')) );
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
      { isOpened &&
        <div key={openedStory.id} 
          style={{
            width: `80%`,
            maxWidth: `max-content`,
            height: `calc(100% - 60px)`,
            backgroundColor: `#FFF`,
            zIndex: `1100`,
            position: `fixed`,
            right: `0`,
            bottom: `0`,
            display: `flex`,
            justifyContent: `space-between`,
            alignItems: `flex-start`,
            padding: `25px`,
            boxShadow: `-2px 4px 4px rgba(0, 0, 0, 0.25)`,
            borderRadius: `10px 0px 0px 10px`
          }} >
          <div style={{
            position: `absolute`,
            top: `15px`,
            right: `15px`
          }}>
            <button style={{ padding: `15px 10px`,
                              backgroundColor: `transparent`,
                              border: `none`,
                              cursor: `pointer`}}
                    onClick={ () => setIsOpened(false)}
            >
              <div style={{
                height: `2px`,
                width: `15px`,
                backgroundColor: `grey`,
                transform: `rotate(45deg)`
              }}>
              <div style={{
                height: `2px`,
                width: `15px`,
                backgroundColor: `grey`,
                transform: `rotate(90deg)`
              }}></div>
              </div>
            </button>
          </div>
          <div className='story-panel photo-side'
               style={{ flex: `1`,
                        height: `100%`,
                        display: `flex`,
                        flexDirection: `column`,
                        justifyContent: `center`,
                        padding: `0.5em`
                      }}>
            <ImageFontana alt={openedStory.title} filename={openedStory.imgPath}
                           style={{
                            maxHeight: `300px`
                          }}/>
          </div>
          <div className='story-panel text-side'
          style={{
            flex: `1`,
            display: `flex`,
            flexDirection: `column`,
            justifyContent: `flex-start`,
            margin: `2em 0.5em`,
            maxHeight: `calc(100% - 60px)`,
            overflowX: `scroll`
          }}>
            <h3 dangerouslySetInnerHTML={{__html: openedStory.title}}
                style={{ textAlign: `center`
                }}></h3>
            <p dangerouslySetInnerHTML={{__html: openedStory.story}}
                style={{ fontSize: `14px`,
                          paddingBottom: `80px`}}>
            </p>
            <div style={{ background: `linear-gradient(180deg, rgba(255, 255, 255, 0) -20.75%, #FFFFFF 71.7%`,
                            minHeight: `150px`,
                            position: `absolute`,
                            bottom: `0`,
                            minWidth: `calc( (( 100% - 50px) / 2) - (2em))`}}></div>
          </div>
        </div>

      }
      <MapUI
        style={{
          width: `600px`,
          height: `100%`,
        }}
        key='MapUI'
        onOpenMarker = {onOpenMarker}
        isOpened = {isOpened}
        setIsOpened = {setIsOpened}
        openedStory = {openedStory}
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
