export type Product = {
  id: string;
  price: number;
  label: string;
};

export type ShoppingCartItem = {
  productId: string;
  quantity: number;
};

export const ALL_PRODUCTS: Product[] = [
  {
    id: "bread-sku-id",
    price: 15,
    label: "Bread"
  },
  {
    id: "eggs-sku-id",
    price: 20,
    label: "Eggs"
  },
  {
    id: "milk-sku-id",
    price: 35,
    label: "Milk"
  },
  {
    id: "cheese-sku-id",
    price: 45,
    label: "Cheese"
  }
];

export const PRODUCTS_MAP = ALL_PRODUCTS.reduce(
  (acc: { [key: string]: Product }, product) => {
    acc[product.id] = product;
    return acc;
  },
  {}
);
