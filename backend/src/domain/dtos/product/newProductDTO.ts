export interface newProductDTO {
    id?: number;
    name: string;
    description?: string;
    price: number;
    stock?: number;
    createdAt?: Date;
    updatedAt?: Date;
    command?: string;
}
