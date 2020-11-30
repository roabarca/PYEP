const express = require("express");
const cors = require('cors');
require("dotenv").config();
const app = express();
app.use(cors());
const verify = require("./routes/verifyToken");

app.use(express.json());

//app.use("/admin", require("./routes/adminRegister.js"));
app.use("/login", require("./routes/loginRoute.js"));
app.use("/analyst", verify.A, require("./routes/analistaRoute.js"));
app.use("/client", verify.C, require("./routes/clienteRoute.js"));

app.listen(4000, () => {
    console.log("El servidor esta corriendo")}
);
