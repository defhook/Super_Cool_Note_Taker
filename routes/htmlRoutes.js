const fs = require('fs');
const path = require('path');
const router = require('express').Router();


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/notes", (req, res) => {
  //rendering the html pages
  res.sendFile(path.join(__dirname, "./public/notes.html"));
}); 