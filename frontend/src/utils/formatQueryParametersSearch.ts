export const formatQueryParametersSearch = (
	queryParameters: string,
	key: string,
	value: string,
) => {
	const newQueryParameters = new URLSearchParams(queryParameters);

	// if the queryParameters are empty, add the key and value to the queryParameters
	if (!queryParameters?.length) {
		newQueryParameters.set(key, value);
	}

	// if the queryParameters are not empty, add the key and value to the queryParameters
	if (queryParameters?.length) {
		newQueryParameters.set(key, value);
	}

	return newQueryParameters.toString();
};
