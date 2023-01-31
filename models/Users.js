var Mongoose=require("mongoose");
const employeeSchema=Mongoose.Schema(
    { name:String,
    location:String,
    position:String,
    salary:String,
    username:String,
    password:String
}
);
var employeeModel=Mongoose.model("employees",employeeSchema);
module.exports=employeeModel;