export interface ListProductProps {
    itemID: number;
    name: string;
    code: string;
    image: string;
    listImage: any;
    price: number;
    description: string;
    technical?: any;
    warranty: number;
    special: number;
    status: number;
}

export interface {
    listProduct: ListProductProps[];
}
