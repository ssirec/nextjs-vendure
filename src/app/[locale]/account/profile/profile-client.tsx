'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import type { ResultOf } from '@/graphql';
import type { GetActiveCustomerQuery } from '@/lib/vendure/queries';

type ActiveCustomer = NonNullable<ResultOf<typeof GetActiveCustomerQuery>['activeCustomer']>;

interface ProfileClientProps {
  customer: ActiveCustomer | null;
}

export function ProfileClient({ customer }: ProfileClientProps) {
  const t = useTranslations('Account');

  if (!customer) {
    return (
      <div className="text-sm text-muted-foreground">
        {t('noCustomer')}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="p-4 border rounded-md">
        <h2 className="text-lg font-medium">{t('personalInfo')}</h2>
        <div className="mt-2 text-sm text-muted-foreground">
          <p className="font-medium">{customer.firstName} {customer.lastName}</p>
          <p>{customer.emailAddress}</p>
          {customer.phoneNumber && <p>{customer.phoneNumber}</p>}
        </div>
        <div className="mt-4">
          <Link href="/account/profile/edit" className="text-sm font-medium hover:underline">
            {t('editProfile')}
          </Link>
        </div>
      </div>

      <div className="p-4 border rounded-md">
        <h3 className="text-lg font-medium">{t('addresses')}</h3>
        <div className="mt-2 text-sm text-muted-foreground">
          {customer.addresses && customer.addresses.length > 0 ? (
            customer.addresses.map((addr) => (
              <div key={addr.id} className="mb-3">
                <p className="font-medium">{addr.fullName}</p>
                <p>{addr.streetLine1}{addr.streetLine2 ? `, ${addr.streetLine2}` : ''}</p>
                <p>{addr.city}, {addr.province} {addr.postalCode}</p>
                <p>{addr.country}</p>
              </div>
            ))
          ) : (
            <p>{t('noAddresses')}</p>
          )}
        </div>
        <div className="mt-4">
          <Link href="/account/addresses" className="text-sm font-medium hover:underline">
            {t('manageAddresses')}
          </Link>
        </div>
      </div>
    </div>
  );
}
