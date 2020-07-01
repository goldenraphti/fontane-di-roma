import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import EditorSettings from "../../editorSettings/editorSettings.json"
import ImageFontana from '../components/imageFontana'
import PropTypes from 'prop-types'
import IntroNavCard from '../components/introNavCard'
import filterPosts from '../utils/filterPosts'

const HomePage = ({ data }) => {

  const arrFountains = filterPosts(data, EditorSettings);

  const hundredVW = window.innerWidth;
  const widthContainer = hundredVW - ((1.0875 * 16) * 2);
  const hundredVH = window.innerHeight;
  const rem = 16; // in px
  const heightCardNoMargin = hundredVH * 0.3;
  const margin = 2 * rem;
  const widthCardWithMargin = heightCardNoMargin / 1.497 + margin;
  const amountCardsPerRow = Number((widthContainer / widthCardWithMargin).toFixed());
  const amountCardsRemainingAroundIntro = amountCardsPerRow >= 5 ? amountCardsPerRow - 3 : 0;
  const areRemainingCardsEvenNumber = amountCardsRemainingAroundIntro % 2 === 0 ? true : false;

  console.log('posts', filterPosts(data, EditorSettings));

  return (
    <Layout>
      <SEO title="Home" />
      <div key="Home" className='flex flex-col justify-start items-stretch'>
        <ul className={`grid-with-central-card`}>
          <IntroNavCard
            key='introNavCard'
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
