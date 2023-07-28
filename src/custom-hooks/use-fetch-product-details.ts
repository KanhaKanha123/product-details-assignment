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
} from './mock-filter-data/mock-filter-data';
import { ProductsStateAtom } from '../store'
import type { FetchProductDetailsReturnTypes } from '../store';
import { useSetRecoilState } from 'recoil';
/**
 * This hooks is responsible to fetch all the product details as per the filter from the api. We are using react-query for better performance
 * @returns { productList, isLoading, error }
 */
export const useFetchProductDetails = (): FetchProductDetailsReturnTypes => {
    const filterParams = `siteCode=${siteCode}&modelList=${modelList}&commonCodeYN=${commonCodeYN}&saleSkuYN=${saleSkuYN}&onlyRequestSkuYN=${onlyRequestSkuYN}&keySummaryYN=${keySummaryYN}&shopSiteCode=${shopSiteCode}`;

    const setProductsData = useSetRecoilState(ProductsStateAtom);

    const { isLoading, data, error } = useQuery<FetchProductDetailsReturnTypes | undefined>([`product_details_${filterParams}`], async () => {

        const { data } = await axios.get(`/product/card/detail/newhybris?${filterParams}`);

        const productsData = data.response.resultData;

        setProductsData(productsData.productList);

        return productsData;
    }
    );

    return { productList: data?.productList, isLoading, error };
}