import React from 'react';
import {useLocation} from "react-router-dom";
import { Link } from 'gatsby';
import {viewportContext} from "../contexts/viewport";

export default function Navigation(props) {
  const isMobile = React.useContext(viewportContext);

  const { pathname } = useLocation();

  const [selectedPath, setSelectedPath] = React.useState(pathname);

  return (
    <div className="Navigation">
      <Link
        to="/"
        className={"Navigation__link " + (selectedPath === '/' ? "Navigation__link--selected" : "")}
        onClick={() => {setSelectedPath('/')}}
      >
        {!isMobile && ("Accueil")}
        {isMobile && (
          <i className="fas fa-home"/>
        )}
      </Link>
      <Link
        to="/myProjects"
        className={"Navigation__link " + (selectedPath === '/myProjects' ? "Navigation__link--selected" : "")}
        onClick={() => {setSelectedPath('/myProjects')}}
      >
        {!isMobile && "Mes projets"}
        {isMobile && (
          <i className="fas fa-folder"/>
        )}
      </Link>
      <Link
        to="/aboutMe"
        className={"Navigation__link " + (selectedPath === '/aboutMe' ? "Navigation__link--selected" : "")}
        onClick={() => {setSelectedPath('/aboutMe')}}
      >
        {!isMobile && "Qui suis-je ?"}
        {isMobile && (
          <i className="fas fa-user"/>
        )}
      </Link>
      <Link
        to="/ContactPage"
        className={"Navigation__link " + (selectedPath === '/contact' ? "Navigation__link--selected" : "")}
        onClick={() => {setSelectedPath('/contact')}}
      >
        {!isMobile && "Contact"}
        {isMobile && (
          <i className="fas fa-pen"/>
        )}
      </Link>
    </div>
  );
}
