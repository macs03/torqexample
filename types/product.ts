export type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  image?: string;
};

export type CartItem = {
  product: Product;
  quantity: number;
};

// Mock data: Bagels deliciosos para la tienda
export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Plain Bagel',
    price: 2.50,
    description: 'Our classic plain bagel, freshly baked with a golden crust and soft interior. Perfect for breakfast or any time of day.',
  },
  {
    id: '2',
    name: 'Everything Bagel',
    price: 3.00,
    description: 'A fan favorite! Topped with sesame seeds, poppy seeds, onion, garlic, and salt. Full of flavor and texture.',
  },
  {
    id: '3',
    name: 'Cinnamon Raisin Bagel',
    price: 3.25,
    description: 'Sweet and aromatic bagel with cinnamon swirled throughout and plump raisins. Great with cream cheese or butter.',
  },
  {
    id: '4',
    name: 'Sesame Bagel',
    price: 2.75,
    description: 'Traditional bagel topped with toasted sesame seeds for a nutty, savory flavor.',
  },
  {
    id: '5',
    name: 'Poppy Seed Bagel',
    price: 2.75,
    description: 'Classic bagel generously covered with tiny poppy seeds, adding a subtle crunch and flavor.',
  },
  {
    id: '6',
    name: 'Whole Wheat Bagel',
    price: 3.50,
    description: 'Healthy and hearty whole wheat bagel, perfect for those looking for a nutritious option without sacrificing taste.',
  },
  {
    id: '7',
    name: 'Blueberry Bagel',
    price: 3.50,
    description: 'Sweet and fruity bagel with real blueberries baked in. Delicious on its own or with a light spread.',
  },
  {
    id: '8',
    name: 'Onion Bagel',
    price: 3.00,
    description: 'Savory bagel with pieces of real onion throughout. Perfect for sandwiches and breakfast sandwiches.',
  },
];
