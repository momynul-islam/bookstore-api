const path = require("path");

const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

const viewRouter = require("./routes/viewRoutes");
const authorRouter = require("./routes/authorRoutes");
const bookRouter = require("./routes/bookRoutes");
const errorController = require("./controllers/errorController");

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "pug");
app.set("views", "views");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", viewRouter);
app.use("/api/v1/authors", authorRouter);
app.use("/api/v1/books", bookRouter);

app.use("*", errorController.get404);

app.use(errorController.get500);

app.listen(port, () => console.log("Server running..."));
