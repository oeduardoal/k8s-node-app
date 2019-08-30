const express = require("express");
const axios = require("axios");
const app = express();

app.get("/helth", async (req, res) => {
  const response = await axios.get(
    "http://www.mocky.io/v2/5d6026fc2f000050005f3b92"
  );
  return res.json(response.data);
});

app.listen(process.env.PORT || 3333);
