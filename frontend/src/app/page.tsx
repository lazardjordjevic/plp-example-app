import { ClientProviders } from "src/contexts/ClientProviders";
import { fetchFilters } from "src/services/filtersService";
import { fetchLabels } from "src/services/labelsService";
import { fetchProducts } from "src/services/productsService";
import ClientFilterSearch from "src/components/Filter/FilterSearch/ClientFilterSearch";
import ClientHeader from "src/components/Header/ClientHeader";
import ClientProductList from "src/components/Product/ProductList/ClientProductList";
import React from "react";
import ClientFilterGroupsCategory from "src/components/Filter/FilterGroup/FilterGroups/ClientFilterGroupsCategory";

export default async function IndexPage() {
	const [labelsData, filtersGroupData, productsData] = await Promise.all([
		fetchLabels(),
		fetchFilters(),
		fetchProducts(),
	]);

	return (
		<>
			<ClientProviders
				labels={labelsData}
				filterGroups={filtersGroupData}
				products={productsData}
			>
				<ClientHeader />
				<ClientFilterSearch />
				<ClientFilterGroupsCategory />
				<ClientProductList />
			</ClientProviders>
		</>
	);
}
