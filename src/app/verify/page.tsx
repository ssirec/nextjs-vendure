'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle, XCircle, Loader2 } from 'lucide-react';
import { verifyAccountAction } from './actions';

export default function VerifyPage() {
    const searchParams = useSearchParams();
    const token = searchParams.get('token');
    const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
    const [errorMessage, setErrorMessage] = useState<string>('');

    useEffect(() => {
        if (!token) {
            setStatus('error');
            setErrorMessage('No verification token provided');
            return;
        }

        const verifyAccount = async () => {
            try {
                const result = await verifyAccountAction(token);
                if (result?.error) {
                    setStatus('error');
                    setErrorMessage(result.error);
                } else {
                    setStatus('success');
                }
            } catch (error) {
                setStatus('error');
                setErrorMessage('An unexpected error occurred');
            }
        };

        verifyAccount();
    }, [token]);

    return (
        <div className="flex min-h-screen items-center justify-center px-4">
            <div className="w-full max-w-md space-y-6">
                <Card>
                    <CardContent className="pt-6 space-y-4">
                        {status === 'loading' && (
                            <>
                                <div className="flex justify-center">
                                    <Loader2 className="h-16 w-16 text-primary animate-spin" />
                                </div>
                                <div className="space-y-2 text-center">
                                    <h1 className="text-2xl font-bold">Verifying Your Account</h1>
                                    <p className="text-muted-foreground">
                                        Please wait while we verify your email address...
                                    </p>
                                </div>
                            </>
                        )}

                        {status === 'success' && (
                            <>
                                <div className="flex justify-center">
                                    <CheckCircle className="h-16 w-16 text-green-600" />
                                </div>
                                <div className="space-y-2 text-center">
                                    <h1 className="text-2xl font-bold">Account Verified!</h1>
                                    <p className="text-muted-foreground">
                                        Your email has been successfully verified. You can now sign in to your account.
                                    </p>
                                </div>
                                <Link href="/sign-in" className="block">
                                    <Button className="w-full">
                                        Sign In
                                    </Button>
                                </Link>
                            </>
                        )}

                        {status === 'error' && (
                            <>
                                <div className="flex justify-center">
                                    <XCircle className="h-16 w-16 text-destructive" />
                                </div>
                                <div className="space-y-2 text-center">
                                    <h1 className="text-2xl font-bold">Verification Failed</h1>
                                    <p className="text-muted-foreground">
                                        {errorMessage || 'Unable to verify your account. The verification link may have expired.'}
                                    </p>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <Link href="/register" className="block">
                                        <Button variant="outline" className="w-full">
                                            Create New Account
                                        </Button>
                                    </Link>
                                    <Link href="/sign-in" className="block">
                                        <Button variant="ghost" className="w-full">
                                            Back to Sign In
                                        </Button>
                                    </Link>
                                </div>
                            </>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
