import React, { useState }  from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MapUI from "../components/mapui"
import EditorSettings from "../../editorSettings/editorSettings.json"
import PanelStory from '../components/panelStory'
import useMobileDetect from 'use-mobile-detect-hook'
import PropTypes from 'prop-types'

const MapPage = ({ data }) => {

  const cleanString = (stringFiltered) => stringFiltered.split('{')[1].split('}')[0];
  const [isOpened, setIsOpened] = useState(false);
  const [openedStory, setOpenedStory] = useState({});

  const detectMobile = useMobileDetect();

  const onOpenMarker = (markersFountain) => {
    setIsOpened(true);
    setOpenedStory(markersFountain);
  }

  const isPortrait = (typeof window !== 'undefined') && (window.innerHeight > window.innerWidth);
  const isBottomPanel = detectMobile.isMobile() && isPortrait;

  // close the story panel when press Esc
  if (typeof window !== 'undefined') {
    document.addEventListener('keyup', (e) => e.keyCode === 27 ? setIsOpened(false) : null );
  }
  
  const regex = /^(\-?\d+(\.\d+)?),\s*(\-?\d+(\.\d+)?)$/gm;

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
      <SEO title="Home" />
      <h1
        style={{
          display: 'none',
        }}
      >Map</h1>
      { isOpened &&
        <PanelStory
          onOpenMarker = {onOpenMarker}
          isOpened = {isOpened}
          setIsOpened = {setIsOpened}
          openedStory = {openedStory}
          isBottomPanel= {isBottomPanel}
        />
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
        isMobile= {detectMobile.isMobile()}
        arrFountains={data.allWordpressPost.edges.filter(({ node }) => ( EditorSettings.fountainsToActivate[filterPostsContent(node.content, node.title).id] === true && regex.test(filterPostsContent(node.content, node.title).latLong) ) ).map(({ node }) => ( filterPostsContent(node.content, node.title) ) ) }
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

MapPage.propTypes = {
  data: PropTypes.object.isRequired
}
