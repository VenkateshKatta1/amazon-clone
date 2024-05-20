import mockDeals from '../mockResponse/mockDeals';
import mockProductCategories from '../mockResponse/mockProductCateogories';
import { Deal, ProductCategory } from '../types';
import SECRET from './../../secret';

export async function GetProductCategoryList(): Promise<
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

export async function GetDeals(): Promise<Deal[] | null> {
    const options = {
        method: 'GET',
        url: 'https://real-time-amazon-data.p.rapidapi.com/deals-v2',
        params: { country: 'US' },
        headers: {
            'X-RapidAPI-Key': SECRET.API_KEY,
            'X-RapidAPI-Host': 'real-time-amazon-data.p.rapidapi.com',
        },
    };

    try {
        // const response = await axios.request(options);
        // return response.data.data.deals;

        return mockDeals;
    } catch (error) {
        console.error('Failed to get deals', error);
    }

    return null;
}
