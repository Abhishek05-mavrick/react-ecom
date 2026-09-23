import { products } from './mockData';

export function getProducts() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products), 300);
  });
}

export function saveOrder(order) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ ok: true, order }), 300);
  });
}
