"use client";

import { useCallback } from "react";
import { useProductsContext } from "src/contexts/ProductsContext";
import style from "./FilterGroup.module.scss";

export type FilterGroupDataType = {
	filters: string[];
	groupCategory: string;
};

export default function ClientFilterGroup({
	filters,
	groupCategory,
}: FilterGroupDataType) {
	const productsContext = useProductsContext();

	const handleFilterGroupClick = useCallback(
		(
			event:
				| React.MouseEvent<HTMLDivElement>
				| React.KeyboardEvent<HTMLDivElement>,
			filterSelection: string,
			groupCategory: string,
		) => {
			productsContext.filterByGroup(filterSelection, groupCategory);
		},
		[productsContext],
	);

	return (
		<div className={style["filter-group"]}>
			<div className={style["filter-group__title"]}>{groupCategory}</div>
			<div className={style["filter-group__selection"]}>
				{filters.map((filterSelection, index) => (
					<div
						className={style["filter-group__selection-item"]}
						key={filterSelection}
						onClick={(e: React.MouseEvent<HTMLDivElement>) =>
							handleFilterGroupClick(e, filterSelection, groupCategory)
						}
						onKeyUp={(e: React.KeyboardEvent<HTMLDivElement>) => {
							if (e.key === "Enter") {
								handleFilterGroupClick(e, filterSelection, groupCategory);
							}
						}}
					>
						{filterSelection}
					</div>
				))}
			</div>
		</div>
	);
}
