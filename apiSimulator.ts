import { DataError, NetworkError } from "./errors.js";

export const fetchProductCatalog = (): Promise<{ id: number; name: string; price: number }[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.8) {
        resolve([
          { id: 1, name: "Laptop", price: 1200},
          { id: 2, name: "Headphones", price: 200},
        ]);
      } else {
        reject(new NetworkError("Failed..."));
      }
    }, 1000);
  });
}

export const fetchProductReviews = (productId: number) : Promise<{id: number, review: string }[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.8) {
        resolve([
          { id: 1, review: "it stinks!"},
          { id: 2, review: "I love it!"},
        ]);
      } else {
        reject(`Failed to fetch reviews for ${productId}`);
      }
    }, 1500);
  });
}

export const fetchSalesReport = () : Promise<{productId: number, totalSales: number, unitsSold: number, averagePrice: number}[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        resolve([
          {productId: 1, totalSales: 4, unitsSold: 4, averagePrice: 2},
          {productId: 2, totalSales: 8, unitsSold: 8, averagePrice: 4},
        ]);
      } else {
        reject(new DataError("Failed..."));
      }
    }, 1000);
  });
}