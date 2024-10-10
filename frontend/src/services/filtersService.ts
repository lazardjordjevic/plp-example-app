import type { FilterGroupDataType } from "src/types/FiltersData";

type FetchFiltersType = () => Promise<FilterGroupDataType[]>;

export const fetchFilters: FetchFiltersType = async () => {
	const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/filters`);
	const data = await response.json();

	return data;
};
