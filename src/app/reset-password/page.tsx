import { ResetPasswordForm } from './reset-password-form';

interface ResetPasswordPageProps {
    searchParams: Promise<{ token?: string }>;
}

export default async function ResetPasswordPage({ searchParams }: ResetPasswordPageProps) {
    const params = await searchParams;
    const token = params.token || null;

    return (
        <div className="container mx-auto px-4 py-16">
            <div className="max-w-md mx-auto">
                <ResetPasswordForm token={token} />
            </div>
        </div>
    );
}