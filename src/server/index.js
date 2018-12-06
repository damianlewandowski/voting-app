const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('dist'));

// Mongoose part
// Set up default mongoose connection
const mongoDB = 'mongodb://admin:admin1@ds161939.mlab.com:61939/voting-app';
mongoose.connect(
  mongoDB,
  {
    useNewUrlParser: true
  }
);
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
// Get the default connection
const db = mongoose.connection;
// Create Schema
const { Schema } = mongoose;
const UserSchema = Schema({
  username: String,
  password: String,
  email: String
});

const Users = mongoose.model('users', UserSchema);

app.post('/api/user/create', (req, res) => {
  console.dir(req.body, { depth: null });
  const newUser = Users(req.body);
  newUser.save().then((res2) => {
    console.log(res2);
    console.log('hello');
  });
  res.json(req.body);
});

// Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.listen(8080, () => console.log('Listening on port 8080!'));
