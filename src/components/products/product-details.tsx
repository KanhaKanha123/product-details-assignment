import { FC, ReactElement, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import {
    ChipOptionsTypes,
    FetchProductDetailsTypes,
    ModelListTypes,
    ProductsStateAtom
} from "../../store";
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
import { Rating } from "../shared-components/rating/rating";
import {
    filterProductListData,
    getAllGalleryImages,
    getAllModels
} from "./helpers";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';

/**
 * This component is responsible to render the product full details
 * @returns ReactElement
 */
export const ProductDetails: FC = (): ReactElement => {
    //Get productId from url params
    const { productId } = useParams<string>();

    //Product state list from recoil state
    const productsList = useRecoilValue(ProductsStateAtom);

    //Product state data by product id
    const [productData, setProductData] = useState<FetchProductDetailsTypes>();

    //One model state data by model code
    const [productModelData, setProductModelData] = useState<ModelListTypes>();

    //Selected code from the models code tabs
    const [selectedCode, setSelectedCode] = useState<string | undefined>(undefined);

    //state to set loading
    const [isLoading, setIsloading] = useState<boolean>(false);

    //state to set error
    const [error, setError] = useState<any>(null);

    useEffect(() => {
        try {

            setIsloading(true);

            //Get model details by model code
            const getModelDetailsbyCode = (pData: FetchProductDetailsTypes, modelCode: string | undefined): void => {

                const modelData = pData?.modelList.filter(model => model.modelCode === modelCode)[0];

                if (modelData) {
                    setProductModelData(modelData);
                }
            };

            //get the data of selected product
            const pData = filterProductListData(productsList, productId);

            if (pData.modelList[0].modelCode) {
                //set default code only on first time page load
                if (!selectedCode) {
                    setSelectedCode(pData.modelList[0].modelCode);
                }
            }

            //Set product data
            setProductData(pData);

            if (productData) {
                //Set single model data
                getModelDetailsbyCode(productData, selectedCode);
            }

            setIsloading(false);
        } catch (err) {
            setError(err);
        }
    }, [selectedCode, productModelData, productId, productsList, productData, productData?.modelList]);

    //click hander to handle models tab click
    const modelClickHandler = (code: string): void => {
        setSelectedCode(code);
    }

    return (productModelData ? <HandleLoadingEmptyErrorState data={productModelData} isLoading={isLoading} error={error}>
        <ProductDetailsWrapper aria-label="container with product details">
            <Card
                width="1000px"
                height="auto"
                padding="35px"
            >
                <Header>
                    <TitleTextWrapper aria-label="product name here">
                        {productModelData?.displayName}
                    </TitleTextWrapper>
                    <Link aria-label="link to go back" className="linkStyle" to="/">{`<- Go Back`}</Link>
                </Header>

                <BodyContainer aria-label="product rating, reviews, type and subtype container">
                    <BodyTextWrapper><Text area-aria-label="rating here">Rating: </Text><Rating rating={Number(productModelData.ratings)} />({productModelData.ratings.substring(0, 3)})</BodyTextWrapper>
                    <BodyTextWrapper><Text area-aria-label="reviews here">Reviews: </Text>{productModelData.reviewCount}</BodyTextWrapper>
                    <BodyTextWrapper><Text area-aria-label="type here">Type: </Text>{productModelData.pviTypeName}</BodyTextWrapper>
                    <BodyTextWrapper><Text area-aria-label="sub Type here">Sub Type: </Text>{productModelData.pviSubtypeName}</BodyTextWrapper>
                </BodyContainer>

                {productData?.chipOptions && <ChipsContainer aria-label="product tags listed here">
                    <Text>Chip Types:</Text> {productData?.chipOptions.map((option: ChipOptionsTypes, index: number) => <Card
                        key={index}
                        width="auto"
                        height="auto"
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
                flexwrap='wrap'
                alignitems="flex-start">
                <ModelsWraper>
                    Select Models
                    {getAllModels(productData)?.map(code => <Card
                        key={code}
                        width="auto"
                        height="25px"
                        padding="5px"
                        cursortype="pointer"
                        backgroundcolor={`${selectedCode === code ? '#4792ef' : '#8fbaf0'}`}
                        onClick={() => modelClickHandler(code)}>
                        {code}
                    </Card>)}
                </ModelsWraper>
                <ImageGalleryWrapper>
                    <ImageGallery items={getAllGalleryImages(productModelData)} />
                </ImageGalleryWrapper>
            </Card>
        </ProductDetailsWrapper>
    </HandleLoadingEmptyErrorState> : <EmptyOrError color="black">No data available</EmptyOrError>)
};