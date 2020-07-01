import React, {useState, useEffect} from "react"
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

  
  const [spanWidth, setSpanWidth] = useState(3);
  const [columnStart, setColumnStart] = useState(2);
  
  const hundredVW = () => document.documentElement.clientWidth; // correct
  const widthContainer = () => hundredVW() - (((1.0875 * 16) * 2) + (20 * 2)); //correct
  const hundredVH = () => window.innerHeight; // correct
  const heightCardNoMargin = () => hundredVH() * 0.3; //FIXME: 
  const margin = () => 2 * 10;
  const widthCardWithMargin = () => heightCardNoMargin() / 1.5 + margin();
  const amountCardsPerRow = () => Number((widthContainer() / widthCardWithMargin()).toFixed());
  const amountCardsRemainingAroundIntro = () => amountCardsPerRow() >= 5 ? amountCardsPerRow() - 3 : 0;
  const areRemainingCardsEvenNumber = () =>amountCardsRemainingAroundIntro() % 2 === 0 ? true : false;

  useEffect(() => {
    // FIXME: calculations are slightly off
    const placeAndSizeIntroCard = () => {
      console.log('start', 'hundredVW', hundredVW(), 'hundredVH', hundredVH(), 'amountCardsPerRow', amountCardsPerRow(), 'margin', margin(), 'widthContainer', widthContainer(), 'heightCardNoMargin', heightCardNoMargin());
      
      if(amountCardsPerRow() < 5 ) {
        setColumnStart(1);
        setSpanWidth(amountCardsPerRow());
      } else if ( (amountCardsPerRow() > 5) && !areRemainingCardsEvenNumber()) {
        setColumnStart(1 + Math.floor(amountCardsRemainingAroundIntro() / 2));
        setSpanWidth(4);
      } else if ((amountCardsPerRow() > 5) && areRemainingCardsEvenNumber()) {
        setColumnStart(1 + Math.floor(amountCardsRemainingAroundIntro() / 2));
        setSpanWidth(3);
      }
      console.log('end');
    };
    window.addEventListener('resize', placeAndSizeIntroCard);
  });

  
  return (
    <Layout>
      <SEO title="Home" />
      <div key="Home" className='flex flex-col justify-start items-stretch'>
        <ul className={`grid-with-central-card`}>
          <IntroNavCard
            key='introNavCard'
            spanWidth={spanWidth}
            columnStart={columnStart}
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
