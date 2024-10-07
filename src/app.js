const expreess = require("express");
const dotenv = require("dotenv");


const app = expreess();
dotenv.config();

app.use(expreess.json());
app.use("/auth", require("./routes/authRouter"));
app.use("/user", require("./routes/userRouter"));
app.use("/greenEye", require("./routes/greenEyeRouter"));


app.listen(process.env.PORT|| 3003, () => {
    console.log(`server is running on port ${process.env.PORT}`);
})