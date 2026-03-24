'use server';

import {setCurrencyCookie} from '@/lib/currency';
import {updateTag} from 'next/cache';

export async function switchCurrency(currencyCode: string) {
    await setCurrencyCookie(currencyCode);

    updateTag('products');
    updateTag('featured');
    updateTag('collection');
    updateTag('cart');
}
