import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Image = ({imageName}) => {
  const data = useStaticQuery(graphql`
    query {
      pi: file(relativePath: { eq: "pi.png" }) {
        childImageSharp {
          fluid(maxWidth: 420) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      projectsImage: file(relativePath: { eq: "projects.png" }) {
        childImageSharp {
          fluid(maxWidth: 420) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      coursesImage: file(relativePath: { eq: "courses.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 420) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      skillsImage: file(relativePath: { eq: "skills.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 420) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      flashcardstormImage: file(relativePath: { eq: "flashcarstorm.png" }) {
        childImageSharp {
          fluid(maxWidth: 1800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      educhubImage: file(relativePath: { eq: "educhub.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sandboxsimgameImage: file(relativePath: { eq: "sandbox_simgame.png" }) {
        childImageSharp {
          fluid(maxWidth: 1800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      clientprojectImage: file(relativePath: { eq: "clientsProject.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  switch (imageName) {
    case 'pi':
      return <Img fluid={data.pi.childImageSharp.fluid} />;
    case 'projects':
      return <Img fluid={data.projectsImage.childImageSharp.fluid} />;
    case 'courses':
      return <Img fluid={data.coursesImage.childImageSharp.fluid} />;
    case 'skills':
      return <Img fluid={data.skillsImage.childImageSharp.fluid} />;
    case 'flashcardstorm':
      return <Img fluid={data.flashcardstormImage.childImageSharp.fluid} />;
    case 'educhub':
      return <Img fluid={data.educhubImage.childImageSharp.fluid} />;
    case 'sandboxsimgame':
      return <Img fluid={data.sandboxsimgameImage.childImageSharp.fluid} />;
    case 'clientproject':
      return <Img fluid={data.clientprojectImage.childImageSharp.fluid} />;
    default:
      return <Img />
  }
};

export default Image
