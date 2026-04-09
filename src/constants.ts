import { Product } from './types';
import Mojo1 from './img/Mojo1.jpg';
import Mojo2 from './img/Mojo2.png';
import Mojo3 from './img/Mojo3.jpeg';
import Mojo4 from './img/Mojo4.mp4';
import Gordi1 from './img/Gordi1.jpeg';
import Gordi2 from './img/Gord2.png';
import Gordi3 from './img/Gordi3.jpeg';
import Gordi4 from './img/Gordi4.mp4';
import Marshall1 from './img/Marshall1.jpeg';
import Marshall2 from './img/Marshall2.jpeg';
import Marshall3 from './img/Marshall3.png';
import Marshall4 from './img/Marshall4.mp4';
import Ron1 from './img/Ron1.jpeg';
import Ron2 from './img/Ron2.jpeg';
import Ron3 from './img/Ron3.png';
import Ron4 from './img/Ron4.mp4';
import Kobe1 from './img/Kobe1.jpeg';
import Kobe2 from './img/Kobe2.jpeg';
import Kobe3 from './img/Kobe3.png';
import Kobe4 from './img/Kobe4.mp4';

export const PRODUCTS: Product[] = [
  {
    id: 'gordi',
    name: 'Gordi',
    price: 1,
    description: 'Amor eterno e imborrable.',
    badge: 'Artesanal',
    badgeType: 'hand-painted',
    image: Gordi1,
    gallery: [
      Gordi2,
      Gordi3,
      Gordi4
    ],
    isCatApproved: true
  },
  {
    id: 'marshall',
    name: 'Marshall',
    price: 1,
    description: 'Mente brillante, espíritu único.',
    badge: 'Edición limitada',
    badgeType: 'limited-edition',
    image: Marshall1,
    gallery: [
      Marshall2,
      Marshall3,
      Marshall4
    ],
    isCatApproved: true
  },
  {
    id: 'ron',
    name: 'Ron',
    price: 1,
    description: 'Ágil en todo universo.',
    badge: 'Edición limitada',
    badgeType: 'limited-edition',
    image: Ron1,
    gallery: [
      Ron2,
      Ron3,
      Ron4
    ],
    isCatApproved: true
  },
  {
    id: 'mojo',
    name: 'Mojo',
    price: 1,
    description: 'Siempre en la memoria familiar.',
    badge: 'Artesanal',
    badgeType: 'hand-painted',
    image: Mojo1,
    gallery: [
      Mojo2,
      Mojo3,
      Mojo4
    ],
    isCatApproved: true
  },
  {
    id: 'kobe',
    name: 'Kobe',
    price: 1,
    description: 'El emperador del hogar.',
    badge: 'Edición limitada',
    badgeType: 'limited-edition',
    image: Kobe1,
    gallery: [
      Kobe2,
      Kobe3,
      Kobe4
    ],
    isCatApproved: true
  }
];
