const express = require('express')
const app = express();
const session = require('express-session');
//para poder usar variables globales
require('dotenv').config();
//para csrf
const csrf = require('csurf');

//configuracion de sesiones
app.use(
    session(
        {
            secret:process.env.SECRETO,
            resave:false,
            saveUninitialized:false,
            name:"secret-name",
            cookie:
            {
                expires:600000
            }


        }
    )
);
//Habilitamos para formulario
app.use(express.urlencoded({extended:true}));
//inicializar csrf
app.use(csrf());
//configuracion de handlebars
const {create} = require('express-handlebars');
const csurf = require('csurf');
const hbs = create({
    extname:".hbs",
    helpers: require('./vistas/helpers/handlebars'),
    partialsDir: ['vistas/componentes']
});
//se informa que el motor de plantillas es handlebars
app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");
app.set("views", "./vistas");

//variables locales
app.use((req,res, next)=>{
    res.locals.ejemplo_local = "el pepe cumpleañero";
    res.locals.csrfToken = req.csrfToken();
    next();
});

//se configuran las rutas estaticas
app.use(express.static(__dirname + "/assets"));

//se registran las rutas
app.use("/", require('./routes/routes'));

//personlizar pagina 404
app.use(function(req, res){
    res.status(404).render("error/404", {tituloPagina: "Pagina no encontrada"})
})

app.listen(process.env.PORT, ()=>{
    console.log('trabajando desde express')
});