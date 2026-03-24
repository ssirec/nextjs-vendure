'use client';

import {useLocale} from 'next-intl';

interface PriceProps {
    value: number;
    currencyCode?: string;
}

export function Price({value, currencyCode = 'USD'}: PriceProps) {
    const locale = useLocale();
    const intlLocale = locale === 'de' ? 'de-DE' : 'en-US';
    return (
        <>
            {new Intl.NumberFormat(intlLocale, {
                style: 'currency',
                currency: currencyCode,
            }).format(value / 100)}
        </>
    );
}
