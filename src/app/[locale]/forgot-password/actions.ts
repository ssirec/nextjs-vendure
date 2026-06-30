'use server';

import {mutate} from '@/lib/vendure/api';
import {RequestPasswordResetMutation} from '@/lib/vendure/mutations';
import {getLocale} from 'next-intl/server';
import {getTranslationsSafe} from '@/i18n/server';

export async function requestPasswordResetAction(prevState: { error?: string; success?: boolean } | undefined, formData: FormData) {
    const locale = await getLocale();
    const t = await getTranslationsSafe({locale, namespace: 'Errors'});
    const emailAddress = formData.get('emailAddress') as string;

    if (!emailAddress) {
        return {error: t('emailRequired')};
    }

    try {
        const result = await mutate(RequestPasswordResetMutation, {
            emailAddress,
        });

        if (!result) {
            return {error: t('unexpectedError')};
        }

        const resetResult = result.data.requestPasswordReset;

        if (resetResult?.__typename !== 'Success') {
            return {error: resetResult?.message || t('failedPasswordReset')};
        }

        return {success: true};
    } catch {
        return {error: t('unexpectedError')};
    }
}
