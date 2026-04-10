import { query } from './api';
import { GetActiveCustomerQuery } from './queries';
import { getActiveChannelCached } from './cached';
import { cache } from "react";
import { readFragment } from "@/graphql";
import { ActiveCustomerFragment } from "@/lib/vendure/fragments";
import { getAuthToken } from "@/lib/auth";

export const getActiveCustomer = cache(async () => {
    const token = await getAuthToken();

    const result = await query(
        GetActiveCustomerQuery,
        undefined,
        { token }
    );

    // If no active customer, return null safely
    if (!result.data.activeCustomer) {
        return null;
    }

    return readFragment(ActiveCustomerFragment, result.data.activeCustomer);
});

export const getActiveChannel = getActiveChannelCached;
