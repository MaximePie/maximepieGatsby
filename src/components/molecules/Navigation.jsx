import React from 'react';
import { Link } from 'gatsby';
import {viewportContext} from "../../contexts/viewport";

export default function Navigation() {
  const isMobile = React.useContext(viewportContext);

  return (
    <div className="Navigation">
      <Link
        to="/"
        className="Navigation__link"
      >
        {!isMobile && ("Accueil")}
        {isMobile && (
          <i className="fas fa-home"/>
        )}
      </Link>
      <Link
        to="/myCourses"
        className="Navigation__link"
      >
        {!isMobile && ("Cours")}
        {isMobile && (
          <i className="fas fa-chalkboard-teacher"/>
        )}
      </Link>
      <Link
        to="/myProjects"
        className="Navigation__link"
      >
        {!isMobile && "Mes projets"}
        {isMobile && (
          <i className="fas fa-folder"/>
        )}
      </Link>
      {/*<Link*/}
      {/*  to="/aboutMe"*/}
      {/*  className="Navigation__link"*/}
      {/*>*/}
      {/*  {!isMobile && "Qui suis-je ?"}*/}
      {/*  {isMobile && (*/}
      {/*    <i className="fas fa-user"/>*/}
      {/*  )}*/}
      {/*</Link>*/}
      <Link
        to="/ContactPage"
        className="Navigation__link"
      >
        {!isMobile && "Contact"}
        {isMobile && (
          <i className="fas fa-pen"/>
        )}
      </Link>
    </div>
  );
}
