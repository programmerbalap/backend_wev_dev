const { users } = require('../database/models');
const { roles } = require('../database/models');
const bcrypt = require('bcrypt');

const getUsers = async (req, res) => {
  try {
    const response = await users.findAll({
      attributes: ['id', 'name', 'email', 'password'],
      include: [
        {
          model: roles,
          as: 'roles',
        },
      ],
    });
    res.status(200).json(response);
  } catch (err) {
    console.log(err.message);
  }
};

const createUser = async (req, res) => {
  const { name, email, password, confirmPassword, role } = req.body;

  const user = await users.findOne({
    where: {
      email: email,
    },
  });

  if (user) return res.status(200).json({ msg: 'Email sudah terdaftar!' });

  if (password === confirmPassword) {
    const salt = await bcrypt.genSalt();

    const hashPassword = await bcrypt.hash(password, salt);

    try {
      const user = await users.create({
        name: name,
        email: email,
        password: hashPassword,
        role: role,
      });
      res.status(201).json({ user: user, msg: 'Users created' });
    } catch (error) {
      res.status(400).json(error.massage);
    }
  } else {
    res.status(400).json({ msg: 'Confirm password false!' });
  }
};

const deleteUser = async (req, res) => {
  const user = await users.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (!user) return res.status(404).json({ msg: 'User tidak ditemukan!' });

  try {
    await users.destroy({
      where: {
        id: user.id,
      },
    });
    res.status(200).json({ msg: 'User deleted!' });
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};

module.exports = { getUsers, createUser, deleteUser };
