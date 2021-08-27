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

  const [gridColumn, setGridColumn] = useState( '2 / -2');
  const [heightIntroCard, setHeightIntroCard] = useState( '1');
  const [cardsPerRow, setCardsPerRow] = useState(3);

  const refThree = useRef(null);
  const refFour = useRef(null);
  const refFive = useRef(null);
  const refSeven = useRef(null);

  useEffect(() => {
    const aboveSevenAndHeightCards = () => document.documentElement.clientWidth > refSeven?.current?.offsetWidth;
    const setForSevenAndHeightCards = () =>  {
      setGridColumn(' 3 / -3');
      setHeightIntroCard('1');
      setCardsPerRow(7);
    }
    const aboveFourCards = () => document.documentElement.clientWidth > refFour?.current?.offsetWidth;
    const setForFourFiveAndSixCards = () =>  {
      setGridColumn(' 2 / -2');
      setHeightIntroCard('1');
      setCardsPerRow(5);
    }
    const aboveThreeCards = () => document.documentElement.clientWidth > refThree?.current?.offsetWidth;
    const setForAboveThreeCards = () => {
      setGridColumn(' 2 / -2');
      setHeightIntroCard('2');
      setCardsPerRow(3);
    }
    const setForBelowThreeCards = () => {
      setGridColumn(' 1 / -1');
      setHeightIntroCard('1');
      setCardsPerRow(2);
    }


    const placeIntroCard = () => {
      if (aboveSevenAndHeightCards()) {
        setForSevenAndHeightCards();
      } else if (aboveFourCards()) {
        setForFourFiveAndSixCards();
      } else if (aboveThreeCards()) {
        setForAboveThreeCards();
      } else {
        setForBelowThreeCards();
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
        <div className='three-cards' ref={refThree}></div>
        <div className='four-cards' ref={refFour}></div>
        <div className='five-cards' ref={refFive}></div>
        <div className='seven-cards' ref={refSeven}></div>
      </div>

      <div key="Home" className='flex flex-col justify-start items-stretch'>
        <ul className={`grid-with-central-card mt-5 lg:m-5`}>
          <IntroNavCard
            key='introNavCard'
            gridColumn={gridColumn}
            heightIntroCard={heightIntroCard}
            cardsPerRow={cardsPerRow}
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
