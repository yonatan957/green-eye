const expreess = require("express");
const dotenv = require("dotenv");
const { connectedToMongo } = require("./config/dbConfig");
const cookieParser = require("cookie-parser");


const app = expreess();
dotenv.config();
connectedToMongo();
app.use(expreess.json());
app.use(cookieParser());
app.use("/auth", require("./routes/authRouter"));
app.use("/user", require("./routes/userRouter"));
app.use("/greenEye", require("./routes/greenEyeRouter"));


app.listen(process.env.PORT|| 3003, () => {
    console.log(`server is running on port ${process.env.PORT}`);
})
