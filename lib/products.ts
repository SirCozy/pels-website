export interface Product {
  id: string
  name: string
  description: string
  price: string
  image: string
}

export const products: Product[] = [
  {
    id: 'linen-wall-art',
    name: 'Textured Linen Wall Art',
    description: 'Soft, layered shapes for a calm and refined wall display.',
    price: '₦18,000',
    image: '/products/product-1.svg',
  },
  {
    id: 'minimal-shelf-trio',
    name: 'Minimal Shelf Trio',
    description: 'Elegant shelf decor pieces designed to balance modern living rooms.',
    price: 'Contact for price',
    image: '/products/product-2.svg',
  },
  {
    id: 'ceramic-vase-pair',
    name: 'Ceramic Vase Pair',
    description: 'Handcrafted vases with tactile glaze for warm interiors.',
    price: '₦12,500',
    image: '/products/product-3.svg',
  },
  {
    id: 'woven-texture-mat',
    name: 'Woven Texture Accent Mat',
    description: 'A rich accent piece that adds depth and comfort to any space.',
    price: 'Contact for price',
    image: '/products/product-4.svg',
  },
]
