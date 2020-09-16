import React from 'react';
// import {viewportContext} from "../../contexts/viewport";

export default function Button({text, icon, variant, link, className, isFabIcon}) {
  // const isMobile = React.useContext(viewportContext);
  const isMobile = false;

  return (
    <a
      href={link}
      className={`Button ${variant ? 'Button--secondary' : ''}`}
    >
      <i className={`${isFabIcon ? 'fab' : 'fas'} fa-${icon} Button__icon`}/>
      {!isMobile && text}
    </a>
  );
}
