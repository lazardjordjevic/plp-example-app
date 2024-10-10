import { describe, expect, it } from "vitest";
import { formatQueryParameters } from "./formatQueryParameters";

describe("formatQueryParameters", () => {
	it("should add a new key-value pair when isSelected is true", () => {
		const queryParameters = "key1=value1";
		const result = formatQueryParameters(
			queryParameters,
			"key2",
			"value2",
			true,
		);
		expect(result).toContain("key1=value1");
	});

	it("should remove the key when isSelected is false", () => {
		const queryParameters = "key1=value1&key2=value2";
		const result = formatQueryParameters(
			queryParameters,
			"key2",
			"value2",
			false,
		);
		expect(result).toContain("key2=value2");
	});
});
