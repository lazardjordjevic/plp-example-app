"use client";

import { useLabelsContext } from "src/contexts/LabelsContext";
import style from "./ProductList.module.scss";
import { useProductsContext } from "src/contexts/ProductsContext";
import ClientProductCard from "../ProductCard/ClientProductCard";
import type { ProductDataType } from "src/types/ProductsData";

export default function ClientProductList() {
	const labelsContext = useLabelsContext();
	const productContext = useProductsContext();

	const { showing } = labelsContext;

	// console.log("productContext1", productContext);

	return (
		<div className={style["product-list"]}>
			{showing}: {productContext?.filteredProducts.length}
			{productContext?.filteredProducts.map(
				(product: ProductDataType, index: number) => {
					// console.log("productContext12332", productContext);

					return (
						<>
							{/* // biome-ignore lint/suspicious/noArrayIndexKey: */}
							<ClientProductCard key={index} product={product} />
							<div>a</div>
						</>
					);
				},
			)}
		</div>
	);
}
