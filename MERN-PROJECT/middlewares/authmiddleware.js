import JWT from "jsonwebtoken";

// Protected routes token

export const requireSignIn = async (req, res, next) => {
    try{
        const decode = JWT.verify(req.headers.authorization, process.env.JWT_SECRET);
        next()
    }
    catch (err){
        console.log(err);
    }
};
