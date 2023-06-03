const { books } = require('../database/models');
const { users } = require('../database/models');

const getBooks = async (req, res) => {
  try {
    const response = await books.findAll({
      attributes: ['id', 'judul', 'banyak'],
      include: [
        {
          model: users,
          as: 'users',
        },
      ],
    });
    res.status(200).json(response);
  } catch (err) {
    console.log(err.message);
  }
};

const createBooks = async (req, res) => {
  const { judul, banyak, userId } = req.body;
  try {
    const books = await books.create({
      judul: judul,
      banyak: banyak,
      userId: userId,
    });

    res.status(201).json({ msg: 'Books created!', books: books });
  } catch (errr) {
    res.status(400).json(errr.message);
  }
};

const deleteBooks = async (req, res) => {
  const book = await books.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (!book) return res.status(404).json({ msg: 'Book not found!' });

  try {
    await books.destroy({
      where: {
        id: book.id,
      },
    });
    res.status(200).json({ msg: 'Berhaasil dihapus!' });
  } catch (err) {
    res.status(400).json(err.message);
  }
};

module.exports = { getBooks, createBooks, deleteBooks };
