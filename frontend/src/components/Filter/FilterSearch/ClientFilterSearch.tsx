"use client";

import { useCallback, useRef, useState } from "react";
import { useLabelsContext } from "src/contexts/LabelsContext";
import style from "./FilterSearch.module.scss";
import type { ChangeEventHandler, MouseEventHandler } from "react";
import { useProductsContext } from "src/contexts/ProductsContext";
import { searchFilter } from "src/utils/searchFilter";
import type { ProductDataType } from "src/types/ProductsData";

export default function ClientFilterSearch() {
	const submitButtonRef = useRef<HTMLButtonElement>(null);
	const searchInputRef = useRef<HTMLInputElement>(null);
	const labelsContext = useLabelsContext();
	const productsContext = useProductsContext();

	const { searchByKeyword } = labelsContext;

	const handleSearchChange: ChangeEventHandler<HTMLInputElement> = useCallback(
		(event) => {
			productsContext.filterBySearch(event.target.value);
		},
		[productsContext],
	);

	const handleSubmit: MouseEventHandler<HTMLButtonElement> = useCallback(() => {
		productsContext.submitFilterSearch();
	}, [productsContext]);

	return (
		<div className={style["filter-input"]}>
			<h3 className={style["filter-input__title"]}>{searchByKeyword}</h3>
			<input
				className={style["filter-input__input-field"]}
				onChange={handleSearchChange}
				ref={searchInputRef}
				type="text"
			/>
			<button
				className={style["filter-input__button"]}
				onClick={handleSubmit}
				ref={submitButtonRef}
				type="button"
			>
				Submit
			</button>
		</div>
	);
}
