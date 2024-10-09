"use client";

import { useLabelsContext } from "src/contexts/LabelsContext";
import style from "./Header.module.scss";
import classNames from "classnames";

export default function ClientHeader() {
	const labelsContext = useLabelsContext();

	const { headline } = labelsContext;
	// console.log(labelsContext);

	// biome-ignore lint/complexity/useLiteralKeys: <explanation>
	return <div className={style["header"]}>{headline}</div>;
}
