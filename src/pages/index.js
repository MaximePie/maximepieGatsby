import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HomePageSection from "../components/molecules/HomePageSection";
import {viewportContext} from "../contexts/viewport";

const IndexPage = () => {
  const isMobile = React.useContext(viewportContext);

  return (
    <Layout>
      <SEO title="Home"/>
      <div className="Home">
        <HomePageSection
          redirectPath="/myProjects"
          title="Mes projets"
          illustrationName='projects'
          text="Découvrez mes créations"
        />
        <HomePageSection
          redirectPath="/myCourses"
          title="Mes formations"
          illustrationName="courses"
          text="Découvrez les formations que je donne"
          isInverted={!isMobile}
        />
        <HomePageSection
          redirectPath="/aboutMe"
          text="Qui suis-je ?"
          isInverted={!isMobile}
          variant="selfPresentation"
        />
      </div>
    </Layout>
  )
};

export default IndexPage
