"use client";

import { useLabelsContext } from "src/contexts/LabelsContext";
import ClientProductCard from "../ProductCard/ClientProductCard";
import style from "./ProductList.module.scss";
import type { ProductDataType } from "src/types/ProductsData";
import { useNewProductsContext } from "src/contexts/NewProductsContext";

export default function ClientProductList() {
	const labelsContext = useLabelsContext();
	const { filteredProducts } = useNewProductsContext();
	const { showing, results } = labelsContext;

	return (
		<div className={style["product-list"]}>
			<span className={style["product-list__title"]}>
				{showing}: {filteredProducts.length} {results}
			</span>
			{filteredProducts.map((product: ProductDataType) => {
				return <ClientProductCard key={product.title} product={product} />;
			})}
		</div>
	);
}
