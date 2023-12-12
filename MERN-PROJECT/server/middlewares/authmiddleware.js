import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";

const requireSignIn = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res
        .status(401)
        .json({ message: "Authorization token is missing" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // If you need to pass the decoded token to the next middleware or route handlers:
    req.user = decoded; // not complusary but 

    next();
  } catch (err) {
    console.log(err);
    return res.status(401).json({ message: "Unauthorized" });
  }
};

const isAdmin = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id);
    if (user.role !== 1) {
      return res.status(401).send({
        success: false,
        message: "Unauthrized access",
      });
    }
    next();
  } catch (err) {
    console.log(err);
  }
};

export { requireSignIn, isAdmin };



/* 
req = {
  headers: {},
  body: {},
  config: {},
  // user: {},
}
*/