import React from 'react';

export default function Component() {
  return (
    <footer className="Footer">
      © {new Date().getFullYear()},
      {` `}
      <a className="Footer__link Footer__link--text" href="https://www.linkedin.com/in/maxime-pie-449149123/">
        Créé par Maxime Pie
      </a>
      <span className="Footer__social-medias">
        <a className="Footer__link" href="https://www.linkedin.com/in/maxime-pie-449149123/">
          <i className="fab fa-linkedin"/>
        </a>
        <a className="Footer__link" href="https://github.com/MaximePie"><i className="fab fa-github"/></a>
        <a className="Footer__link" href="https://www.youtube.com/user/Chamalowat"><i className="fab fa-youtube"/></a>
      </span>
    </footer>
  );
}
