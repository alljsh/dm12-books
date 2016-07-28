var books = require('../models/books');

module.exports = {
  index: function (req, res, next) {
    if (req.query.rating) {
      var rating = parseInt(req.query.rating);
      var result = [];
      for (var index in books) {
        if (books[index].rating === rating) {
          result.push(books[index]);
        }
      }
      res.json(result);
    } else {
      res.json(books);
    }
  },

  show: function (req, res, next) {
    var index = parseInt(req.params.id);
    res.json(books[index]);
  },

  update: function (req, res, next) {
    var index = parseInt(req.params.id);
    books[index] = req.body;
    res.json(books);
  },

  create: function (req, res, next) {
    books.push(req.body);
    res.json(books[books.length -1]);
  },

  destroy: function (req, res, next) {
    var index = parseInt(req.params.id);
    books.splice(index, 1);
    res.sendStatus(204);
  }
};
