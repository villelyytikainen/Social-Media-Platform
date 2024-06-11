const sql = require("mssql");
// const Connection = require("tedious").Connection;

const config = {
    user: process.env.SM_DBUSER,
    password: process.env.SM_DBPASS,
    server: process.env.SM_DBSERVER,
    database: process.env.SM_DBNAME,
    options: {
        trustServerCertificate: true,
        trustedConnection: false,
        enableArithAbort: true,
        instancename: process.env.SM_INSTANCENAME,
    },
    port: 1433,
};

const connection = async () => {
    try {
        const pool = sql.connect(config);
        return pool;
    } catch (error) {
        console.log(error);
    }
};

module.exports = connection;
