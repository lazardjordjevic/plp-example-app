import { createContext, useContext } from "react";
import type { ReactNode } from "react";
import type { LabelsDataType } from "src/types/LabelsData";

const LabelsContext = createContext<LabelsDataType>({
	headline: "",
	searchByKeyword: "",
	sortBy: "",
	price: "",
	asc: "",
	desc: "",
	showing: "",
	result: "",
	results: "",
	noResultsFound: "",
	groupCategoryTitles: {
		size: "",
		color: "",
		type: "",
	},
	size: {
		small: "",
		medium: "",
		large: "",
	},
	color: {
		red: "",
		green: "",
		blue: "",
		yellow: "",
	},
	type: {
		jean: "",
		jacket: "",
		skirt: "",
		blouse: "",
		skarf: "",
	},
});

export const useLabelsContext = () => useContext(LabelsContext);

export type LabelsContextType = {
	children: ReactNode;
	value: LabelsDataType;
};

export const LabelsContextProvider = ({
	children,
	value,
}: LabelsContextType) => {
	return (
		<LabelsContext.Provider value={value}>{children}</LabelsContext.Provider>
	);
};
