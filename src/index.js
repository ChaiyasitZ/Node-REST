require("dotenv").config(); // Load .env file

const express = require("express"); // Import express
const app = express(); // Make express app
const port = process.env.PORT || 5000; // Port from environment variable
 
app.get("/", (req, res) => { // When user hit root directory
  res.send("Hello World! Hello World! Hello World!"); // Send "Hello World!" to user
});

app.listen(port, () => { // Make server listen on some port
  console.log(`Example app listening at http://localhost:${port}`);
});
