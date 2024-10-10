import type { LabelsDataType } from "src/types/LabelsData";

type FetchLabelsType = () => Promise<LabelsDataType>;

export const fetchLabels: FetchLabelsType = async () => {
	const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/labels`);
	const data = await response.json();

	return data;
};
