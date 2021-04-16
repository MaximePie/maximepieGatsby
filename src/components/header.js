import {Link} from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Navigation from "./molecules/Navigation";

const Header = ({siteTitle}) => (
  <header className="Header">
    <h1 className="Header__title">
      <Link
        to="/"
        className="Header__title-link"
      >
        {siteTitle}
      </Link>
    </h1>
    <span className="Header__subtitle">Formateur Web et créateur de super-héros</span>
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
