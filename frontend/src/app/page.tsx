import React from "react";
import ClientFilterGroupsCategory from "src/components/Filter/FilterGroups/ClientFilterGroupsCategory";
import ClientFilterSearch from "src/components/Filter/FilterSearch/ClientFilterSearch";
import ClientHeader from "src/components/Header/ClientHeader";
import ClientProductList from "src/components/Product/ProductList/ClientProductList";
import { ClientProviders } from "src/contexts/ClientProviders";

export default async function IndexPage() {
	const [labelsData, filtersGroupData, productsData] = await Promise.all([
		(await fetch(`${process.env.NEXT_PUBLIC_API_URL}/labels`)).json(),
		(await fetch(`${process.env.NEXT_PUBLIC_API_URL}/filters`)).json(),
		(await fetch(`${process.env.NEXT_PUBLIC_API_URL}/results`)).json(),
	]);

	// console.log("labelsData", labelsData);
	// console.log("filtersData", filtersGroupData);
	// console.log("resultsData", resultsData);

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
				{/*<div>{JSON.stringify(labelsData)}</div> */}
				{/* <div>{JSON.stringify(filtersGroupData)}</div> */}
				{/*<div>{JSON.stringify(resultsData)}</div> */}
			</ClientProviders>
		</>
	);
}
