import { FetchProductDetailsTypes, ModelListTypes } from "../../../store";

interface galleryTypes {
    readonly original: string,
    readonly thumbnail: string
}

//get data for one product by id
export const filterProductListData = (productsList: FetchProductDetailsTypes[], productId: string | undefined): FetchProductDetailsTypes => productsList.filter(product => product.familyId === productId)[0];

//get all the availablw models
export const getAllModels = (productData: FetchProductDetailsTypes | undefined): string[] | undefined => productData?.modelList.map(model => model.modelCode);

//get images for gallary
export const getAllGalleryImages = (modelData: ModelListTypes): galleryTypes[] => modelData.galleryImage?.map((img, index) => {
    return {
        original: `https:${img}`,
        thumbnail: `https:${img}`,
    }
}
);