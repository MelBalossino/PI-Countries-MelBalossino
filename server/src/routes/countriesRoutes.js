const { Router } = require ("express");
const { getCountries, getCountryById, getCountryByName } = require("../handlers/countriesHandler")

const countriesRouter = Router();

countriesRouter.get("/name", getCountryByName)
countriesRouter.get("/:id", getCountryById)
countriesRouter.get("/", getCountries)



module.exports = countriesRouter