import daily1 from 'assets/specials/daily1.jpg';
import daily2 from 'assets/specials/daily2.jpg';
import daily3 from 'assets/specials/daily3.jpg';
import daily4 from 'assets/specials/daily4.jpg';

import walkin1 from 'assets/specials/walk-in1.jpg';
import walkin2 from 'assets/specials/walk-in2.jpg';
import walkin3 from 'assets/specials/walk-in3.jpg';

import lunch1 from 'assets/specials/lunch1.jpg';
import lunch2 from 'assets/specials/lunch2.jpg';
import lunch3 from 'assets/specials/lunch3.jpg';
import lunch4 from 'assets/specials/lunch4.jpg';

const dailySpecials = [
  {
    displayName: '2 Medium Pizzas',
    description: '(6 Toppings total)',
    price: '$19.99',
    image: daily1,
  },
  {
    displayName: '1 Large Bacon Bonanza',
    description: '(Tripple Style Bacon: Bacon Strips, Bacon Crumble & Peameal Bacon)',
    price: '$14.79',
    image: daily2,
  },
  {
    displayName: '1 Large Pizza & Bread Sticks',
    description: '(3 Toppings)',
    price: '$13.99',
    image: daily3,
  },
  {
    displayName: 'Large Pizza & 2 Drinks',
    description: '(1 Topping)',
    price: '$10.99',
    image: daily4,
  },
];

const walkInSpecials = [
  {
    displayName: 'Any Salad with Water or Juice',
    description: '',
    price: '$5.00',
    image: walkin1,
  },
  {
    displayName: 'Medium Pepperoni Pizza',
    description: '',
    price: '$5.00',
    image: walkin2,
  },
  {
    displayName: 'Any slice, can of pop and chips',
    description: '',
    price: '$5.00',
    image: walkin3,
  },
];

const lunchSpecials = [
  {
    displayName: 'Veal or Meatball Sandwich & a Soft Drink',
    description: '',
    price: '$7.29',
    image: lunch1,
  },
  {
    displayName: '1/2lb Wings & 7 oz. Potato Wedges',
    description: '',
    price: '$7.99',
    image: lunch2,
  },
  {
    displayName: 'Garlic Cheese Bread & a Soft Drink',
    description: '',
    price: '$5.69',
    image: lunch3,
  },
  {
    displayName: 'Pepperoni Panzerotti & a Soft Drink',
    description: '',
    price: '$7.20',
    image: lunch4,
  },
];

export default [
  {
    title: 'Daily Specials',
    content: dailySpecials,
  },
  {
    title: 'Walk In Specials',
    content: walkInSpecials,
  },
  {
    title: 'Everyday Lunch Specials',
    content: lunchSpecials,
  },
];
