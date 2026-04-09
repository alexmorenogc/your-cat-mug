export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  badge: string;
  badgeType: 'hand-painted' | 'limited-edition';
  image: string;
  gallery: string[];
  isCatApproved: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}
