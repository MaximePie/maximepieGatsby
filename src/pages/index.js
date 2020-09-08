import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HomePageSection from "../components/molecules/HomePageSection";
import projectsImage from '../images/projects.png'
import coursesImage from '../images/courses.jpg'
import skillsImage from '../images/skills.jpg'
import {viewportContext} from "../contexts/viewport";

const IndexPage = () => {
  const isMobile = React.useContext(viewportContext);

  return (
    <Layout>
      <SEO title="Home"/>
      <HomePageSection
        redirectPath="/myProjects"
        title="Mes projets"
        illustrationPath={projectsImage}
        text="Découvrez mes créations"
      />
      <HomePageSection
        redirectPath="/myCourses"
        title="Mes formations"
        illustrationPath={coursesImage}
        text="Découvrez les formations que je donne"
        isInverted={!isMobile}
      />
      <HomePageSection
        redirectPath="/mySkills"
        title="Mes compétences"
        illustrationPath={skillsImage}
        text="Consultez mes compétences"
      />
      <HomePageSection
        redirectPath="/aboutMe"
        text="Qui suis-je ?"
        isInverted={!isMobile}
        variant="selfPresentation"
      />
    </Layout>
  )
}

export default IndexPage
