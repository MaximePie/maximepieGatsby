import React from 'react';
import Layout from "../components/layout";
import SEO from "../components/seo";
import {pricingLists} from "../data/pricings.js";
import PricingCard from "../components/molecules/PricingCard";

export default function Pricing() {

  return (
    <Layout>
      <SEO title="Facturation" />
      <div className="Pricing">
        <h1 className="Pricing__header">Facturation</h1>
        <div className="Pricing__list">
          {pricingLists.map(price => (
            <PricingCard pricing={price}/>
          ))}
        </div>
      </div>
    </Layout>
  );
}
