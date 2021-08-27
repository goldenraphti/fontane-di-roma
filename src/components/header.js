import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react";
import logo from '../images/logo-with-tagline.svg';

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
          color: `#A2108F`,
        }}>{category}</Link>
  </li>
);

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: '#fff',
      height: `60px`,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      border: `1px solid #A2108F`,
      marginLeft: `-1.0875rem`,
      marginRight: `-1.0875rem`,
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
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
          fontSize: `20px`,
          lineHeight: `1em`,
        }}
      >
        <img
          className="h-10"
          src={logo}
          alt="logo Fontane di Roma"
        />
      </Link>
      <div>
        <ul
        style={{
          color: `#A2108F`,
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
