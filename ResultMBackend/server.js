const express = require("express");
const app = express();

const port = 3100;

// const mongoose = require('mongoose');

// mongoose.connect("mongodb+srv://Shushant:ShushantNagarro@cluster0.oxx5u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });

// const db = mongoose.connection;
// db.on("error",(error)=>console.log(error));
// db.once("open",()=> console.log("connected"));

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/meanDB', (err)=>{
    if(!err){
        console.log('Database Connection Successful')
    }else{
        console.log('Error in Connection' + err)
    }
})

app.set('view engine','ejs');

app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded());

var expresslayout = require('express-ejs-layouts');
app.use(expresslayout);
app.set('layout','layouts/layout');

const studentRoute = require("./routes/student")
const teacherRoute = require("./routes/teacher")
app.use("/student",studentRoute);
app.use("/teacher",teacherRoute);


app.get("/",(req,res) => {
    res.render("index");
});

app.listen(port,() =>{
    console.log(`App listening at http://localhost:${port}`);
});

app.use((req,res)=>{
    res.status(404).render('error',{title:'404'});
});

