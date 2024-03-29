export class Product {
    id: number;
    title: string;
    description: string;
    images: string[];
    price: number;
    constructor(id: number, title: string, description: string, images: string[], price: number) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.images = images;
        this.price = price;
    }
}