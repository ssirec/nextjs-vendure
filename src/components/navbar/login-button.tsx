'use client'

import {ComponentProps, use, useTransition} from "react";
import {logoutAction} from "@/app/sign-in/actions";
import {useAuth} from "@/contexts/auth-context";
import {useRouter} from "next/navigation";

export function LoginButton(props: ComponentProps<'button'>) {
    const [isPending, startTransition] = useTransition();
    const {activeCustomer: activeCustomerPromise} = useAuth();
    const activeCustomer = use(activeCustomerPromise);
    const router = useRouter();

    return (
        <button {...props} aria-disabled={isPending}
                onClick={() => {
                    if (activeCustomer?.id) {
                        startTransition(async () => {
                            await logoutAction()
                        })
                    } else {
                        router.push('/sign-in')
                    }
                }}>
            {activeCustomer?.id ? 'Sign out' : 'Sign in'}
        </button>
    )
}