import { FC, Fragment, ReactElement } from "react";
import { Card, HandleLoadingEmptyErrorState } from "../shared-components";
import {
    ProductsWrapper,
    Image,
    FooterWrapper,
    Header,
    ChipsContainer,
    BodyContainer,
    TitleTextWrapper,
    ProductImageContainer,
    BodyTextWrapper
} from "./style";

import { useNavigate } from 'react-router-dom';

import { useFetchProductDetails } from "../../custom-hooks";
import { ChipOptionsTypes } from "../../store";
import { Rating } from "../shared-components/rating/rating";

/**
 * This component is responsible to render all the products in cards with few details.
 * @returns ReactElement
 */
export const ProductsList: FC = (): ReactElement => {
    const navigate = useNavigate();

    const { productList, isLoading, error } = useFetchProductDetails();

    //on click navigate to details page
    const cardClickHandler = (productId: string) => {
        navigate(`/product/${productId}`);
    }

    return (
        <HandleLoadingEmptyErrorState data={productList} isLoading={isLoading} error={error}>
            <ProductsWrapper>
                {(productList || []).map(product => <Card
                    aria-label="card containing the product data"
                    key={product.familyId}
                    width="300px"
                    height="450px"
                    padding="15px"
                    backgroundcolor="#f4f4f4"
                    cursortype="pointer"
                    onClick={() => cardClickHandler(product.familyId)}>
                    <Header>
                        <TitleTextWrapper aria-label="product name here">
                            {product.fmyEngName}
                        </TitleTextWrapper>
                    </Header>
                    {product.chipOptions && <ChipsContainer aria-label="product tags listed here">
                        Chips: {product.chipOptions.map((option: ChipOptionsTypes, index: number) => <Card
                            key={index}
                            width="auto"
                            height="20px"
                            padding="5px"
                            backgroundcolor="#8fbaf0"
                        >
                            {option.fmyChipType}
                        </Card>)}
                    </ChipsContainer>}
                    <BodyContainer aria-label="product thumbnail is here">
                        <ProductImageContainer><Image src={`https:${product.modelList[0].thumbUrl}`} /></ProductImageContainer>
                    </BodyContainer>
                    <FooterWrapper aria-label="product availability count and rating count is here">
                        <BodyTextWrapper>Available: {product.modelCount}</BodyTextWrapper>,
                        <BodyTextWrapper>Rating: <Rating rating={Number(product.modelList[0].ratings)} />({product.modelList[0].ratings.substring(0, 3)})</BodyTextWrapper>
                    </FooterWrapper>
                </Card>)}
            </ProductsWrapper>
        </HandleLoadingEmptyErrorState>);
};