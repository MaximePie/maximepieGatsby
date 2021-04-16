import React from "react";
import { Link } from 'gatsby';

/**
 * This component displays the length of a Course, while managing all the possible length
 *
 */
export default function CourseLength({details}) {

  const lengths = Object.entries(details).map(length => length);

  return (
    <div className="CourseLength">
      <Link className="CourseLength__link" to="/pricing">
        <i className="fas fa-clock"/>
        {lengths.map(length => {
          const type = length[0];
          const value = length[1];
          return (
            <span className={`CourseLength__value CourseLength__value--${type}`}>
              {value}h
            </span>
          )
        })}
      </Link>
    </div>
  )
}
