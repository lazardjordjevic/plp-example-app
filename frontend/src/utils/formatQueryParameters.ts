export const formatQueryParameters = (
	queryParameters: string,
	key: string,
	value: string,
	isSelected: boolean,
) => {
	const newQueryParameters = new URLSearchParams(queryParameters);

	console.log("key value", queryParameters, key, value, isSelected);

	// if the queryParameters are empty, add the key and value to the queryParameters
	if (!queryParameters?.length) {
		newQueryParameters.set(key, value);
	}

	// if the queryParameters are not empty, add the key and value to the queryParameters
	if (queryParameters?.length) {
		newQueryParameters.append(key, value);
	}

	// if the isSelected is true, delete the key and value from the queryParameters
	if (isSelected) {
		newQueryParameters.delete(key, value);
	}

	console.log(" newQueryParameters.toString()", newQueryParameters.toString());

	return newQueryParameters.toString();
};
