import {Cart} from "@/app/cart/cart";
import {Suspense} from "react";

export default function CartPage() {
    return (
        <div className="container mx-auto px-4 py-20">
            <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

            <Suspense>
                <Cart/>
            </Suspense>
        </div>
    );
}
