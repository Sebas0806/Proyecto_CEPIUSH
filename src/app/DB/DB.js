const mysql = require("mysql");
const { compileFunction } = require("vm");
require("dotenv").confing();

const mysqlConnection = {
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_DATABASE,
    multipleStatements: true,
};

function handledisconnect(conexion_db){0
    mysqlConnection.getConnection(function(err){
        if(err){
            console.log(" Error connectimg to db ",err);
            setTimeout(handledisconnect,2000)
        }else{
            console.log("DB is connected");
        }
    });

    connection.on('error',function(err){
        if(err.code === 'PROTOCOL_CONNECTION_LOST'){
            handledisconnect();
        }else{
            throw err;
        }
    });
}