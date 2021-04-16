import React from 'react';
import Image from "./image";
import CourseLength from "./CourseLength.jsx"

export default function Course({ course }) {
  const {imageName, title, length, description, link, isAvailable } = course;
  return (
    <div className="Course">
      {!isAvailable && (
        <div className="Course--isUnavailable">
          <p className="Course--isUnavailable__text">
            Ce cours n'est pas disponible pour le moment. Revenez plus tard !
          </p>
        </div>
      )}
      <div className="Course__image">
        <Image imageName={imageName}/>
      </div>
      <div className="Course__body">
        <h3 className="Course__title">{title}</h3>
        <CourseLength details={length}/>
        <p className="Course__description">
          {description}
        </p>
      </div>
      <div className="Course__footer">
        <a className="Course__action" href={link}>
          {isAvailable ? "Découvrir" : "Arrive bientôt"}
        </a>
      </div>
    </div>
  );
}
