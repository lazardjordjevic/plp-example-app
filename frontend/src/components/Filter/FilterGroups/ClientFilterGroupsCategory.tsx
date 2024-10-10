"use client";

import { useFilterGroupsContext } from "src/contexts/FilterGroupsContext";
import ClientFilterGroup from "../FilterGroup/ClientFilterGroup";
import style from "./FilterGroups.module.scss";

export default function ClientFilterGroupsCategory() {
	const filtersGroupContext = useFilterGroupsContext();

	return (
		<div className={style["filter-groups"]}>
			{filtersGroupContext?.map((filterGroup) => {
				return (
					<ClientFilterGroup key={filterGroup.groupCategory} {...filterGroup} />
				);
			})}
		</div>
	);
}
