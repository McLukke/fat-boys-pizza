const signaturePizzas = [
  {
    title: 'Vegetarian',
    ingredients: [
      'Green Pepper',
      'Red Onion',
      'Diced Tomato',
      'Mushroom',
    ],
  },
  {
    title: 'Veggie Junky',
    ingredients: [
      'Broccoli',
      'Sun Dried Tomato',
      'Zucchini',
      'Feta',
    ],
  },
  {
    title: 'Thai Veggie',
    ingredients: [
      'Thai Sauce Base',
      'Broccoli',
      'Mushroom',
      'Feta',
    ],
  },
  {
    title: 'Meat Lovers',
    ingredients: [
      'Pepperoni',
      'Ham',
      'Bacon Strips',
      'Ground Beef',
    ],
  },
  {
    title: 'Canadian',
    ingredients: [
      'Pepperoni',
      'Mushroom',
      'Bacon Strips',
    ],
  },
  {
    title: 'Hawaiian',
    ingredients: [
      'Ham',
      'Pineapple',
    ],
  },
  {
    title: 'Spicy Hawaiian',
    ingredients: [
      'Ham',
      'Pineapple',
      'Hot Pepper',
      'Roasted Red Pepper',
    ],
  },
];

const signaturePricing = [
  {
    title: 'S - 6',
    startingAt: '$9.99',
    second: '$7.99',
  },
  {
    title: 'M - 6',
    startingAt: '$12.49',
    second: '$9.99',
  },
  {
    title: 'L - 8',
    startingAt: '$14.49',
    second: '$11.25',
  },
  {
    title: 'XL - 10',
    startingAt: '$18.99',
    second: '$15.49',
  },
  {
    title: 'P - 24',
    startingAt: '$23.49',
    second: '',
  },
];

const premiumSignaturePizzas = [
  {
    title: 'Fat Boys Deluxe',
    ingredients: [
      'Pepperoni',
      'Ground Beef',
      'Bacon Strips',
      'Mushroom',
      'Green Pepper',
      'Diced Tomato',
    ],
  },
  {
    title: 'Spicy Fat Boys Deluxe',
    ingredients: [
      'Spicy Italian Sausage',
      'Hot Peppers',
      'Mushroom',
      'Roasted Red Pepper',
      'Tomato',
      'Red Onion',
    ],
  },
  {
    title: 'Fat Boys on Diet',
    ingredients: [
      'Spinach',
      'Broccoli',
      'Black Olive',
      'Zucchini',
      'Roasted Red Pepper',
    ],
  },
  {
    title: 'Veggie Island',
    ingredients: [
      'Mushroom',
      'Roasted Red Pepper',
      'Diced Tomato',
      'Spinach',
      'Feta',
    ],
  },
  {
    title: 'Mediterranean',
    ingredients: [
      'Green Pepper',
      'Red Onion',
      'Black Olive',
      'Sun Dried Tomato',
      'Feta',
      'Oregano',
    ],
  },
  {
    title: 'Buffalo',
    ingredients: [
      'Chicken or Steak',
      'Roasted Red Pepper',
      'Red Onion',
    ],
  },
  {
    title: 'Chicken Thai',
    ingredients: [
      'Thai Sauce Base',
      'Grilled Chicken',
      'Broccoli',
      'Mushroom',
      'Feta',
    ],
  },
];

const increasePrice = (priceString) => {
  if (!priceString) {
    return '';
  }

  const startingPrice = priceString.replace('$', '');
  const newPriceNumeric = Number(startingPrice) + 1;
  const newPrice = `$${newPriceNumeric.toFixed(2)}`;

  return newPrice;
};

const premiumSignaturePricing = signaturePricing.map(
  pricingBlock => ({
    ...pricingBlock,
    startingAt: increasePrice(pricingBlock.startingAt),
    second: increasePrice(pricingBlock.second),
  }),
);

export default {
  signaturePizzas: {
    title: 'Signature Pizzas',
    content: signaturePizzas,
    pricing: signaturePricing,
  },
  premiumSignaturePizzas: {
    title: 'Premium Signatures',
    content: premiumSignaturePizzas,
    pricing: premiumSignaturePricing,
  },
};
