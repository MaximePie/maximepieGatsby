import React from "react";
import {cost} from "../../data/pricings";

export default function PricingCard({pricing}) {
  const {name, description, length, features } = pricing;

  return (
    <div className="PricingCard">
      <div className="PricingCard__details">
        <h3 className="PricingCard__name">{name}</h3>
        <p className="PricingCard__description">
          {description}
        </p>
        <p className="PricingCard__length">
          {length}h
        </p>
        <p className="PricingCard__cost">
          {cost.base}
          +
          {cost.additionnalRecipientValue}€ par personne et par heure
        </p>
      </div>
      <div className="PricingCard__features">
        <p className="PricingCard__feature">
          Acquisition des bases {icon(features.basics)}
        </p>
        <p className="PricingCard__feature">
          Pratique par projets {icon(features.project)}
        </p>
        <p className="PricingCard__feature">
          Suivi personnalisé {icon(features.watching)}
        </p>
        <p className="PricingCard__feature">
          Démarche qualité {icon(features.quality)}
        </p>
      </div>
    </div>
  )

  /**
   * Generates an icon for the given value. Cross, of check mark depending on the parameter
   */
  function icon(isCheck) {
    return isCheck ? <i className="fas fa-check-circle"/> : <i className="fas fa-times-circle"/>;
  }
}
