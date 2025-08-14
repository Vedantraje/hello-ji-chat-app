import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: "7d", // token valid for 7 days
  });

  // Set token as httpOnly cookie
  res.cookie("token", token, {
    httpOnly: true, //prevent XSS attacks cross-site scripting attacks
    secure: process.env.NODE_ENV === "production", // HTTPS only in production
    sameSite: process.env.NODE_ENV === "production" ? "strict" : "lax", // allow localhost cross-origin
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  });
};

export default generateTokenAndSetCookie;
