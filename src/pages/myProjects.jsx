import React from 'react';
import flashcardstormImage from '../images/flashcarstorm.png';
import educhubImage from '../images/educhub.jpg';
import sandboxSimgameImage from '../images/sandbox_simgame.png';
import clientProjectImage from '../images/clientsProject.jpg';

import Project from '../components/Project';
import Layout from "../components/layout";
import SEO from "../components/seo";

export default function MyProjects() {
  return (
    <Layout>
      <SEO title="Projets" />
      <h1>Mes projets</h1>
      <div className="ProjectsList">
        <Project
          title="Flashcardstorm"
          description={[
            "Application de révision par répétition espacée",
            "Méthode des flashcards",
            "Sans effort et varié, idéal pour la mémorisation à long terme",
            "Connaissance partagée entre les utilisateurs",
            "Amélioration continue",
          ]}
          applicationLink="https://flashcardstorm.herokuapp.com/"
          badge="La favorite"
          githubLink="https://github.com/MaximePie/Flashcardstorm"
          imagePath={flashcardstormImage}
        />
        <Project
          title="EducHub GIPSI"
          description={[
            "Freins à l'éducation",
            "Apprivoiser et comprendre l'ergonomie éducative",
            "Découvrir les bonnes pratiques pédagogiques",
            "Libérer son cerveau"
          ]}
          applicationLink="http://educhub.herokuapp.com/"
          badge="La révolutionnaire"
          githubLink="https://github.com/MaximePie/GIPSI"
          imagePath={educhubImage}
        />
        <Project
          title="Sandbox Simgame"
          description={[
            "TP interactif d'apprentissage en autonomie",
            "HTML, CSS, Javascript, Symfony, SQL, GIT",
            "Apprentissage en pente douce",
            "Suivi individuels avec relecture de code",
          ]}
          applicationLink=""
          badge="L'inspirante"
          githubLink="https://gitlab.com/Chatmalow/sandbox_simgame"
          imagePath={sandboxSimgameImage}
        />
        <Project
          title="Votre projet ?"
          description={[
            "Vous cherchez à faire développer un projet ?",
            "Site web ou application sur mesure",
            "Adapté au responsive design sur tous les formats",
            "Tarif complètement adapté au besoin",
            "Demandez un devis gratuitement",
          ]}
          badge="La mystérieuse"
          imagePath={clientProjectImage}
          isPreview
        />
      </div>
    </Layout>
  );
}
