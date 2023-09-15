const DB = require("../DB_connection.js")
const { Activity, Country } = DB;

exports.getActivities = async (req, res) => {        
    try {
        const activities = await Activity.findAll(                    //con este método realizo la consulta a la BD
            {
                include: [                                            //que se incluya en la consulta  
                    { model: Country, through: { attributes: [] } }   //los paises relacionados con la actividad
                ],
                order: [                                              //ordenar ascendente 
                    ['name', 'ASC']
                ]
            });
        return res.status(200).json(activities);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}