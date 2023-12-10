import jwt from "jsonwebtoken";

const requireSignIn = async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        if (!token) {
            return res.status(401).json({ message: "Authorization token is missing" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // If you need to pass the decoded token to the next middleware or route handlers:
        // req.user = decoded;

        next();
    } catch (err) {
        console.log(err);
        return res.status(401).json({ message: "Unauthorized" });
    }
};

export default requireSignIn;
