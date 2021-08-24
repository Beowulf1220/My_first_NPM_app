const suma = require("../index");
const assert = require("assert");

describe("Probar suma de dos números", () => {
	//Afirmamos que 5 + 7 = 12
	it("Cinco mas site son 12", () => {
		assert.equal(12,suma(5,7));
	});
	//Afirmamos que 5 + 7 no son 57
	it("Cinco mas siete no son 57", () => {
		assert.notEqual("57",suma(5,7));
	});
});