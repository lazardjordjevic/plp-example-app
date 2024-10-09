"use client";

import { useCallback } from "react";
import style from "./FilterGroup.module.scss";
import { useProductsContext } from "src/contexts/ProductsContext";

export type FilterGroupDataType = {
	groupCategory: string;
	filters: string[];
};

export default function ClientFilterGroup({
	groupCategory,
	filters,
}: FilterGroupDataType) {
	console.log("ClientFilterGroup", groupCategory, filters);

	const productsContext = useProductsContext();

	const handleFilterGroupClick = useCallback(
		(
			event:
				| React.MouseEvent<HTMLDivElement>
				| React.KeyboardEvent<HTMLDivElement>,
			filterSelection: string,
			groupCategory: string,
		) => {
			console.log("filterSelection", filterSelection, groupCategory);
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
