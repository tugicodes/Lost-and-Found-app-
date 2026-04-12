const express = require ('express');
const cors = require ('cors'); //allows server and frontend to communicate

require ("dotenv").config ();

const connectDB = require ("./config/db");
const userRoutes = require ("./routes/userRoutes");
const loginRoute = require("./routes/login");
const signupRoute = require("./routes/signup");

const app = express();
const PORT = 5000;

//middleware
app.use(cors());
app.use(express.json());


//connect routes 
app.use("/api/login", loginRoute);
app.use("/api/signup", signupRoute);
app.use('/api/users', userRoutes);
app.use("/api/lostitems", require("./routes/lostItems"));

//connect database 
connectDB();

//test routes (not actually used)
app.get ('/', (req, res) =>{
   
    res.send('This is the Home page'); //response to the request

});

app.get('/about', (req,res) =>{
    res.send('This is the about page');

});

app.get ('/contact', (req,res) => {  
    res.send('0703531583');

}); 

app.get('/html', (req,res) => {
    res.send("<h1>Welcome to the HTML page</h1><p>This is a simple HTML response.</p>");

}); 

//starts server
app.listen (PORT, () => {

    console.log('Server is running on port ' + PORT);
});
