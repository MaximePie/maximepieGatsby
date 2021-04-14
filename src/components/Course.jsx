import React from 'react';
import Image from "./image";

export default function Course({ course }) {
  const {imageName, title, length, description, link} = course;
  return (
    <div className="Course">
      <div className="Course__image">
        <Image imageName={imageName}/>
      </div>
      <div className="Course__body">
        <h3 className="Course__title">{title}</h3>
        <span><i className="fas fa-clock"/> {length}h</span>
        <p className="Course__description">
          {description}
        </p>
      </div>
      <div className="Course__footer">
        <a className="Course__action" href={link}>
          Découvrir
        </a>
      </div>
    </div>
  );
}
