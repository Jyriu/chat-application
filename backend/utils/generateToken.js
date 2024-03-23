import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: "1d"
    })

    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days, MS
        httpOnly: true, // cookie is not accessible via client side JS
        sameSite:"strict", // csrf attack cross site request forgery
        secure: process.env.NODE_ENV !== 'development' // cookie only sent in https
    });
};

export default generateTokenAndSetCookie;