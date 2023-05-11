const express = require('express');
const bodyParser = require('body-parser');

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

app.listen(port, () => {
  console.log(`Aplikasi berjalan di port ${port}`);
});
