export const cost = {
  base: 45,
  additionnalRecipientValue: 1,
};

export const pricingLists = [
  {
    name: "Basic",
    description: "Formation très compressée, idéale pour découvrir React rapidement",
    length: 35,
    features: {
      basics: true,
      project: false,
      watching: false,
      quality: false,
    }
  },
  {
    name: "Pro",
    description: "Formation plus complète, idéale pour former des personnes opérationnelles",
    length: 70,
    features: {
      basics: true,
      project: true,
      watching: false,
      quality: false,
    }
  },
  {
    name: "Expert",
    description: "Formation très complète, idéale pour former de vrai.e.s expert.e.s !",
    length: 105,
    features: {
      basics: true,
      project: true,
      watching: true,
      quality: true,
    }
  }
];
