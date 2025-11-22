'use client';

import { useActionState } from 'react';
import { requestPasswordResetAction } from './actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export function ForgotPasswordForm() {
    const [state, formAction, isPending] = useActionState(requestPasswordResetAction, undefined);

    if (state?.success) {
        return (
            <Card>
                <CardHeader>
                    <CardTitle>Check your email</CardTitle>
                    <CardDescription>
                        If an account exists with that email, we&apos;ve sent password reset instructions.
                    </CardDescription>
                </CardHeader>
                <CardFooter>
                    <Link href="/sign-in">
                        <Button variant="outline" className="w-full">
                            Back to Sign In
                        </Button>
                    </Link>
                </CardFooter>
            </Card>
        );
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Forgot password?</CardTitle>
                <CardDescription>
                    Enter your email address and we&apos;ll send you a link to reset your password.
                </CardDescription>
            </CardHeader>
            <form action={formAction}>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="emailAddress">Email</Label>
                        <Input
                            id="emailAddress"
                            name="emailAddress"
                            type="email"
                            placeholder="you@example.com"
                            required
                            disabled={isPending}
                        />
                    </div>
                    {state?.error && (
                        <div className="text-sm text-destructive">
                            {state.error}
                        </div>
                    )}
                </CardContent>
                <CardFooter className="flex flex-col space-y-4">
                    <Button type="submit" className="w-full" disabled={isPending}>
                        {isPending ? 'Sending...' : 'Send reset link'}
                    </Button>
                    <Link
                        href="/sign-in"
                        className="text-sm text-center text-muted-foreground hover:text-primary"
                    >
                        Back to Sign In
                    </Link>
                </CardFooter>
            </form>
        </Card>
    );
}
