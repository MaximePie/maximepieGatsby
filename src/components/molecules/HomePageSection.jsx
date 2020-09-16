import React from 'react';
import Particles from "react-particles-js";
import {bubbleParticles} from "../particles";
// import {viewportContext} from "../../contexts/viewport";
import { Link } from 'gatsby';
import Image from "../image";


export default function HomePageSection(props) {
  const {redirectPath, title, illustrationName, text, isInverted, variant} = props;

  // const isMobile = React.useContext(viewportContext);

  return (
    <div className={"HomePageSection " + (isInverted ? 'HomePageSection--inverted' : '')}>
      {!isInverted && (
        <>
          <div className="HomePageSection__illustration" data-aos="fade-up">
            {homepageSectionIllustration()}
          </div>
          <div className="HomePageSection__details">
            {/* TODO - Restore once mobile calculation is restored */}
            {/*{!isMobile && (*/}
            <p className="HomePageSection__details-text">{text}</p>
            {/*)}*/}
            <Link to={redirectPath} className="HomePageSection__details-link">
              <i className="fas fa-search HomePageSection__details-link-icon"/>
              Explorer
            </Link>
          </div>
        </>
      )}
      {isInverted && (
        <>
          <div className="HomePageSection__details">
            {/* TODO - Restore once mobile calculation is restored */}
            {/*{!isMobile && (*/}
            <p className="HomePageSection__details-text">{text}</p>
            {/*)}*/}
            <Link to={redirectPath} className="HomePageSection__details-link">
              <i className="fas fa-search HomePageSection__details-link-icon"/>
              Explorer
            </Link>
          </div>
          <div className="HomePageSection__illustration" data-aos="fade-up">
            {homepageSectionIllustration()}
          </div>
        </>
      )}
    </div>
  );


  /**
   * Returns the homepage section illustration
   *
   */
  function homepageSectionIllustration() {
    return (
      <>
        {variant === "selfPresentation" && (
          <iframe
            title="Présentation vidéo"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/F89TPFCGIyE"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
        {!variant && (
          <>
            <Image imageName={illustrationName}/>
            <h2 className="HomePageSection__illustration-title">
              <a href={redirectPath} className="HomePageSection__illustration-link">
                {title}
              </a>
            </h2>
            <Particles
              className="HomePageSection__illustration-particles"
              params={bubbleParticles}
            />
          </>
        )}
      </>
    )
  }
}
