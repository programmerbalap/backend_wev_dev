const { roles } = require('../database/models');
const { users } = require('../database/models');
// const bcrypt = require('bcrypt');

const getRole = async (req, res) => {
  try {
    const response = await roles.findAll({
      attributes: ['id', 'name'],
    });
    res.status(200).json(response);
  } catch (err) {
    console.log(err.message);
  }
};

const deleteRole = async (req, res) => {
  const role = await roles.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (!role) return res.status(404).json({ msg: 'Role tidak tersedia' });
  try {
    await roles.destroy({
      where: {
        id: role.id,
      },
    });
    await users.destroy({
      where: {
        role: role.id,
      },
    });
    res.status(200).json({ msg: 'Role deleted!' });
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const createRole = async (req, res) => {
  try {
    const role = await roles.create({
      name: req.body.name,
    });
    res.status(201).json({ msg: 'Role created!', roles: role });
  } catch (err) {
    res.status(400).json(err.message);
  }
};
module.exports = { getRole, deleteRole, createRole };
