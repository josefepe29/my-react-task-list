const express = require("express");
const app = express();
const tasks = require("./Routes/tasks.routes.js");
const users = require("./Routes/users.routes");
require("dotenv").config();
const connectDB = require("./db.js");
const { validateHTTPMethods } = require("./auth/authentication.js");
const cors = require("cors");
const cookieParser = require("cookie-parser");

app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

//Conexion a la base de datos
connectDB();

//Variables de entorno
const PORT = process.env.PORT;

app.use(express.json());

//Middleware para validar metodos HTTP
app.use(validateHTTPMethods);

//Uso del router de las tareas
app.use("/api", tasks);
app.use("/api", users);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
