import type {Metadata} from 'next';
import {getLocaleFromParams, getTranslationsSafe} from '@/i18n/server';
import { ForgotPasswordForm } from './forgot-password-form';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}): Promise<Metadata> {
    const locale = await getLocaleFromParams(params);
    const t = await getTranslationsSafe({locale, namespace: 'Auth'});
    return {
        title: t('forgotPasswordPageTitle'),
    };
}

export default async function ForgotPasswordPage({params}: {params: Promise<{locale: string}>}) {
    return (
        <div className="min-h-[calc(100vh-200px)] flex items-center justify-center px-4">
            <div className="w-full max-w-md">
                <ForgotPasswordForm />
            </div>
        </div>
    );
}
