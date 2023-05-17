export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
    count: number;
    date: Date;
    thumbnail: string;
    quantity?: number;
}
