import { getActiveCustomer } from '@/lib/vendure/actions';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChangePasswordForm } from './change-password-form';

export default async function ProfilePage() {
    const customer = await getActiveCustomer();

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold">Profile</h1>
                <p className="text-muted-foreground mt-2">
                    Manage your account information
                </p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Account Information</CardTitle>
                    <CardDescription>
                        Your personal details
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div>
                        <p className="text-sm font-medium">Email</p>
                        <p className="text-sm text-muted-foreground">{customer?.emailAddress}</p>
                    </div>
                    <div>
                        <p className="text-sm font-medium">Name</p>
                        <p className="text-sm text-muted-foreground">
                            {customer?.firstName} {customer?.lastName}
                        </p>
                    </div>
                </CardContent>
            </Card>

            <ChangePasswordForm />
        </div>
    );
}
