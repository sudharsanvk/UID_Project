const mongoose = require('mongoose')
const express = require('express')
const passport = require('passport')
const localstrategy = require('passport-local')
// const session = require('express-session')
const cors = require('cors')
const user = require('./models/userModel')
const bodyParser = require('body-parser')
const stud = require('./models/studentModel')


const app = express()
app.use(cors({
    methods:['GET','POST'],
    credentials: true 
  }))

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'application/json');

    next();
}

app.use(allowCrossDomain);


app.use(express.json())

app.use(express.urlencoded({extended:true}))

app.use(require("express-session")({
    secret:"secret",
    resave: false,
    saveUninitialized: true,
    cookie: {
     httpOnly: true,
     expires: Date.now()+1000*60*60*24*7,
     maxAge: 1000*60*60*24*7
    }
      
 }));

 app.use(passport.initialize());
 app.use(passport.session());
 
 passport.use(new localstrategy(user.authenticate()));
 
 passport.serializeUser(user.serializeUser());
 passport.deserializeUser(user.deserializeUser());
 
 app.use(bodyParser.urlencoded({extended:true}));

const dbUrl = 'mongodb://localhost:27017/busFee'
const connectDB=async()=>{await mongoose.connect(dbUrl)}


// app.use('/admin',(req,res,next)=>{
//     if (req.user) {
//         next();
//     } else {
//         res.redirect('http://localhost:3000/');
//     }
// })

app.post('/register', function(req,res){
    console.log("Hii")

    var newUser = new user({username:req.body.username,email:req.body.email});
    user.register(newUser,req.body.password, function(err,user){
        if(err){
            console.log(err);
        }
        passport.authenticate("local")(req,res, function(){
                console.log("Hii")
            });
       });  
});



app.post('/login',passport.authenticate('local',{failureRedirect:'http://localhost:3000/',successRedirect: 'http://localhost:3000/Home',}),async(req,res)=>{
})

app.post('/newStudent',async(req,res)=>{
    const data = new stud(req.body)
    data.save()
    console.log(data)
    res.redirect('http://localhost:3000/studentDetails')
})

app.get("/uid",async(req,res)=>{
    console.log(await req.user)
    res.json(await  req.user)
res.end();
})


app.get('/allDetails',async(req,res)=>{
    const data = await stud.find()
    res.json(data)
})


app.get('/student/:id',async(req,res)=>{
    console.log(req.params.id)
    const data = await stud.findById(req.params.id)
    console.log(data)
    res.json(data)
})

app.post('/update/:id',async(req,res)=>{
    const data = await stud.findByIdAndUpdate(req.params.id,{status:'yes'})
    console.log("first")
    res.redirect(`http://localhost:3000/studentData/${req.params.id}`)
})

app.post('/status',async(req,res)=>{
    console.log("first")
    const data = await stud.find({rollNo:req.body.rollNo});
    
    res.json(data);
})



connectDB().then(()=>{
    console.log("DB connected")
}).catch(()=>{
    console.log("DB not connected")
})








app.listen(4000,()=>{
    console.log(`Serving on port 4000`)
})