import { ForgotPasswordForm } from './forgot-password-form';

export default async function ForgotPasswordPage() {
    return (
        <div className="container mx-auto px-4 py-16">
            <div className="max-w-md mx-auto">
                <ForgotPasswordForm />
            </div>
        </div>
    );
}
