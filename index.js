import  express  from "express";
import Database  from './config/database.js';
import cors from "cors"
import Router from './routers/index.js';

let app = express()
let port = process.env.PORT || 3000;

const database = new Database();
database.connectToDatabase();


app.use(cors({
    origin: ['*']
}));

app.use(express.json({extended: true}))
app.use(express.urlencoded({extended: true}))


app.get('/', (req,res) => {
    res.send('<img  style="display: block; margin: auto;" git  src="https://preview.redd.it/e6i2fgwn1ng71.jpg?width=640&crop=smart&auto=webp&s=8eea2b644d2b00bd5110343bdeea1f75be3daf4c" />')
})

app.get(process.env.API_URL, (req, res) => {
    res.send('<img style="display: block; margin: auto;"  src="https://i.ytimg.com/vi/de7RCCa8HH0/sddefault.jpg" />')
});

app.use(process.env.API_URL, Router);

 
app.listen(port)
console.log('apps running on... ' + port);

 