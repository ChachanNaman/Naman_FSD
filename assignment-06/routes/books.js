const express = require('express');
const router = express.Router();

// In-memory book database
let books = [
  { id: 1, title: 'The Alchemist', author: 'Paulo Coelho', genre: 'Fiction', year: 1988 },
  { id: 2, title: 'Clean Code', author: 'Robert C. Martin', genre: 'Technology', year: 2008 },
  { id: 3, title: 'Atomic Habits', author: 'James Clear', genre: 'Self-Help', year: 2018 }
];

let nextId = 4;

// GET all books
router.get('/', (req, res) => {
  res.json({ success: true, count: books.length, data: books });
});

// GET single book by ID
router.get('/:id', (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).json({ success: false, message: 'Book not found' });
  res.json({ success: true, data: book });
});

// POST create new book
router.post('/', (req, res) => {
  const { title, author, genre, year } = req.body;
  if (!title || !author) {
    return res.status(400).json({ success: false, message: 'Title and Author are required' });
  }
  const newBook = { id: nextId++, title, author, genre: genre || 'Unknown', year: year || null };
  books.push(newBook);
  res.status(201).json({ success: true, message: 'Book added successfully', data: newBook });
});

// PUT update a book
router.put('/:id', (req, res) => {
  const index = books.findIndex(b => b.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ success: false, message: 'Book not found' });
  const { title, author, genre, year } = req.body;
  books[index] = { ...books[index], title: title || books[index].title, author: author || books[index].author, genre: genre || books[index].genre, year: year || books[index].year };
  res.json({ success: true, message: 'Book updated successfully', data: books[index] });
});

// DELETE a book
router.delete('/:id', (req, res) => {
  const index = books.findIndex(b => b.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ success: false, message: 'Book not found' });
  const deleted = books.splice(index, 1);
  res.json({ success: true, message: 'Book deleted successfully', data: deleted[0] });
});

module.exports = router;