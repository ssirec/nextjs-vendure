import {query} from '@/lib/vendure/api';
import {GetTopCollectionsQuery} from '@/lib/vendure/queries';

export const getTopCollections = async () => {
    const result = await query(GetTopCollectionsQuery);
    return result.data.collections.items;
}