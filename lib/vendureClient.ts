import { vendureLanguageMap, Locale } from './vendureLocale';
import { query } from '@/lib/vendure/api';
import { GetActiveChannelQuery } from '@/lib/vendure/queries';

export function createVendureClient(locale: Locale) {
  const languageCode = vendureLanguageMap[locale] || 'en';

  return {
    async getActiveChannel() {
      const result = await query(GetActiveChannelQuery, undefined, { languageCode });
      return result.data.activeChannel;
    },
  };
}
