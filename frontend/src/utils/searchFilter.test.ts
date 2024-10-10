import { describe, it, expect, vi, afterEach } from "vitest";
import type { ProductDataType } from "src/types/ProductsData";
import { searchFilter } from "./searchFilter";

describe("searchFilter", () => {
	const mockProducts: ProductDataType[] = [
		{
			title: "Large Jacket title",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			price: 50,
			image: {
				src: "https://placehold.co/150",
				alt: "Image alt",
			},
			url: "#",
			color: "blue",
			size: "large",
			type: "jacket",
		},
		{
			title: "Red Skirt title",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in sodales ligula, sit amet maximus magna. Pellentesque euismod, justo ut laoreet tristique, dolor massa bibendum eros, a eleifend velit orci ac sapien.",
			price: 50,
			image: {
				src: "https://placehold.co/150",
				alt: "Image alt",
			},
			url: "#",
			color: "red",
			size: "medium",
			type: "skirt",
		},
		{
			title: "Small Blouse title",
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			price: 20,
			image: {
				src: "https://placehold.co/150",
				alt: "Image alt",
			},
			url: "#",
			color: "green",
			size: "small",
			type: "blouse",
		},
	];

	afterEach(() => {
		vi.resetAllMocks();
	});

	it("should return all products when searchKeyword is an empty string", () => {
		const searchKeyword = "";
		const result = searchFilter(mockProducts, searchKeyword);

		expect(result).toEqual(mockProducts);
	});

	it("should return no products when searchKeyword does not match any product titles", () => {
		const searchKeyword = "Nokia";
		const result = searchFilter(mockProducts, searchKeyword);

		expect(result).toEqual([]);
	});

	it("should return only products whose titles match the searchKeyword", () => {
		const searchKeyword = "Small Blouse title";
		const result = searchFilter(mockProducts, searchKeyword);

		expect(result).toEqual([
			{
				title: "Small Blouse title",
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
				price: 20,
				image: {
					src: "https://placehold.co/150",
					alt: "Image alt",
				},
				url: "#",
				color: "green",
				size: "small",
				type: "blouse",
			},
		]);
	});

	it("should be case insensitive", () => {
		const searchKeyword = "Large Jacket title";
		const result = searchFilter(mockProducts, searchKeyword);

		expect(result).toEqual([
			{
				title: "Large Jacket title",
				description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
				price: 50,
				image: {
					src: "https://placehold.co/150",
					alt: "Image alt",
				},
				url: "#",
				color: "blue",
				size: "large",
				type: "jacket",
			},
		]);
	});
});
