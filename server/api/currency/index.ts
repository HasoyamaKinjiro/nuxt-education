import axios from 'axios';

import type { ProductI } from '@/types/types';

interface EventHandlerRequest {}

export default defineEventHandler<EventHandlerRequest, Promise<ProductI[]>>(async function () {
    try {
        const response = await axios.get('https://fakestoreapi.com/products');
        const data = response.data;

        if (!data) {
            new Error('Failed to fetch products');
        }

        return data as ProductI[];
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
});
