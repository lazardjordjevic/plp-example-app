"use client";

import ClientFilterGroup from "../FilterGroup/ClientFilterGroup";
import style from "./FilterGroups.module.scss";
import { useFilterGroupsContext } from "src/contexts/FilterGroupsContext";

export default function ClientFilterGroupsCategory() {
	const filtersGroupContext = useFilterGroupsContext();

	// console.log("filtersGroupContext");

	return (
		<div className={style["filter-groups"]}>
			{filtersGroupContext?.map((filterGroup, index) => {
				// console.log("filterGroup", filterGroup);

				// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
				return <ClientFilterGroup key={index} {...filterGroup} />;
			})}
		</div>
	);
}
