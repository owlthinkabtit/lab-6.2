export declare const fetchProductCatalog: () => Promise<{
    id: number;
    name: string;
    price: number;
}[]>;
export declare const fetchProductReviews: (productId: number) => Promise<{
    id: number;
    review: string;
}[]>;
export declare const fetchSalesReport: () => Promise<{
    productId: number;
    totalSales: number;
    unitsSold: number;
    averagePrice: number;
}[]>;
//# sourceMappingURL=apiSimulator.d.ts.map