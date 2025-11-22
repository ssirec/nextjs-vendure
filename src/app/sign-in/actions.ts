'use server';

import {mutate} from '@/lib/vendure/api';
import {LoginMutation, LogoutMutation} from '@/lib/vendure/mutations';
import {removeAuthToken, setAuthToken} from '@/lib/auth';
import {redirect, unauthorized} from "next/navigation";
import {revalidatePath} from "next/cache";

export async function loginAction(formData: FormData) {
    const username = formData.get('username') as string;
    const password = formData.get('password') as string;

    const result = await mutate(LoginMutation, {
        username,
        password,
    });

    const loginResult = result.data.login;

    if (loginResult.__typename !== 'CurrentUser') {
        const isNotVerified = loginResult.__typename === 'NotVerifiedError';

        unauthorized();
    }


    // Store the token in a cookie if returned
    if (result.token) {
        await setAuthToken(result.token);
    }

    revalidatePath('/[locale]', 'layout')

    redirect('/');

}

export async function logoutAction() {
    await mutate(LogoutMutation);
    await removeAuthToken();

    redirect('/')
}
