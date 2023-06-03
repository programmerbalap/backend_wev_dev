const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

// get config vars
dotenv.config();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = 3030;

let dataUsers = [
  {
    id: 1,
    name: 'Subhan',
    email: 'subhan@gmail.com',
    password: 123,
    role: 'admin',
  },
  {
    id: 2,
    name: 'Monica',
    email: 'monica@gmail.com',
    password: 123,
    role: 'kasir',
  },
];

let checkData = (req, res, next) => {
  console.log(`Saya mengecek data ini : ${req.body}`);
  next();
};

app.use(checkData);

// AUTH
app.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  let response = {};
  let foundUser = {};
  for (let i = 0; i < dataUsers.length; i++) {
    if (dataUsers[i].email == email) {
      foundUser = dataUsers[i];
    }
  }

  // Cek data
  if (Object.keys(foundUser).length == 0) {
    response = {
      status: 'ERROR',
      message: 'User not Found',
    };
  }

  // validasi password
  if (foundUser.password != password) {
    response = {
      status: 'ERROR',
      message: 'Password false',
    };
  }

  let jwt_payload = {
    user_id: foundUser.id,
  };

  let accessToken = jwt.sign(jwt_payload, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
  response = {
    accessToken: accessToken,
    user_role: foundUser.role,
  };
  res.json(response);
});

app.listen(port, () => {
  console.log(`Aplikasi berjalan di port ${process.env.PORT}`);
});
