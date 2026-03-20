const express = require ('express');
const cors = require ('cors'); //allows server and frontend to communicate

require ("dotenv").config ();

const connectDB = require ("./config/db");
const userRoutes = require ("./config/userRoutes");

const app = express();
const PORT = 5000;

//connect database 
connectDB();

//middleware
app.use(cors());
app.use(express.json());

//routes
app.use('/api/users', userRoutes);

app.get ('/', (req, res) =>{
   
    res.send('This is the Home page'); //response to the request

});

app.get('/about', (req,res) =>{
    res.send('This is the about page');

});

app.get ('/contact', (req,res) => {  
    res.send('0703531583');

}); 

app.listen (PORT, () => {

    console.log('Server is running on port ' + PORT);
});

app.get('/html', (req,res) => {
    res.send("<h1>Welcome to the HTML page</h1><p>This is a simple HTML response.</p>");

});
