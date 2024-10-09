"use client";

import type { ProductDataType } from "src/types/ProductsData";
import style from "./ProductCard.module.scss";

export default function ClientProductCard({
	product,
}: { product: ProductDataType }) {
	const { title, description, price, image } = product;
	return (
		<div className={style["product-card"]}>
			<div className={style["product-card__image-wrapper"]}>
				<img
					src={image.src}
					alt={image.alt}
					className={style["product-card__image"]}
				/>
			</div>
			<div className={style["product-card__title"]}>{title}</div>
			<div className={style["product-card__description"]}>{description}</div>
			<div className={style["product-card__price"]}>${price}</div>
		</div>
	);
}
