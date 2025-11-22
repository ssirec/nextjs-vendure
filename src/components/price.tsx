'use client';

interface PriceProps {
    value: number;
}

export function Price({value}: PriceProps) {
    return (
        <>
            {new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
            }).format(value / 100)}
        </>
    );
}
