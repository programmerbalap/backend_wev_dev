const MongoClient = require('mongodb').MongoClient;
const express = require('express');
const bodyParser = require('body-parser');

require('dotenv').config;

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = 3000;

MongoClient.connect('mongodb+srv://muhammadsubhan:subhanmongodb@cluster0.hvhocu3.mongodb.net/skilvul', (err, resut) => {
  if (err) return err;
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Koneksi gagal'));
db.once('open', function () {
  console.log('Koneksi berhasil');
});

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    timeseries: true,
  }
);

const User = mongoose.model('users', userSchema);

app.get('/users', (req, res) => {
  User.find({}, (error, Users) => {
    if (error) return res.send(error);
    res.json(Users);
  });
});

app.listen(port, () => {
  console.log(`Aplikasi berjalan di port ${port}`);
});
