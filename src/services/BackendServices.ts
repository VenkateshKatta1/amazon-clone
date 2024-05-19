import axios from 'axios';
import SECRET from './../../secret';
import { ProductCategories } from '../types';

export default async function ProductCategoryList(): Promise<
    ProductCategories[]
> {
    const options = {
        method: 'GET',
        url: 'https://real-time-amazon-data.p.rapidapi.com/product-category-list',
        params: { country: 'US' },
        headers: {
            'X-RapidAPI-Key': SECRET.API_KEY,
            'X-RapidAPI-Host': 'real-time-amazon-data.p.rapidapi.com',
        },
    };

    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error('Failed to get product category list', error);
    }

    return [];
}
