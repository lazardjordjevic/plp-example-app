import type { ProductDataType } from "src/types/ProductsData";

type FetchProductsType = (
	queryParameters?: string | undefined,
) => Promise<ProductDataType[]>;

export const fetchProducts: FetchProductsType = async (
	queryParameters: string | undefined,
) => {
	const apiUrl = queryParameters?.length
		? `${process.env.NEXT_PUBLIC_API_URL}/results${queryParameters}`
		: `${process.env.NEXT_PUBLIC_API_URL}/results`;
	const response = await fetch(apiUrl);
	const data = await response.json();

	return data;
};
