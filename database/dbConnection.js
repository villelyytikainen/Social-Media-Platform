const sql = require("mssql");
// const odbc = require("odbc");
const Connection = require("tedious").Connection;

//Local SQL Connection
// const config = {
//     user: process.env.SM_DBUSER,
//     password: process.env.SM_DBPASS,
//     server: process.env.SM_DBSERVER,
//     database: process.env.SM_DBNAME,
//     options: {
//         trustServerCertificate: true,
//         trustedConnection: false,
//         enableArithAbort: true,
//         instancename: process.env.SM_INSTANCENAME,
//     },
//     port: 1433,
// };



const config = {
    server: process.env.SMA_SERVER,
    port: process.env.SMA_PORT,
    database: process.env.SMA_DB,
    authentication: {
        type: process.env.SMA_SQL_AUTH_TYPE
    },
    options: {
        encrypt: true
    }
}

const connection = async () => {
    try {
        const pool = sql.connect(config);

        return pool;
    } catch (error) {
        console.log(error);
    }
};

module.exports = connection;
