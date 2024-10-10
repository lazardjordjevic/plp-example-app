"use client";

import { useCallback, useRef } from "react";
import { useLabelsContext } from "src/contexts/LabelsContext";
import style from "./FilterSearch.module.scss";
import type { MouseEventHandler } from "react";
import { useNewProductsContext } from "src/contexts/NewProductsContext";

export default function ClientFilterSearch() {
	const submitButtonRef = useRef<HTMLButtonElement>(null);
	const searchInputRef = useRef<HTMLInputElement>(null);
	const labelsContext = useLabelsContext();
	const { submitSearch } = useNewProductsContext();

	const { searchByKeyword } = labelsContext;

	const handleSubmit: MouseEventHandler<HTMLButtonElement> = useCallback(() => {
		if (!searchInputRef.current) return;
		submitSearch(searchInputRef.current.value);
	}, [submitSearch]);

	return (
		<div className={style["filter-input"]}>
			<h3 className={style["filter-input__title"]}>{searchByKeyword}</h3>
			<input
				className={style["filter-input__input-field"]}
				// onChange={handleSearchChange}
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
