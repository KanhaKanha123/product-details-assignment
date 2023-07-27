import { FC, ReactElement } from "react";
import { Card, HandleLoadingEmptyErrorState } from "../shared-components";
import {
    ProductsWrapper,
    Image,
    FooterWrapper,
    Header,
    ChipsContainer,
    BodyContainer,
    TitleTextWrapper,
    ProductImageContainer
} from "./style";

import { useNavigate } from 'react-router-dom';
import { ChipOptionsTypes, useFetchProductDetails } from "../../custom-hooks/use-fetch-product-details";

/**
 * This component is responsible to render all the products in cards with few details.
 * @returns ReactElement
 */
export const ProductsList: FC = (): ReactElement => {

    const { productList, isLoading, error } = useFetchProductDetails();

    console.log('productList', productList);

    return (
        <HandleLoadingEmptyErrorState data={productList} isLoading={isLoading} error={error}>
            <ProductsWrapper>
                {(productList || []).map(product => <Card
                    data-testid={`Card_${product.familyId}`}
                    aria-label="card containing the blog data"
                    key={product.familyId}
                    width="300px"
                    height="450px"
                    padding="15px"
                    backgroundcolor="#f4f4f4">
                    <Header>
                        <TitleTextWrapper aria-label="blog title">
                            {product.fmyEngName}
                        </TitleTextWrapper>
                    </Header>
                    <ChipsContainer aria-label="blog tags listed here">
                        Chips: {(product.chipOptions || []).map((option: ChipOptionsTypes, index: number) => <Card
                            key={index}
                            width="auto"
                            height="25px"
                            padding="5px"
                            backgroundcolor="#8fbaf0">
                            {option.fmyChipType}
                        </Card>)}
                    </ChipsContainer>
                    <BodyContainer aria-label="blog description is here">
                        <ProductImageContainer><Image src={`https:${product.modelList[0].thumbUrl}`} /></ProductImageContainer>
                    </BodyContainer>
                    <FooterWrapper aria-label="blog reactions count is here">
                        Available Count: {product.modelCount}
                    </FooterWrapper>
                </Card>)}
            </ProductsWrapper>
        </HandleLoadingEmptyErrorState>);
};