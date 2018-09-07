export const wingSauces = [
  'BBQ',
  'Spicy BBQ',
  'Mild',
  'Hot',
  'Suicide',
  'Honey Garlic',
  'Sweet Chilli Thai',
];

const wingsMenu = [
  {
    name: 'Baked Chicken Wings',
    description: `(Tossed or Sauce on Side) ${wingSauces.join(', ')}`,
    price: '$9.99/lb',
  },
];

const panzoMenu = [
  {
    name: 'Build Your Own - 4 Toppings',
    description: '',
    price: '$6.75',
  },
];

const pastaMenu = [
  {
    name: 'Spaghetti and Meatballs',
    description: '',
    price: '$6.99',
  },
  {
    name: 'Spaghetti with Meat Sauce',
    description: '',
    price: '$6.99',
  },
  {
    name: 'Spaghetti with Pepperoni',
    description: '',
    price: '$6.99',
  },
  {
    name: 'Lasagna',
    description: '',
    price: '$7.99',
  },
];

const saladsMenu = [
  {
    name: 'Greek Salad',
    description: '',
    price: '$5.99',
  },
  {
    name: 'Caesar Salad',
    description: '',
    price: '$5.99',
  },
  {
    name: 'Garden Salad',
    description: '',
    price: '$5.49',
  },
  {
    name: 'Potato Salad',
    description: '',
    price: '$1.99/8 oz',
  },
  {
    name: 'Macaroni Salad',
    description: '',
    price: '$1.99/8 oz',
  },
  {
    name: 'Coleslaw',
    description: '',
    price: '$1.99/8 oz',
  },
];

const sandwichMenu = [
  {
    name: 'Chicken Caesar',
    description: '',
    price: '$6.29',
  },
  {
    name: 'Greek Wrap',
    description: '',
    price: '$6.29',
  },
  {
    name: 'Meatball Sandwich',
    description: 'add Cheese $1.00',
    price: '$5.89',
  },
  {
    name: 'Veal Cutlet Sandwich',
    description: 'add Cheese $1.00',
    price: '$6.89',
  },
];

const sidesMenu = [
  {
    name: 'Garlic Cheese Bread',
    description: 'comes with side Marinara',
    price: '$4.99',
  },
  {
    name: 'Garlic Sticks',
    description: 'comes with side Marinara',
    price: '$3.99',
  },
  {
    name: 'Potato Wedges',
    description: '+Opt Bacon Strip Bits, Cheddar, Mozzarella $1.00',
    price: '$3.99',
  },
];

export default [
  {
    title: 'Wings',
    content: wingsMenu,
  },
  {
    title: 'Panzerotti',
    content: panzoMenu,
  },
  {
    title: 'Homestyle Pasta',
    content: pastaMenu,
  },
  {
    title: 'Salads',
    content: saladsMenu,

  },
  {
    title: 'Sandwiches',
    content: sandwichMenu,
  },
  {
    title: 'Sides',
    content: sidesMenu,
  },
];
