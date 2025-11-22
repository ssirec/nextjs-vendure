/**
 * Format a price value in USD
 * @param price Price in cents (smallest currency unit)
 */
export function formatPrice(price: number): string {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(price / 100);
}
