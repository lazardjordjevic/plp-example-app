const express = require("express");
const data = require("./db.json");
const cors = require("cors");

const app = express();

app.use(
	cors({
		origin: "http://localhost:3002",
	}),
);

app.get("/", (req, res) => {
	res.json(data);
});

app.get("/filters", (req, res) => {
	res.json(data.filters);
});

app.get("/labels", (req, res) => {
	res.json(data.labels);
});

app.get("/results", (req, res) => {
	console.log(req.query);

	if (!Object.keys(data).length) {
		res.json(data.results);
	}

	// if there is an array of search terms, use only the first one
	const searchTerm = removeAllWhiteSpacesAndLowerCase(
		(Array.isArray(req.query.search)
			? req.query.search[0]
			: req.query.search) || "",
	);

	// filters:
	const colors =
		(typeof req.query.color === "string"
			? [req.query.color]
			: req.query.color) || [];
	const types =
		(typeof req.query.type === "string" ? [req.query.type] : req.query.type) ||
		[];
	const sizes =
		(typeof req.query.size === "string" ? [req.query.size] : req.query.size) ||
		[];

	const tempRes = data.results.filter((el) => {
		return (
			checkIfInQueryArray(colors, el.color) &&
			checkIfInQueryArray(types, el.type) &&
			checkIfInQueryArray(sizes, el.size) &&
			(searchTerm
				? removeAllWhiteSpacesAndLowerCase(el.title).includes(searchTerm)
				: true)
		);
	});

	if (req.query.sort && req.query.sort === "price") {
		sortAlphabeticallyByPrice(tempRes, req.query.order || "asc");
	}

	res.json(tempRes);
});

app.listen(3001);

// helper functions:

const checkIfInQueryArray = (arr, item) => {
	return arr.length ? arr.includes(item) : true;
};

const removeAllWhiteSpacesAndLowerCase = (str) => {
	return str.toLowerCase().trim().replace(/\s/g, "");
};

const sortAlphabeticallyByPrice = (arrToSort, order) => {
	arrToSort.sort((a, b) => {
		if (order === "desc")
			return b.price - a.price || a.title.localeCompare(b.title);
		return a.price - b.price || a.title.localeCompare(b.title);
	});
};
