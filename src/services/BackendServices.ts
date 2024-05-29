import axios from 'axios';
import mockDeals from '../mockResponse/mockDeals';
import mockProductCategories from '../mockResponse/mockProductCateogories';
import { Deal, ProductCategory, SearchResponse } from '../types';
import SECRET from './../../secret';
import mockSearchData from '../mockResponse/mockSearchData';

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

        return Promise.resolve(mockProductCategories);
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

        return Promise.resolve(mockDeals);
    } catch (error) {
        console.error('Failed to get deals', error);
    }

    return null;
}

export async function GetProducts(): Promise<SearchResponse | null> {
    const options = {
        method: 'GET',
        url: 'https://real-time-amazon-data.p.rapidapi.com/search',
        params: {
            query: 'Phone',
            page: '1',
            country: 'US',
            sort_by: 'RELEVANCE',
            product_condition: 'ALL',
        },
        headers: {
            'x-rapidapi-key':
                '6d5d44569emsha10d70b2d269890p1f54adjsn37387e9c6bdb',
            'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com',
        },
    };

    try {
        // const response = await axios.request(options);
        // return response.data.data;

        return Promise.resolve(mockSearchData);
    } catch (error) {
        console.error('Failed to get Products', error);
    }
    return null;
}
