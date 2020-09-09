/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import {graphql, useStaticQuery} from "gatsby"
import { viewportContext } from '../contexts/viewport'


import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {

  let viewportWidth = 0;

  const [isMobile, setMobileStatus] = React.useState(viewportWidth < 1000);

  React.useEffect(() => {
    window.onresize = () => {
      const viewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
      setMobileStatus(viewportWidth < 1000)
    };
    if (document) {
      viewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    }
  }, []);

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <viewportContext.Provider value={isMobile}>
      <Header siteTitle={data.site.siteMetadata.title}/>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()},
          {` `}
          <a href="https://www.gatsbyjs.org">Créé par Maxime Pie</a>
        </footer>
      </div>
    </viewportContext.Provider>
  )
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout
