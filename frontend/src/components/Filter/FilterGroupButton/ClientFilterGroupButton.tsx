import { useCallback, useState } from "react";
import { useNewProductsContext } from "src/contexts/NewProductsContext";
import classNames from "classnames";
import style from "./FilterGroupButton.module.scss";

export type ClientFilterGroupButtonProps = {
	filterSelection: string;
	groupCategory: string;
};

export default function ClientFilterGroupButton({
	filterSelection,
	groupCategory,
}: ClientFilterGroupButtonProps) {
	const { filterByGroup } = useNewProductsContext();
	const [isSelected, setIsSelected] = useState(false);

	const handleFilterGroupClick = useCallback(
		(
			event:
				| React.MouseEvent<HTMLDivElement>
				| React.KeyboardEvent<HTMLDivElement>,
			filterSelection: string,
			groupCategory: string,
		) => {
			setIsSelected(!isSelected);
			filterByGroup(groupCategory, filterSelection, isSelected);
		},
		[filterByGroup, isSelected],
	);

	const FILTER_GROUP_SELECTION_ITEM_CLASSNAME = classNames(
		style["filter-group__selection-item"],
		{
			[style["filter-group__selection-item--selected"]]: isSelected,
		},
	);

	return (
		<div
			className={FILTER_GROUP_SELECTION_ITEM_CLASSNAME}
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
	);
}
