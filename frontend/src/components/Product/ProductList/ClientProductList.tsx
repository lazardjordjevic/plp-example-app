"use client";

import { useLabelsContext } from "src/contexts/LabelsContext";
import { useProductsContext } from "src/contexts/ProductsContext";
import ClientProductCard from "../ProductCard/ClientProductCard";
import style from "./ProductList.module.scss";
import type { ProductDataType } from "src/types/ProductsData";

export default function ClientProductList() {
	const labelsContext = useLabelsContext();
	const productContext = useProductsContext();

	const { showing, results } = labelsContext;

	return (
		<div className={style["product-list"]}>
			<span className={style["product-list__title"]}>
				{showing}: {productContext?.filteredProducts.length} {results}
			</span>
			{productContext?.filteredProducts.map((product: ProductDataType) => {
				return <ClientProductCard key={product.title} product={product} />;
			})}
		</div>
	);
}
