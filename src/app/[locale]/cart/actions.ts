'use server';

import {mutate} from '@/lib/vendure/api';
import {
    RemoveFromCartMutation,
    AdjustCartItemMutation,
    ApplyPromotionCodeMutation,
    RemovePromotionCodeMutation
} from '@/lib/vendure/mutations';
import {getActiveCurrencyCode} from '@/lib/currency-server';
import {updateTag} from 'next/cache';

export async function removeFromCart(lineId: string) {
    const currencyCode = await getActiveCurrencyCode();
    const result = await mutate(RemoveFromCartMutation, {lineId}, {useAuthToken: true, currencyCode});
    if (!result) return { error: 'Service unavailable' };
    updateTag('cart');
}

export async function adjustQuantity(lineId: string, quantity: number) {
    const currencyCode = await getActiveCurrencyCode();
    const result = await mutate(AdjustCartItemMutation, {lineId, quantity}, {useAuthToken: true, currencyCode});
    if (!result) return { error: 'Service unavailable' };
    updateTag('cart');
}

export async function applyPromotionCode(formData: FormData) {
    const code = formData.get('code') as string;
    if (!code) return;

    const currencyCode = await getActiveCurrencyCode();
    const result = await mutate(ApplyPromotionCodeMutation, {couponCode: code}, {useAuthToken: true, currencyCode});
    if (!result) return { error: 'Service unavailable' };
    updateTag('cart');
}

export async function removePromotionCode(formData: FormData) {
    const code = formData.get('code') as string;
    if (!code) return;

    const currencyCode = await getActiveCurrencyCode();
    const result = await mutate(RemovePromotionCodeMutation, {couponCode: code}, {useAuthToken: true, currencyCode});
    if (!result) return { error: 'Service unavailable' };
    updateTag('cart');
}
