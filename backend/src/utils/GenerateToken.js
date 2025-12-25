import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "30d" });

    // 1. Clear any legacy non-partitioned cookie to prevent conflicts
    if (process.env.NODE_ENV === "production") {
        res.cookie("jwt", "", {
            httpOnly: true,
            secure: true,
            sameSite: "none",
            path: "/",
            expires: new Date(0)
        });
    }

    // 2. Set the new correct partitioned cookie
    res.cookie("jwt", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
        path: "/",
        partitioned: true,
        maxAge: 30 * 24 * 60 * 60 * 1000
    });

    return token;
};