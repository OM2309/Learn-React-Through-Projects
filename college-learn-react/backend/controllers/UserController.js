import UserModel from "../models/UserModel.js";
import bcrypt from "bcryptjs";

// Create/Register User
const UserRegister = async(req, res) =>{
 try{
    const {userName, userEmail, userPassword} = req.body;
    // validation
    if(!userName || !userEmail || !userPassword){
        return res.status(400).send({
            status: false,
            message:"Please Fill All Fields"
        })
    }
        // existing user
    //     const existingUser = await UserModel.findOne({userEmail})
    //     if(existingUser){
    //     return res.status(401).send({
    //     status:false,
    //      message:"user already exists"
    //     })
    // }

    //  Password Bcrypt
    const hashPassword = await bcrypt.hash(userPassword, 10);

    // save new user
    const user = new UserModel(
        {userName, userEmail, userPassword : hashPassword});
    await user.save();
    return res.status(201).send({
        status:true,
        message:"New User Created",
        user
    })
    }catch(err)
{
    console.log(err);
    return res.status(500).send({
        status:false,
        message:"Error in register callback",
        err,
    })
}
};

//Display/Get All Users
const UserDisplay = async(req, res) =>{
    try{
        const user = await UserModel.find({});
        if(user.length>0){
           res.status(200).send({
            status: true,
            count:user.length,
            message: "Get All Users Records",
            user,
           }) 
        } else{
              res.status(200).send({
                 status: "Success", 
                 message: "Records not found....",
                 userData,
            })}
   }catch(err)
    {
        console.log(err);
        return res.status(500).send({
            status:false,
            message: "Erron in Display All Users ",
            err
        })
    }

};

//Search User
const UserSearch = async(req, res) =>{
    try{
        console.log(req.params)
        const user = await UserModel.findOne({_id:req.params.id});
        console.log(user)
           res.status(200).send({
            status: true,
            count:user.length,
            message: "Get User Records",
            user,
           }) 
   }catch(err)
    {
        console.log(err);
        return res.status(500).send({
            status:false,
            message: "Erron in Display All Users ",
            err
        })
    }

};
const UserDelete = async(req, res) =>{
    try{
        const user = await UserModel.findByIdAndDelete({_id:req.params.id});
           res.status(200).send({
            status: true,
            message: "User Deleted",
            user,
           }) 
   }catch(err)
    {
        console.log(err);
        return res.status(500).send({
            status:false,
            message: "Erron in Display All Users ",
            err
        })
    }

};
const UserUpdate = async(req, res) =>{
    try{
        console.log(req.params)
        const user = await UserModel.findOne({_id:req.params.id});
        console.log(user)
           res.status(200).send({
            status: true,
            count:user.length,
            message: "Get User Records",
            user,
           }) 
   }catch(err)
    {
        console.log(err);
        return res.status(500).send({
            status:false,
            message: "Erron in Display All Users ",
            err
        })
    }

};

// User Login
const UserLogin = async(req, res) => {
    try{
        const {userEmail, userPassword} = req.body;
        // validation
        if(!userEmail || !userPassword){
            return res.status(401).send({
                status:false,
                message:"Please provide email or password"
            })
        }
        const user = await UserModel.findOne({userEmail});
        if(!userEmail)
        {
            return res.status(200).send({
                status: false,
                message: "Email is not registered"
            })
        } 
        // password
        const isMatch = await bcrypt.compare(userPassword, user.userPassword);
        if(!isMatch){
            return res.status(401).send({
                status: false,
                message: "Invalid userName or Password"
            })
        }
        return res.status(200).send({
            status: true,
            message: "Login Successfully", 
            user,
        })
    }catch(err)
    {
        console.log(err);
        return res.status(500).send({
            status:false,
            message:"Error in Login Callback",
            err,
        })
    }

};
export default {
    UserRegister,
    UserDisplay,
    UserLogin,
    UserSearch,
    UserUpdate,
    UserDelete
}