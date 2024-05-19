import mockProductCategories from '../mockResponse/mockProductCateogories';
import { ProductCategory } from '../types';
import SECRET from './../../secret';

export default async function ProductCategoryList(): Promise<
    ProductCategory[] | null
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
        // const response = await axios.request(options);
        // return response.data.data;

        return mockProductCategories;
    } catch (error) {
        console.error('Failed to get product category list', error);
    }

    return null;
}
