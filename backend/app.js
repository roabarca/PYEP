const express = require("express");
const cors = require('cors');
const app = express();
const verify = require("./routes/verifyToken");

require("dotenv").config();

app.enable("trust proxy");
app.use(cors());
app.use(express.json());


//app.use("/admin", require("./routes/adminRegister.js"));
app.use("/login", require("./routes/loginRoute.js"));
app.use("/analyst", require("./routes/analistaRoute.js"));
app.use("/client", require("./routes/clienteRoute.js"));
app.use("/ProjectManager", require("./routes/jefedeproyectoRoute.js"));
app.use("/ExternalDeveloper", require("./routes/deRoute.js"));
app.use("/InternalDeveloper", require("./routes/diRoute.js"));

app.listen(4000, () => {
    console.log("El servidor esta corriendo")}
);
