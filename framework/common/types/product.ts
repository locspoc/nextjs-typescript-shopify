export interface ProductImage {
	url: string;
	alt?: string;
}

// import { Product } from '../../common/types/products';

export interface Product {
	id: string;
	name: string;
	description: string;
	slug: string;
	path: string;
	images: ProductImage[];
}
