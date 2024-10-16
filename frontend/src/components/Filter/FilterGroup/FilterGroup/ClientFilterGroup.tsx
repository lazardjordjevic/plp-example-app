"use client";

import style from "./FilterGroup.module.scss";
import ClientFilterGroupButton from "../FilterGroupButton/ClientFilterGroupButton";

export type FilterGroupDataType = {
	filters: string[];
	groupCategory: string;
};

export default function ClientFilterGroup({
	filters,
	groupCategory,
}: FilterGroupDataType) {
	return (
		<div className={style["filter-group"]}>
			<div className={style["filter-group__title"]}>{groupCategory}</div>
			<div className={style["filter-group__selection"]}>
				{filters.map((filterSelection, index) => (
					<ClientFilterGroupButton
						filterSelection={filterSelection}
						groupCategory={groupCategory}
						key={filterSelection}
					/>
				))}
			</div>
		</div>
	);
}
