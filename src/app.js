import express from "express";
import handlebars from "express-handlebars";
//import viewrouter from "./routes/views.routes.js";
import __dirname from "./utils.js";
import viewRouter from "./routes/views.routes.js";


const app = express();
const PORT = 5000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//condigurar el engine
app.engine('hbs', handlebars.engine({
    extname:'hbs',
    defaultLayout:"main"
}));

//setear el motor
app.set('view engine', 'hbs');
app.set('views', `${__dirname}/views`);

//Carpeta publica
app.use(express.static(`${__dirname}/public`));



//Seteamos las vustas
app.use("/", viewRouter);

//levartar el server
app.listen(PORT,() => 
    console.log(`This server in on-line on Port:${PORT}`));
