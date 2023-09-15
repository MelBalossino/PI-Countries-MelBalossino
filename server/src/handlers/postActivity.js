const DB = require("../DB_connection.js")
const { Activity, Country } = DB;

exports.postActivity = async (req, res) => {
    try {
        const { name, difficulty, duration, season, image, countries } = req.body;     

        if (!name || !difficulty || !season || !countries.length) {
            return res.status(400).json({
                error: {
                    message: "name, difficulty, duration, season and countries cannot be empty",
                    values: { ...req.body }
                }
            });
        }
        const [activity, created] = await Activity.findOrCreate({
            where: { name },
            defaults: {
                name,
                difficulty,
                duration,
                season,
                image
            }
        });
        if (!created) return res.status(403).json({ message: "That activity already exists" });
        await activity?.addCountries(countries);
        const activities = await Activity.findAll({
            include: [Country]
        });
        return res.status(200).json(activities);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}