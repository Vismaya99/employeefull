// Task1: initiate app and run server at 3000
const express=require('express');
const Bodyparser=require('body-parser');
const mongoose=require('mongoose');
const cors=require('cors');
const path=require('path');
 const  employeeModel  = require('./models/Users');
var app=new express();
// app.use(express.static(path.join(__dirname+'/dist/FrontEnd')));
app.use(Bodyparser.json());
app.use(Bodyparser.urlencoded({extended:false}));
app.use(cors()) ;

// Task2: create mongoDB connection 
mongoose.connect('mongodb+srv://vismayashankar:mymongoias@cluster0.kvq8zfx.mongodb.net/employeeDB?retryWrites=true&w=majority',{
    useNewUrlParser: true
});

//Task 2 : write api with error handling and appropriate api mentioned in the TODO below


app.post('/form',async(req,res)=>{
    console.log(req.body)
    var employee=new employeeModel(req.body);
  await  employee.save(
        (err,data)=>{
            if (err) {
                res.json({"status":"error","error":err})
            } else {
              res.json({"status":"success","data":data})  
            }
        }
    );
})




//TODO: get data from db  using api '/api/employeelist'

app.get('/',(req,res)=>{
    employeeModel.find((err,data)=>{
       if (err) {
           res.json({"status":"error","error":err})
       } else {
           res.json(data);
       }

       }
    )
   })




 

app.post('/login',async(req,res)=>{
    try {
        var result=await employeeModel.find(
            {
                $and:[{"username":req.body.username},{"password":req.body.password}]
            }
        )
        res.send({"data":result})
    } catch (error) {
        res.send({"status":"error","error":error})
    }
})
    

    










//TODO: delete a employee data from db by using api '/api/employeelist/:id'

app.delete('/delete',(req,res)=>{
   
    
    var id=req.params.id;
    employeeModel.deleteOne(
        {_id:id},(err,data)=>{
            if (err) {
                res.json({"status":"error","error":err})
            } else {
                res.json({"status":"deleted","data":data})
            }
        }
    )
})



//TODO: Update  a employee data from db by using api '/api/employeelist'
//Request body format:{name:'',location:'',position:'',salary:''}
app.put('/edit',(req,res)=>{
           
    var name=req.body.name;
    var data=req.body;
   employeeModel.findOneAndUpdate(
    {"name":name},data,(err,data)=>{
        if(err){
            res.json({"status":"error","error":err})
        }
        else{
            res.json({"status": "updated","data": data});
        }
    }
        
    )}
   ) 



app.listen(4000,()=>{
    console.log("server started");
});
