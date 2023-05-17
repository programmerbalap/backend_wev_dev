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

let usersStatic = [
  {
    id: 1,
    name: 'Subhan',
    hobby: 'football',
  },
  {
    id: 2,
    name: 'Monica',
    hobby: 'Cookie',
  },
];

let dataUsers = [
  {
    user_id: 1,
    email: 'subhan@gmail.com',
    password: 'subhan123',
    role: 'admin',
  },
  {
    user_id: 2,
    email: 'monica@gmail.com',
    password: 'monica123',
    role: 'staff',
  },
  {
    user_id: 3,
    email: 'arisandi@gmail.com',
    password: 'arisandi123',
    role: 'supervisor',
  },
];

let checkData = (req, res, next) => {
  console.log(`Saya mengecek data ini : ${req.body}`);
  next();
};

app.use(checkData);

// Get All Users
app.get('/users', (req, res) => {
  res.json(usersStatic);
  console.log(usersStatic);
});

// Get users by id
app.get('/users/:id', (req, res) => {
  res.json(usersStatic[req.params.id - 1]);
  console.log(usersStatic[req.params.id - 1]);
});

// Add Users
app.post('/users', (req, res) => {
  let response = {
    id: 3,
    name: req.body.name,
    hobby: req.body.hobby,
  };
  usersStatic.push(response);
  res.json(usersStatic);
  console.log(usersStatic);
});

// Update Users by id
app.put('/users/:id', (req, res) => {
  let incomingUpdatedate = {
    id: req.params.id,
    name: req.body.name,
    hobby: req.body.hobby,
  };
  console.log(incomingUpdatedate);
  usersStatic[req.params.id - 1] = incomingUpdatedate;

  res.json(usersStatic[req.params.id - 1]);
  console.log(usersStatic[req.params.id - 1]);
});

// Delete Users By id
app.delete('/users/:id', (req, res) => {
  usersStatic.splice(req.params.id - 1, 1);
  res.status(204);
  res.send('Users delete succes');
});

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

  if (Object.keys(foundUser).length == 0) {
    response = {
      status: 'ERROR',
      message: 'User not Found',
    };
  }

  if (foundUser.password != password) {
    response = {
      status: 'ERROR',
      message: 'Password false',
    };
  }

  let jwt_payload = {
    user_id: foundUser.user_id,
  };

  let accessToken = jwt.sign(jwt_payload, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
  response = {
    accessToken: accessToken,
  };

  res.json(response);
});

app.listen(port, () => {
  console.log(`Aplikasi berjalan di port ${port}`);
});
