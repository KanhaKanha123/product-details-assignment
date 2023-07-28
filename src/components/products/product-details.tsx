import { FC, ReactElement, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { ChipOptionsTypes, FetchProductDetailsTypes, ModelListTypes, ProductsStateAtom } from "../../store";
import {
    Card,
    EmptyOrError,
    HandleLoadingEmptyErrorState,
} from "../shared-components";
import {
    Header,
    BodyContainer,
    TitleTextWrapper,
    ProductDetailsWrapper,
    ModelsWraper,
    ImageGalleryWrapper,
    Text,
    BodyTextWrapper,
    ChipsContainer
} from "./style";

import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import { Rating } from "../shared-components/rating/rating";

interface galleryTypes {
    readonly original: string,
    readonly thumbnail: string
}

const filterData = (productsList: FetchProductDetailsTypes[], productId: string | undefined): FetchProductDetailsTypes => productsList.filter(product => product.familyId === productId)[0];

const getAllModels = (productData: FetchProductDetailsTypes): string[] | undefined => productData?.modelList.map(model => model.modelCode);

const getAllGalleryImages = (modelData: ModelListTypes): galleryTypes[] => modelData.galleryImage?.map((img, index) => {
    return {
        original: `https:${img}`,
        thumbnail: `https:${img}`,
    }
}
);

/**
 * This component is responsible to render the product full details
 * @returns ReactElement
 */
export const ProductDetails: FC = (): ReactElement => {
    //Get productId from url params
    const { productId } = useParams<string>();

    //Product list from recoil state
    const productsList = useRecoilValue(ProductsStateAtom);

    //Product data by product id
    const [productData, setProductData] = useState<FetchProductDetailsTypes>();

    //One model data by model code
    const [singleModelData, setSingleModelData] = useState<ModelListTypes>();

    //All available modes code for specific product
    const [modelCodes, setModelCodes] = useState<string[]>();

    //Selected code from the models code tabs
    const [selectedCode, setSelectedCode] = useState<string | undefined>(undefined);

    useEffect(() => {
        //get the data of selected product
        const data = filterData(productsList, productId);

        //get all the model codes for selected product
        const codes = getAllModels(data);

        if (codes) {
            //set default code only on first time page load
            if (!selectedCode) {
                setSelectedCode(codes[0]);
            }

            setModelCodes(codes);
        }

        //Set product data
        setProductData(data);

        //Set single model data
        getModelDetailsbyCode(selectedCode);
    }, [selectedCode, singleModelData]);

    //click hander to handle models tab click
    const modelClickHandler = (code: string): void => {
        setSelectedCode(code);

        getModelDetailsbyCode(code);
    }

    //Get model details by model code
    const getModelDetailsbyCode = (modelCode: string | undefined): void => {

        const modelData = productData?.modelList.filter(model => model.modelCode === modelCode)[0];

        if (modelData) {
            setSingleModelData(modelData);
        }
    };

    return (singleModelData ? <HandleLoadingEmptyErrorState data={singleModelData} isLoading={false} error={false}>
        <ProductDetailsWrapper aria-label="container with product details">
            <Card
                width="1000px"
                height="auto"
                padding="35px"
            >
                <Header>
                    <TitleTextWrapper aria-label="product name here">
                        {singleModelData?.displayName}
                    </TitleTextWrapper>
                    <Link aria-label="link to go back" className="linkStyle" to="/">{`<- Go Back`}</Link>
                </Header>

                <BodyContainer aria-label="product rating, reviews, type and subtype container">
                    <BodyTextWrapper><Text area-aria-label="rating here">Rating: </Text><Rating rating={Number(singleModelData.ratings)} />({singleModelData.ratings.substring(0, 3)})</BodyTextWrapper>
                    <BodyTextWrapper><Text area-aria-label="reviews here">Reviews: </Text>{singleModelData.reviewCount}</BodyTextWrapper>
                    <BodyTextWrapper><Text area-aria-label="type here">Type: </Text>{singleModelData.pviTypeName}</BodyTextWrapper>
                    <BodyTextWrapper><Text area-aria-label="sub Type here">Sub Type: </Text>{singleModelData.pviSubtypeName}</BodyTextWrapper>
                </BodyContainer>

                {productData?.chipOptions && <ChipsContainer aria-label="product tags listed here">
                    <Text>Chip Types:</Text> {productData?.chipOptions.map((option: ChipOptionsTypes, index: number) => <Card
                        key={index}
                        width="auto"
                        height="20px"
                        padding="5px"
                        backgroundcolor="#8fbaf0"
                    >
                        {option.fmyChipType}
                    </Card>)}
                </ChipsContainer>}
            </Card>

            <Card
                width="1000px"
                height="auto"
                flexflow="row"
                flexwrap='unset'
                alignitems="flex-start">
                <ModelsWraper>
                    Models
                    {modelCodes && modelCodes?.map(code => <Card
                        key={code}
                        width="150px"
                        height="25px"
                        padding="5px"
                        cursortype="pointer"
                        backgroundcolor={`${selectedCode === code ? '#4792ef' : '#8fbaf0'}`}
                        onClick={() => modelClickHandler(code)}>
                        {code}
                    </Card>)}
                </ModelsWraper>
                <ImageGalleryWrapper>
                    <ImageGallery items={getAllGalleryImages(singleModelData)} />
                </ImageGalleryWrapper>
            </Card>
        </ProductDetailsWrapper>
    </HandleLoadingEmptyErrorState> : <EmptyOrError color="black">No data available</EmptyOrError>)
}