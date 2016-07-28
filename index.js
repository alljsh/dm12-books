var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var booksController = require('./controllers/books_controller');

app.use(bodyParser.json());

app.use(function (req, res, next) {
  console.log('Juraic Park XXVII');
  next();
});

app.get('/books', booksController.index);
app.get('/books/:id', booksController.show);
app.put('/books/:id', booksController.update);
app.post('/books', booksController.create);
app.delete('/books/:id', booksController.destroy);

var port = 3000;
app.listen(port, function() {
  console.log('listening to port:', port);
});
