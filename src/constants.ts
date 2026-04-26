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
    description: 'Vive un vínculo incondicional con la Taza de la Gordi. Más que una taza de café, es un homenaje al amor eterno e imborrable. \n\n✨ Rasgos únicos:\n• Personalidad: Mimosa, cariñosa y luchadora).\n• Apariencia: Una gata con una mirada que derretía el corazón y una capacidad infinita para pedir caricias.\n• Habilidad especial: Tiene caídas espontáneas para que le acariciaras la tripa, ¡y es imposible resistirse!\n\n💖 Perfecta para: Quienes valoran la ternura y la resiliencia. Ideal para recordar a esa gata especial que te enseña a amar a los felinos.',
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
    description: 'Taza Marshall es la encarnación de la astucia y la elegancia atigrada. Con su aire de misterio, este gato inteligente, glotón y profundamente mimoso (¡jamás rechaza un abrazo ni un extra de comida!) ha llegado para conquistar tu cocina. \n\n✨ Rasgos únicos:\n• Personalidad: Inteligente, glotón y muy mimoso.\n• Apariencia: Atigrado oscuro, con ese toque de misterio que esconde su lado más travieso.\n• Frase clave: "Negroncio, pero genio" (perfecta para cuando pide su tercer plato del día).\n\n💖 Perfecta para: Amantes de los gatos con personalidad de sobra. Ideal para acompañar tu café mientras recuerdas cómo Marshall te roba el corazón (y el pavo).',
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
    description: 'La energía inagotable de un gato naranja llega a tu mesa con la Taza Ron. Inspirada en el rey del juego y los saltos acrobáticos. \n\n✨ Rasgos únicos:\n• Personalidad: Juguetón, ágil y un poco asustadizo (aunque eso solo lo hace más adorable).\n• Apariencia: Pelaje naranja vibrante, como un atardecer con patas.\n• Habilidades especiales: Saltos imposibles, persecuciones épicas y una pasión por los juguetes que no tiene fin.\n• Frase clave: "Ron: el gato que hace Matrix... pero se asusta con su propia sombra".\n\n💖 Perfecta para: Los que admiran la agilidad felina y el corazón juguetón. Ideal para acompañar tus mañanas con una sonrisa, recordando cómo Ron convierte tu salón en un plató de rodaje Hollywoodiense.',
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
    description: 'Taza en homenaje a la luz Mojo, un alma noble que dejó una huella imborrable. \n\n✨ Rasgos únicos:\n• Personalidad: Brillante, glotón y lleno de vida, un espíritu que nunca se apagó.\n• Apariencia: Un gato con una mirada que iluminaba cualquier habitación.\n• Legado: Aunque ya no esté físicamente, su esencia sigue viva en cada risa, en cada recuerdo y en el amor que nos dejó.\n• Frase clave: "Mojo: tu luz sigue guiándonos, tu mirada sigue grabada en nuestro corazón".\n\n💖 Perfecta para: Mantener vivo el recuerdo de ese ser especial que, aunque se fue demasiado pronto, nunca dejará de ser parte de vuestra familia.',
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
    description: 'Descubre la valentía en su máxima expresión con la Taza Kobe. Inspirada en el "emperador de la casa". \n\n✨ Rasgos únicos:\n• Personalidad: Fuerte, juguetón y lleno de amor, un líder nato que no deja que nada lo detenga.\n• Apariencia: La elegancia de un emperador, con una mirada que dice: "Este es mi reino, y aquí todos sois mis invitados".\n• Superpoder: Convertir cualquier dificultad en una razón para vivir.\n• Frase clave: "¡Daniel! Deja que Kobesin sea el rey que nos enseña que la verdadera fuerza está en el corazón".\n\n💖 Perfecta para: Celebrar la vida y el cariño desde los límites. Ideal para esos momentos en los que necesitas recordar que, en el amor, cada uno tiene su manera de amar.',
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
