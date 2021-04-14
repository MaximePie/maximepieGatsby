import React from 'react';
import { courses } from "../data/courses.js";
import Course from '../components/Course';
import Layout from "../components/layout";
import SEO from "../components/seo";

export default function MyCourses() {

  return (
    <Layout>
      <SEO title="Formations" />
      <div className="List">
        <h1 className="List__title">Mes formations</h1>
        <div className="List__articles">
          {courses.map(course => <Course course={course}/>)}
        </div>
      </div>
    </Layout>
  );
}
