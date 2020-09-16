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
import Footer from "./footer"

const Layout = ({ children }) => {

  let viewportWidth = 0;

  const [isMobile, setMobileStatus] = React.useState(viewportWidth < 1000);

  React.useEffect(() => {
    if (document) {
      window.onresize = () => {
        const viewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
        setMobileStatus(viewportWidth < 1000)
      };
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
      <div className="Layout">
        <Header siteTitle={data.site.siteMetadata.title}/>
        <main className="Layout__main">{children}</main>
        <Footer/>
      </div>
    </viewportContext.Provider>
  )
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout
