'use client';

import {useSelectedLayoutSegment} from 'next/navigation';
import {ComponentProps} from 'react';
import Link from 'next/link';
import {cn} from "@/lib/utils";

export function NavigationLink({href, ...rest}: ComponentProps<typeof Link>) {
    const selectedLayoutSegment = useSelectedLayoutSegment();
    const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';
    const isActive = pathname === href;

    return (
        <Link
            aria-current={isActive ? 'page' : undefined}
            className={cn(
                'text-sm font-medium hover:text-primary transition-colors',
                isActive ? 'text-primary' : 'text-foreground hover:text-accent'
            )}
            href={href}
            {...rest}
        />
    );
}