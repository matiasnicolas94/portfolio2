const express = require('express')
const app = express();
//para poder usar variables globales
require('dotenv').config();
//configuracion de handlebars
const {create} = require('express-handlebars')
const hbs = create({
    extname:".hbs",
    helpers: require('./vistas/helpers/handlebars')
});
//se informa que el motor de plantillas es handlebars
app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");
app.set("views", "./vistas");

//variables locales
app.use((req,res, next)=>{
    res.locals.ejemplo_local = "el pepe cumpleañero";
    next();
});

//se configuran las rutas estaticas
app.use(express.static(__dirname + "/assets"));

//se registran las rutas
app.use("/", require('./routes/routes'));

app.listen(process.env.PORT, ()=>{
    console.log('trabajando desde express')
});