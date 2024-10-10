import { createContext, useContext, useState } from "react";
import type { ProductDataType } from "src/types/ProductsData";
import type { ReactNode } from "react";

const ProductsContext = createContext({
	filteredProducts: [],
	products: [],
});

export const useProductsContext = () => useContext(ProductsContext);

export type ProductsContextType = {
	children: ReactNode;
	filterByGroup: (groupCategory: string, groupCategoryValue: string) => void;
	filterBySearch: (searchKeyword: string) => void;
	setNewFilteredProducts: (newFilteredProducts: ProductDataType[]) => void;
	setNewSearchKeyword: (searchKeyword: string) => void;
	value: ProductDataType[];
};

export const ProductsContextProvider = ({
	children,
	value,
}: ProductsContextType) => {
	const [filteredProducts, setFilteredProducts] =
		useState<ProductDataType[]>(value);
	const [searchKeyword, setSearchKeyword] = useState<string>("");

	const state = {
		products: value,
		filteredProducts: filteredProducts,
		setNewFilteredProducts: (newFilteredProducts: ProductDataType[]) => {
			setFilteredProducts(newFilteredProducts);
		},
		filterByGroup: (
			groupCategory: string,
			groupCategoryValue: keyof ProductDataType,
		) => {
			// TODO: add data as parameter so this function can be testeable
			const filteredItems = filteredProducts.filter(
				(item: ProductDataType) => item[groupCategoryValue] === groupCategory,
			);
			setFilteredProducts(filteredItems);
		},
		filterBySearch: (searchKeyword: string) => {
			setSearchKeyword(searchKeyword);
		},
		submitFilterSearch: () => {
			const searchedProducts = filteredProducts.filter((product) =>
				product.title.toLowerCase().includes(searchKeyword.toLowerCase()),
			);
			setFilteredProducts(searchedProducts);
		},
	};

	return (
		<ProductsContext.Provider value={state}>
			{children}
		</ProductsContext.Provider>
	);
};
