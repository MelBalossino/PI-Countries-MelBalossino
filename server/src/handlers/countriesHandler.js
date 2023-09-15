const axios = require("axios")
const { Op } = require("sequelize")
const { conn } = require("../DB_connection")
const { Country, Activity } = conn.models


exports.getCountries = async (req, res) => {
    try {
        const bdCountries = await Country.findAll();      //obtener los paises de la BD local
        if (bdCountries.length !== 0) {                   //si la BD local tiene paises, los devolvemos  
            return res.status(200).json(bdCountries)
        }

        const { data } = await axios("http://localhost:5000/countries");  //si no hay paises en la BD local, los solicitamos a la API
        const countriesToInsert = []                                      //aca voy a guardar solo los paises que NO tengo, para evitar que haya repeticion      

        for (const country of data) {                                     //con este for of voy a verificar si los paises que tengo en la BD (el id) coincide con los que tengo para agregar   
            const existingCountry = bdCountries.find((c) => c.id === country.cca3);


            if (!existingCountry) {                                         //si no existen en la BD los pusheo al arreglo      
                countriesToInsert.push({
                    id: country.cca3,                                        // id formato tres letras    
                    name: country.name.common,
                    flag: country.flags.svg,                                 //bandera en formato svg  
                    continent: country.continents[0],                        //info en un array   
                    capital: country.capital ? country.capital[0] : "",
                    subregion: country.subregion ? country.subregion : "",
                    area: country.area,
                    population: country.population
                })
            }
        }
        if (countriesToInsert.length > 0) {                                   //verifico si hay algo para insertar
            await Country.bulkCreate(countriesToInsert);                      //almacenar en la BD local
        } return res.status(200).json(countriesToInsert);                     //devuelvo los paises obtenidos de la API
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}



exports.getCountryByName = async (req, res) => {
    const { name } = req.query;                       // obtener el parametro name de la consulta a la URL por query
    try {
        const countries = await Country.findAll({     //buscamos los que coincidan con el name
            where: {                                  //objeto que define las condiciones de busqueda en la BD
                [Op.or]: [                            //arreglo con condiciones de busqueda 
                    { name: { [Op.iLike]: `%${name}%` } }, // Búsqueda insensible a mayúsculas y minúsculas.
                    { name: { [Op.like]: `%${name}%` } }   // Búsqueda sensible a mayúsculas y minúsculas.
                ]
            }
        });

        if (!countries || countries.length === 0) {      //si no se encuentran 
            return res.status(404).json({ message: "Country not found" });
        }

        return res.status(200).json(countries)           //si se encuentran
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}



exports.getCountryById = async (req, res) => {
    const { id } = req.params;                                      //obtener el parametro id por params
    try {
        const country = await Country.findByPk(id.toUpperCase(), {  //busqueda por clave primaria
            include: {
                model: Activity, through: { attributes: [] },
            }
        })
        if (country) return res.json(country)
        return res.status(404).json({
            error: {
                message: "Country doesn't exist",
                values: { ...req.params }
            }
        })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}






