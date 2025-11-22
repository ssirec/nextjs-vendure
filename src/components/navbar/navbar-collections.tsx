import {getTopCollections} from '@/lib/collections';
import {NavigationLink} from "@/components/navbar/navbar-link";

export async function NavbarCollections() {
    "use cache";

    const collections = await getTopCollections();

    return (
        <>
            {collections.map((collection) => (
                <NavigationLink
                    key={collection.slug}
                    href={`/collection/${collection.slug}`}
                >
                    {collection.name}
                </NavigationLink>
            ))}
        </>
    );
}
