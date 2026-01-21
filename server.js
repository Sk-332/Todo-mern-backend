const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// import routes
const taskRoutes = require("./routes/taskRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use("/api/tasks", taskRoutes);
app.use("/api/auth", authRoutes);
//Connect to MONGODB 
mongoose.connect(process.env.MONGODB_URI) 
.then(()=> console.log('Mongodb Connected'))
.catch(err => console.log(err))


// Routes
//app.get: Setup a router handle for HTTP GET request.
// "/": Define the route path responding to root URL
// (req, res)=>{...} An arrow function handling the req and constructing the response.
//res.send("Hello world")  send a message Hello world as the response when route is accessed.
app.get("/", (req, res)=>{
     res.send("API is running");
});



//Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
   console.log(`Server is running on ${PORT}`);
});