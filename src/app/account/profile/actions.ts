'use server';

import {mutate} from '@/lib/vendure/api';
import {UpdateCustomerPasswordMutation} from '@/lib/vendure/mutations';

export async function updatePasswordAction(prevState: { error?: string; success?: boolean } | undefined, formData: FormData) {
    const currentPassword = formData.get('currentPassword') as string;
    const newPassword = formData.get('newPassword') as string;
    const confirmPassword = formData.get('confirmPassword') as string;

    if (!currentPassword || !newPassword || !confirmPassword) {
        return {error: 'All fields are required'};
    }

    if (newPassword !== confirmPassword) {
        return {error: 'New passwords do not match'};
    }

    if (currentPassword === newPassword) {
        return {error: 'New password must be different from current password'};
    }

    try {
        const result = await mutate(UpdateCustomerPasswordMutation, {
            currentPassword,
            newPassword,
        });

        const updateResult = result.data.updateCustomerPassword;

        if (updateResult.__typename !== 'Success') {
            return {error: updateResult.message};
        }

        return {success: true};
    } catch (error: unknown) {
        return {error: 'An unexpected error occurred. Please try again.'};
    }
}
