import { ClientProviders } from "src/contexts/ClientProviders";
import ClientFilterGroupsCategory from "src/components/Filter/FilterGroups/ClientFilterGroupsCategory";
import ClientFilterSearch from "src/components/Filter/FilterSearch/ClientFilterSearch";
import ClientHeader from "src/components/Header/ClientHeader";
import ClientProductList from "src/components/Product/ProductList/ClientProductList";
import React from "react";

export default async function IndexPage() {
	const [labelsData, filtersGroupData, productsData] = await Promise.all([
		(await fetch(`${process.env.NEXT_PUBLIC_API_URL}/labels`)).json(),
		(await fetch(`${process.env.NEXT_PUBLIC_API_URL}/filters`)).json(),
		(await fetch(`${process.env.NEXT_PUBLIC_API_URL}/results`)).json(),
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
