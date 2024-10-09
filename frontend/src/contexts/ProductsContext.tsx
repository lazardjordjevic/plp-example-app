import { createContext, useContext, useMemo, useState } from "react";
import type { ReactNode } from "react";
import type { ProductDataType } from "src/types/ProductsData";

const ProductsContext = createContext({
	products: [],
	filteredProducts: [],
});

export const useProductsContext = () => useContext(ProductsContext);

export type ProductsContextType = {
	children: ReactNode;
	value: ProductDataType[];
	setNewFilteredProducts: (newFilteredProducts: ProductDataType[]) => void;
	setNewSearchKeyword: (searchKeyword: string) => void;
	filterByGroup: (groupCategory: string, groupCategoryValue: string) => void;
	filterBySearch: (searchKeyword: string) => void;
};

export const ProductsContextProvider = ({
	children,
	value,
}: ProductsContextType) => {
	const [filteredProducts, setFilteredProducts] =
		useState<ProductDataType[]>(value);
	const [searchKeyword, setSearchKeyword] = useState<string>("");

	const state = useMemo(() => {
		return {
			products: value,
			filteredProducts: filteredProducts,
			setNewFilteredProducts: (newFilteredProducts: ProductDataType[]) => {
				// console.log("lazerking", newFilteredProducts);
				setFilteredProducts(newFilteredProducts);
			},
			filterByGroup: (groupCategory: string, groupCategoryValue: string) => {
				console.log("1", groupCategory, groupCategoryValue);
				console.log("value", value);

				// TODO: add data as parameter so this function can be testeable
				const filteredItems = filteredProducts.filter(
					(item: ProductDataType) => item[groupCategoryValue] === groupCategory,
				);

				setFilteredProducts(filteredItems);
			},
			filterBySearch: (searchKeyword: string) => {
				console.log("lazer 3", searchKeyword);
				setSearchKeyword(searchKeyword);
			},
			submitFilterSearch: () => {
				// filter products by searchKeyword
				const searchedProducts = filteredProducts.filter((product) =>
					product.title.toLowerCase().includes(searchKeyword.toLowerCase()),
				);
				setFilteredProducts(searchedProducts);
			},
		};
	});

	return (
		// add filteredProducts to value
		<ProductsContext.Provider value={state}>
			{children}
		</ProductsContext.Provider>
	);
};
