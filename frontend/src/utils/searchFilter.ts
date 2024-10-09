import type { ProductDataType } from "src/types/ProductsData";

export const searchFilter = (
	products: ProductDataType[],
	searchKeyword: string,
	// filterGroups: FilterGroupDataType[],
) => {
	// filter products title by searchKeyword
	const filteredProducts = products.filter((product) =>
		product.title.toLowerCase().includes(searchKeyword.toLowerCase()),
	);

	return filteredProducts;
};
