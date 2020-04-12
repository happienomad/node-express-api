const PORT = process.env.PORT || 8080;
let express = require("express");

let app = express();

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(PORT, () => console.log(`Server started listening to ${PORT}`));
