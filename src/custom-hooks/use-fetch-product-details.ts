import axios from '../api/axios-api';
import { useQuery } from "react-query";
import {
    siteCode,
    modelList,
    commonCodeYN,
    saleSkuYN,
    onlyRequestSkuYN,
    keySummaryYN,
    shopSiteCode
} from './mock-filter-data/mock-filter-data'

interface FetchProductDetailsTypes {
    readonly familyRecord: string,
    readonly familyId: string,
    readonly modelCount: string,
    readonly fmyMarketingName: string,
    readonly fmyEngName: string,
    readonly categorySubTypeCode: string,
    readonly categorySubTypeEngName: string,
    readonly simplePdYN: string,
    readonly oldProductYN: string
}

interface FetchProductDetailsReturnTypes {
    readonly productList: FetchProductDetailsTypes[] | undefined,
    readonly isLoading: boolean,
    readonly error: unknown

}

/**
 * This hooks is responsible to fetch all the product details as per the filter from the api. We are using react-query for better performance
 * @returns { productList, isLoading, error }
 */
export const useFetchProductDetails = (): FetchProductDetailsReturnTypes => {
    const filterParams = `siteCode=${siteCode}&modelList=${modelList}&commonCodeYN=${commonCodeYN}&saleSkuYN=${saleSkuYN}&onlyRequestSkuYN=${onlyRequestSkuYN}&keySummaryYN=${keySummaryYN}&shopSiteCode=${shopSiteCode}`;

    const { isLoading, data, error } = useQuery<FetchProductDetailsReturnTypes | undefined>([`product_details_${filterParams}`], async () => {

        const { data } = await axios.get(`/product/card/detail/newhybris?${filterParams}`);

        return data.response.resultData;
    }
    );

    return { productList: data?.productList, isLoading, error };
}