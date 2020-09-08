import {Link} from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Navigation from "./Navigation";

const Header = ({siteTitle}) => (
  <header className="Header">
    <h1 className="Header__title">
      <Link
        to="/"
        className="Header__title-link"
      >
        {siteTitle}
      </Link>
      <span className="Header__title-side-text">Créateur</span>
    </h1>
    <Navigation/>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header
