import { FC, ReactElement } from "react";
import { ProductDetails } from "../../components";

/**
 * This component is responsible render the product details page on router request.
 * @returns ReactElement
 */
export const ProductDetailsPage: FC = (): ReactElement => {

    return <main area-label='product details is here'>
        <ProductDetails />
    </main>
};