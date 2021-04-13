import React from 'react';

import Project from '../components/Project';
import Layout from "../components/layout";
import SEO from "../components/seo";
import { projects } from "../data/projects";

export default function MyProjects() {
  return (
    <Layout>
      <SEO title="Projets" />
      <div className="ProjectsList">
        <h1 className="ProjectsList__title">Mes projets</h1>
        <div>
          {projects.map(project => (
            <Project project={project}/>
          ))}
        </div>
      </div>
    </Layout>
  );
}
