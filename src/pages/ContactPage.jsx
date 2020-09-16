import React from 'react';
import Layout from "../components/layout";
import SEO from "../components/seo";

export default function ContactPage(props) {
  return (
    <Layout>
      <SEO title="Contact"/>
      <div className="ContactPage">
      <h1>Me contacter</h1>
        <div className="ContactPage__container">
          <h2>
            Travaillons ensemble !
          </h2>
          <p>
            Vous aimeriez me faire développer votre projet ? Voici comment faire :
          </p>
          <p>
            Assurez-vous que nos besoins correspondent en consultant mon profil
          </p>
          <p>
            Envoyez-moi une demande de devis à l'adresse avec tous les détails que vous voulez apporter
            <span className="ContactPage__mail">
            maxime.pie.mail@gmail.com
          </span>
          </p>

          <p>
            Vous recevrez un devis accompagné d'une proposition de rendez-vous, et le projet pourra alors débuter
            N'oubliez pas d'inclure dans votre demande des détails concernant le projet permettant de savoir :
          </p>

          <ul>
            <li>
              à qui le projet est destiné
            </li>
            <li>
              à quoi ressemblera le produit final
            </li>
            <li>
              à quelle échelle il va se déployer
            </li>
            <li>
              La date idéale de livraison de votre projet
            </li>
            <li>
              Vos disponibilités de suivi de projet. (Tous les mois, toutes les semaines, tous les jours, ...)
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}
