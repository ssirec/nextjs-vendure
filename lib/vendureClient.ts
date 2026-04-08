import { vendureLanguageMap } from './vendureLocale'

export function createVendureClient(locale: string) {
  const languageCode = vendureLanguageMap[locale as keyof typeof vendureLanguageMap] || 'en'

  return new GraphQLClient(process.env.NEXT_PUBLIC_VENDURE_API_URL!, {
    headers: {
      'Content-Type': 'application/json',
      'vendure-language-code': languageCode,
    },
  })
}
