const express = require("express");
const app = express();
const PORT = 3000;

const missing = require("./data/persons.json");

app.get("/api/missing", (req, res) => {
	res.json(missing);
});

app.get("/api/missing/:id", (req, res) => {
	const personId = +req.params.id;
	const person = missing.find((p) => p.id === personId);

	if (person) {
		res.json(person);
	} else {
		res.status(404).json({ error: "Person not found" });
	}
});

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
