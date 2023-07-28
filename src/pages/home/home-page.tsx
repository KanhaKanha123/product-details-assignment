import { FC, ReactElement } from "react";
import { ProductsList } from "../../components";

/**
 * This heigher level component is responsible render the products details lists on router request.
 * @returns ReactElement
 */
export const Home: FC = (): ReactElement => {

    return <main area-label="main section to display all the product detail cards">
        <ProductsList />
    </main>
};