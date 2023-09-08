const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const route = require("./routes");

app.use(cors({
    origin: ['http://localhost:3000'],
    credentials: true

}));

mongoose
  .connect("mongodb+srv://dsewwandi2001:dilki123@cluster0.imjicsi.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000
  })
  .then(() => console.log("MongoDB is  connected successfully"))
  .catch((err) => console.error(err));

app.listen(4001, () => {
  console.log(`Server is listening on port 4001`);
});
app.use(express.json());
app.use("/",route)