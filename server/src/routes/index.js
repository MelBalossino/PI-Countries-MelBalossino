const { Router } = require("express");
const countriesRouter = require ("./countriesRoutes")
const activitiesRouter = require ("./activitiesRoutes")

const server = Router();

server.use("/countries", countriesRouter);
server.use("/activities", activitiesRouter);

module.exports = server;
