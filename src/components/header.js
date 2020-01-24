import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const topRightCategory = [ 'home', 'contact', 'map'];
const listCategories = topRightCategory.map((category) =>
  <li
    style={{
      marginLeft: '40px',
      marginBottom: 0,
    }}
  >
      <Link
        to={`/${category}`}
        style={{
          color: `pink`,
        }}>{category}</Link>
  </li>
);

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: '#000',
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
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
