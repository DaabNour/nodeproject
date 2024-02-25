const express = require('express');
const bodyParser = require('body-parser');
//const Sequelize = require('sequelize');
const sequelize = require('./models/databaseconf');
const UserController = require('./controllers/UserController');
const UserRoute = require('./routes/UserRouter');
const User = require('./models/User');



const app = express();
app.use(bodyParser.json());

app.use('/users', UserRoute);



sequelize.sync()
  .then(() => console.log('Tables created successfully'))
  .catch((err) => console.error('Error creating tables:', err));




app.listen(3000, function check(error) {
  if (error) {
    console.log("error...");
  } else {
    console.log("started..");
  }
});



