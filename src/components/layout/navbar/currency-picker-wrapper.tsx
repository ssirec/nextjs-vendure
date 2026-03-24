import {getActiveChannel} from '@/lib/vendure/actions';
import {getActiveCurrencyCode} from '@/lib/currency-server';
import {CurrencyPicker} from './currency-picker';

export async function CurrencyPickerWrapper() {
    const channel = await getActiveChannel();
    const activeCurrency = await getActiveCurrencyCode();

    return (
        <CurrencyPicker
            availableCurrencyCodes={channel.availableCurrencyCodes}
            activeCurrencyCode={activeCurrency}
        />
    );
}
