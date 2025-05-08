import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));

app.listen(port,()=>{
    console.log(`Server live on port ${port}`);
});

app.get("/", (req, res) => {
  res.render("index.ejs");
});

function checkPassword(userPassword, password){
  if (userPassword==password){
      return true;
  }
  else{
      return false;
  }
}

app.post("/permit", (req, res) => {
  const userPassword = req.body.password;
  const password = "ILoveProgramming";
  const valid = checkPassword(userPassword,password);
  if(valid){
      res.render("permit.ejs",{
        content: "API Response"
      });
  }
  else{
      res.render("index.ejs");
  }
});


const API_URL = "https://secrets-api.appbrewery.com/";

const theUsername = "hihello";
const thePassword = "hihello";
const theAPIKey = "e714ab60-9a2c-4219-b962-01ff6875d2fd";
const theBearerToken = "a6413fd3-03e8-4185-9f38-5736f952ff72";

app.get("/noAuth", async (req, res) => {
  try {
    const response = await axios.get(
      "https://secrets-api.appbrewery.com/random"
    );
    const result = response.data;
    console.log(result);
    res.render("permit.ejs", { content: JSON.stringify(result) });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("permit.ejs", {
      error: error.message,
    });
  }
});

app.get("/basicAuth", async (req, res) => {
  try {
    const response = await axios.get(
      "https://secrets-api.appbrewery.com/all?page=2",
      {
        auth: {
          username: theUsername,
          password: thePassword,
        },
      }
    );
    const result = response.data;
    console.log(result);
    res.render("permit.ejs", { content: JSON.stringify(result) });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("permit.ejs", {
      error: error.message,
    });
  }
});

app.get("/apiKey", async (req, res) => {
  try {
    const response = await axios.get(
      "https://secrets-api.appbrewery.com/filter",
      {
        params:{
          score: 5,
          apiKey: theAPIKey,
        }
      }
    );
    const result = response.data;
    console.log(result);
    res.render("permit.ejs", { content: JSON.stringify(result) });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("permit.ejs", {
      content: null,
      error: error.message,
    });
  }
});

app.get("/bearerToken", async (req, res) => {
  try {
    const response = await axios.get(
      "https://secrets-api.appbrewery.com/secrets/2",
      {
        headers:{
          Authorization: `Bearer ${theBearerToken}`,
        }
      }
    );
    const result = response.data;
    console.log(result);
    res.render("permit.ejs", { content: JSON.stringify(result) });
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("permit.ejs", {
      content: null,
      error: error.message,
    });
  }
});
