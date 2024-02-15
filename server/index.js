const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const EmployeeModel=require('./models/Employee')
const bccrypt =require('bcrypt')
const jwt = require('jsonwebtoken')
const cookieParser=require('cookie-parser')
const CourseModel=require("./models/Course")

const app = express()
app.use(express.json())

const corsConfig={
     origin:['https://free-codecamp-frontend.vercel.app/'],
    methods:["GET","POST","PUT","DELETE","OPTIONS"],
    credentials:true
}
app.use(cors(corsConfig));
//app.options("",(corsConfig))
app.use(cookieParser())
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://free-codecamp-frontend.vercel.app/');
    // Add other CORS headers as needed
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

mongoose.connect("mongodb+srv://gunjangyl99:sensation@cluster0.xbrqbfi.mongodb.net/?retryWrites=true&w=majority")


// const getList=async ()=>{
//     try{
//         const lists=await CourseModel.find();
//         console.log("Courses are",lists)
//     } catch(e){
//         throw new Error(e);
//     }
// }
// module.exports={getList}
app.get('/getUsers',(req,res)=>{
    CourseModel.find({})
    .then(courses=>{res.json(courses);console.log(courses)})
    .catch(err=>res.json(err))
})

const verifyUser=(req,res,next)=>{
    const token = req.cookies.token;
//     console.log(token);
if(!token){
    return res.json("The token was not available")
}else{
    jwt.verify(token,"jwt-secret-key",(err,decoded)=>{
        if(err) return res.json("Token is wrong")
        next()
    })
}
}

app.get('/content',verifyUser,(req,res)=>{
return res.json("Success")
})

app.get('/',(req,res)=>{
return res.json('Works')
})


app.post("/register", (req,res)=>{
    const {name,email,password}=req.body;
    EmployeeModel.findOne({email:email})
    .then(user=>{ 
        if (user){
            res.json("This email already exits!")
        }else{
            
            EmployeeModel.create(req.body)
            .then(employee=> res.json(employee))
            .catch(err=> res.json(err))
            const {name1,email1,password1}=req.body;
            const token=jwt.sign({email:email1},"jwt-secret-key",{expiresIn:'1d'})
            res.cookie("token",token)

        }
    })
})




app.listen(3001, async ()=>{
    console.log("Server is running");
    // await getList();
})
