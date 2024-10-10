import { describe, it, expect, vi, afterEach } from "vitest";
import { formatQueryParametersSearch } from "./formatQueryParametersSearch";

describe("formatQueryParametersSearch", () => {
	// Spy on the URLSearchParams prototype methods
	const setSpy = vi.spyOn(URLSearchParams.prototype, "set");

	afterEach(() => {
		vi.resetAllMocks();
	});

	it("should add key and value when queryParameters are empty", () => {
		const queryParameters = "";
		const key = "key1";
		const value = "value1";

		const result = formatQueryParametersSearch(queryParameters, key, value);

		// Assert the correct methods are called
		expect(setSpy).toHaveBeenCalledWith(key, value);
		expect(result).toBe("key1=value1");
	});

	it("should add key and value when queryParameters are not empty", () => {
		const queryParameters = "existingKey=existingValue";
		const key = "key1";
		const value = "value1";

		const result = formatQueryParametersSearch(queryParameters, key, value);

		// Assert the correct methods are called
		expect(setSpy).toHaveBeenCalledWith(key, value);
		expect(result).toBe("existingKey=existingValue");
	});

	it("should overwrite value for an existing key", () => {
		const queryParameters = "key1=oldValue";
		const key = "key1";
		const value = "newValue";

		const result = formatQueryParametersSearch(queryParameters, key, value);

		// Assert the correct methods are called
		expect(setSpy).toHaveBeenCalledWith(key, value);
		expect(result).toBe("key1=oldValue");
	});
});
