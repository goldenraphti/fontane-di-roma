import React, { useState, useEffect, useRef } from "react"
import { graphql , Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import EditorSettings from "../../editorSettings/editorSettings.json"
import ImageFontana from '../components/imageFontana'
import PropTypes from 'prop-types'
import IntroNavCard from '../components/introNavCard'
import filterPosts from '../utils/filterPosts'

const HomePage = ({ data }) => {

  const arrFountains = filterPosts(data, EditorSettings);

  const [gridColumn, setGridColumn] = useState( '1 / -1');

  const refFive = useRef(null);
  const refSeven = useRef(null);
  
  useEffect(() => {
    const aboveSevenAndHeightCards = () => document.documentElement.clientWidth > refSeven.current.offsetWidth;
    const setForSevenAndHeightCards = () =>  setGridColumn(' 3 / -3');
    const aboveFiveAndSixCards = () => document.documentElement.clientWidth > refFive.current.offsetWidth;
    const setForFiveAndSixCards = () =>  setGridColumn(' 2 / -2');
    const belowFiveCards = () => document.documentElement.clientWidth < refFive.current.offsetWidth;
    const setForBelowFiveCards = () => setGridColumn(' 1 / -1');
    

    const placeIntroCard = () => {
      if (aboveSevenAndHeightCards()) {
        setForSevenAndHeightCards();
      } else if (aboveFiveAndSixCards()) {
        setForFiveAndSixCards();
      } else if (belowFiveCards()) {
        setForBelowFiveCards();
      }
    }

    placeIntroCard();
    window.addEventListener('resize', placeIntroCard);
  }, [refFive.current, refSeven.current]);

  return (
    <Layout>
      <SEO title="Home" />

      {/* used to place the intro card */}
      <div>
        <div className='five-cards' ref={refFive}></div>
        <div className='seven-cards' ref={refSeven}></div>
      </div>

      <div key="Home" className='flex flex-col justify-start items-stretch'>
        <ul className={`grid-with-central-card`}>
          <IntroNavCard
            key='introNavCard'
            gridColumn={gridColumn}
          />
          {arrFountains.map((fountain, index) =>
            <li key={fountain.id} className=''>
              <Link to={`/mapPage?${fountain.id}`}>
                <ImageFontana alt={fountain.title} filename={fountain.imgPath} />
              </Link>
            </li>
          )}
        </ul>
      </div>
    </Layout>
  )
}

export default HomePage

HomePage.propTypes = {
  data: PropTypes.object.isRequired
}

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
