// require equals import 
const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const db = require('./models');
const app = express();

// environment variable PORT or 3000 if unset
const port = process.env.PORT || 3000;

//comment 
app.use(express.json());
//comment 
app.use(cors());
//comment 
app.use(express.urlencoded({
  extended: true
}));

app.use((req, res, next) => {
  req.models = db.models;
  next();
});
//comment 
app.use('/',routes);
//comment 
db.connectDb().then(()=>{
  const listener = app.listen(port, () => {
    console.info(`Server is listening on port ${listener.address().port}.`);
  });
});