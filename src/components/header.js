import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const topRightCategory = [ 'home','about','contact'];
const listCategories = topRightCategory.map((category) =>
  <li
    style={{
      marginLeft: (typeof window !== 'undefined') && window.innerWidth < 900 ? `15px` : '40px',
      marginBottom: 0,
      fontSize: `16px`,
      lineHeight: `0`,
    }}
    key={category}
  >
      <Link
        to={`/${
            category !== 'home' ? category : ''
          }`}
        style={{
          color: `#fff`,
        }}>{category}</Link>
  </li>
);

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: '#000',
      height: `60px`,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}
  >
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: (typeof window !== 'undefined') && window.innerWidth < 900 ? 'center' : 'baseline',
        margin: `0 auto`,
        width: `100%`,
        maxWidth: 960,
        padding: `1rem 2rem 0.8rem`,
      }}
    >
      <h1 style={{
        margin: 0,
        lineHeight: 0,
        }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            fontSize: `20px`,
            lineHeight: `1em`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <div>
        <ul
        style={{
          color: `white`,
          textDecoration: `none`,
          margin: 0,
          display: 'flex',
          listStyleType: 'none',
        }}>
          {listCategories}
        </ul>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
