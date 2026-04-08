import { GraphQLClient } from 'graphql-request'
import { vendureLanguageMap, Locale } from './vendureLocale'

export function createVendureClient(locale: Locale) {
  const languageCode = vendureLanguageMap[locale] || 'en'

  return new GraphQLClient(process.env.NEXT_PUBLIC_VENDURE_API_URL!, {
    headers: {
      'Content-Type': 'application/json',
      'vendure-language-code': languageCode,
    },
  })
}
