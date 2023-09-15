const server = require("./src/server");
const { conn } = require('./src/DB_connection.js');
const PORT = 3001;

//* SINCRONIZACIÓN P/ QUE LA BDD SE ACTIVE EN NUESTRO CÓDIGO CON EL MÉTODO SYNC
//* EJECUTAR EL LISTEN DEL SERVIDOR
conn.sync({ alter: true }).then(() => {            //force o alter
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})
}).catch(error => console.error(error))
