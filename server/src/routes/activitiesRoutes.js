const { Router } = require("express")
const { postActivity } = require ("../handlers/postActivity")
const { getActivities } = require ("../handlers/getActivities")

const activitiesRouter = Router();

activitiesRouter.get("/", getActivities);
activitiesRouter.post("/", postActivity);

module.exports = activitiesRouter;

