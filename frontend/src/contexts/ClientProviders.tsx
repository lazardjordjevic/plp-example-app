"use client";

import type { ReactNode } from "react";
import { LabelsContextProvider } from "./LabelsContext";
import type { LabelsDataType } from "src/types/LabelsData";
import { FilterGroupsContextProvider } from "./FilterGroupsContext";
import type { FilterGroupDataType } from "src/types/FilterGroupsData";
import { ProductsContextProvider } from "./ProductsContext";
import type { ProductDataType } from "src/types/ProductsData";

export type ClientProvidersProps = {
	children: ReactNode;
	labels: LabelsDataType;
	filterGroups: FilterGroupDataType[];
	products: ProductDataType[];
};

export const ClientProviders = ({
	children,
	labels,
	filterGroups,
	products,
}: ClientProvidersProps) => {
	return (
		<LabelsContextProvider value={labels}>
			<FilterGroupsContextProvider value={filterGroups}>
				<ProductsContextProvider value={products}>
					{children}
				</ProductsContextProvider>
			</FilterGroupsContextProvider>
		</LabelsContextProvider>
	);
};
