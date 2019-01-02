import express from "express";
import path  from "path";
import mongoose from "mongoose";
import routes from "./routes/apiroutes"
const PORT = process.env.PORT || 3001;

const app = express();

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }
app.use(routes)

// connection to mongoose:
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googleBooksDB");

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("database connected");
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });
  
  app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });