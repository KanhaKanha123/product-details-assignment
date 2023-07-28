import { atom } from "recoil";

export interface FetchProductDetailsTypes {
    readonly familyRecord: string,
    readonly familyId: string,
    readonly modelCount: string,
    readonly fmyMarketingName: string,
    readonly fmyEngName: string,
    readonly categorySubTypeCode: string,
    readonly categorySubTypeEngName: string,
    readonly simplePdYN: string,
    readonly oldProductYN: string,
    readonly modelList: ModelListTypes[]
    readonly chipOptions: ChipOptionsTypes[]
}

export interface ChipOptionsTypes {
    readonly fmyChipType: string
    readonly optionList: {
        readonly multiColorList: string | null,
        readonly multiColorYN: string | null,
        readonly optionCode: string | null,
        readonly optionLocalName: string | null,
        readonly optionName: string | null
    }[]
}
export interface ModelListTypes {
    readonly displayName: string,
    readonly galleryImage: string[],
    readonly galleryImageAlt: string[],
    readonly galleryImageLarge: string[],
    readonly modelCode: string,
    readonly modelName: string,
    readonly pviSubtypeName: string,
    readonly pviTypeName: string,
    readonly ratings: string,
    readonly reviewCount: string,
    readonly thumbUrl: string
}

export interface FetchProductDetailsReturnTypes {
    readonly productList: FetchProductDetailsTypes[] | undefined,
    readonly isLoading: boolean,
    readonly error: unknown

}

export const ProductsStateAtom = atom<FetchProductDetailsTypes[]>({
    key: 'productStateAtom',
    default: []
});