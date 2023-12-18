import FacModel from "../models/FacModel.js";
import bcrypt from "bcryptjs";

// Create/Register Fac
const FacRegister = async(req, res) =>{
 try{
    const {facName, facEmail, facMobile, facPassword} = req.body;
    // validation
    if(!facName || !facEmail || !facMobile || !facPassword){
        return res.status(400).send({
            status: false,
            message:"Please Fill All Fields"
        })
    }
        // existing fac
        const existingFac = await FacModel.findOne({facEmail})
        if(existingFac){
        return res.status(401).send({
        status:false,
         message:"fac already exists"
        })
    }

    //  Password Bcrypt
    const hashPassword = await bcrypt.hash(facPassword, 10);

    // save new fac
    const fac = new FacModel(
        {facName, facEmail, facMobile, facPassword : hashPassword});
    await fac.save();
    return res.status(201).send({
        status:true,
        message:"New Fac Created",
        fac
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

//Display/Get All Fac
const FacDisplay = async(req, res) =>{
    try{
        const fac = await FacModel.find({});
        if(fac.length>0){
           res.status(200).send({
            status: true,
            count:fac.length,
            message: "Get All Fac Records",
            fac,
           }) 
        } else{
              res.status(200).send({
                 status: "Success", 
                 message: "Records not found....",
                             })}
   }catch(err)
    {
        console.log(err);
        return res.status(500).send({
            status:false,
            message: "Erron in Display All Fac ",
            err
        })
    }

};

// Fac Login
const FacLogin = async(req, res) => {
    try{
        const {facEmail, facPassword} = req.body;
        // validation
        if(!facEmail || !facPassword){
            return res.status(401).send({
                status:false,
                message:"Please provide email or password"
            })
        }
        const fac = await FacModel.findOne({facEmail});
        if(!facEmail)
        {
            return res.status(200).send({
                status: false,
                message: "Email is not registered"
            })
        } 
        // password
        const isMatch = await bcrypt.compare(facPassword, fac.facPassword);
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
    FacRegister,
    FacDisplay,
    FacLogin,
}