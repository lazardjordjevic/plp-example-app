// create new context

import {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useState,
} from "react";
import type { ProductDataType } from "src/types/ProductsData";
import type { ReactNode } from "react";
import { fetchProducts } from "src/services/productsService";
import { formatQueryParameters } from "src/utils/formatQueryParameters";
import { formatQueryParametersSearch } from "src/utils/formatQueryParametersSearch";

export type NewProductsContextType = {
	filteredProducts: ProductDataType[];
	filterByGroup: (
		groupCategory: string,
		groupCategoryValue: string,
		isSelected: boolean,
	) => void;
	products: ProductDataType[];
	submitSearch: (queryParameters: string) => void;
};

export type NewProductsProviderProps = {
	children: ReactNode;
	value: ProductDataType[];
};

const NewProductsContext = createContext<NewProductsContextType>({
	filteredProducts: [],
	filterByGroup: () => {},
	products: [],
	submitSearch: () => {},
});

export const useNewProductsContext = () => useContext(NewProductsContext);

export const NewProductsContextProvider = ({
	children,
	value,
}: NewProductsProviderProps) => {
	const [products, setProducts] = useState<ProductDataType[]>(value);
	const [filteredProducts, setFilteredProducts] =
		useState<ProductDataType[]>(value);
	const [queryParameters, setQueryParameters] = useState<string>("");

	/**
	 * submitSearch function that takes a search keyword as a parameter and updates the queryParameters state
	 * with the search keyword as a query parameter
	 * @param {string} searchKeyword
	 */
	const submitSearch = useCallback(
		(searchKeyword: string) => {
			const newQueryParameter = formatQueryParametersSearch(
				queryParameters,
				"search",
				searchKeyword,
			);
			setQueryParameters(newQueryParameter);
		},
		[queryParameters],
	);

	/**
	 * filterByGroup function that takes a groupCategory and groupCategoryValue as parameters and updates the queryParameters state
	 * with the groupCategory and groupCategoryValue as query parameters
	 * @param {string} groupCategory
	 * @param {string} groupCategoryValue
	 */
	const filterByGroup = useCallback(
		(groupCategory: string, filterSelection: string, isSelected: boolean) => {
			const newQueryParameter = formatQueryParameters(
				queryParameters,
				groupCategory,
				filterSelection,
				isSelected,
			);
			setQueryParameters(newQueryParameter);
		},
		[queryParameters],
	);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetchProducts(`?${queryParameters}`);
				setFilteredProducts(response);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, [queryParameters]);

	const state = useMemo(
		() => ({
			products,
			filteredProducts,
			submitSearch,
			filterByGroup,
		}),
		[products, filteredProducts, submitSearch, filterByGroup],
	);

	return (
		<NewProductsContext.Provider value={state}>
			{children}
		</NewProductsContext.Provider>
	);
};
