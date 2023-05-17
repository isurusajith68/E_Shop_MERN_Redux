const app = require("./app");
const connectDatabase = require("./db/database");

//Hadling uncaught exceptions
process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION! Shutting down...");
  console.log(err.name, err.message);
  process.exit(1);
});

//config
if (process.env.NODE_ENV !== "PRODUCTION")
  require("dotenv").config({
    path: "config/.env",
  });

//connect to database
connectDatabase();

//create server
const server = app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

//Handling unhandled rejections
process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION! Shutting down...");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});


