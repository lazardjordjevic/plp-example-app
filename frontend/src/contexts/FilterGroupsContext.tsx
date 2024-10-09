// create filters group context

import { createContext, useContext } from "react";
import type { ReactNode } from "react";
import type { FilterGroupDataType } from "src/types/FilterGroupsData";

const FilterGroupsContext = createContext<FilterGroupDataType[] | null>(null);

export const useFilterGroupsContext = () => useContext(FilterGroupsContext);

export type FilterGroupsContextType = {
	children: ReactNode;
	value: FilterGroupDataType[];
};

export const FilterGroupsContextProvider = ({
	children,
	value,
}: FilterGroupsContextType) => {
	return (
		<FilterGroupsContext.Provider value={value}>
			{children}
		</FilterGroupsContext.Provider>
	);
};
