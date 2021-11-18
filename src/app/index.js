const express = require(express)
const app = express()

//Database connection
const mysqlConnection = require("../app/DB/DB");

//settings
app.set('port',process.env.PORT || 3000);

//Middlewares
app.use(express.json());

//CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin",
"https://jaceldoradosfront.herokuapp.com&quot"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//Start Server
app.listen(app.get('port'),()=>{
  console.log("server on port", app.get('port') );
})
