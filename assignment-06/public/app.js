const API = '/api/books';

async function fetchBooks() {
  const res = await fetch(API);
  const data = await res.json();
  const container = document.getElementById('book-list');

  if (!data.data.length) {
    container.innerHTML = '<p class="loading">No books found.</p>';
    return;
  }

  container.innerHTML = `<div class="books-grid">
    ${data.data.map(b => `
      <div class="book-card">
        <div class="book-id">ID: ${b.id}</div>
        <div class="book-title">${b.title}</div>
        <div class="book-author">by ${b.author}</div>
        <div class="book-meta">
          ${b.genre ? `<span>${b.genre}</span>` : ''}
          ${b.year  ? `<span>${b.year}</span>`  : ''}
        </div>
      </div>
    `).join('')}
  </div>`;
}

async function addBook() {
  const title  = document.getElementById('title').value.trim();
  const author = document.getElementById('author').value.trim();
  const genre  = document.getElementById('genre').value.trim();
  const year   = document.getElementById('year').value.trim();

  if (!title || !author) return showToast('Title and Author are required', 'error');

  const res = await fetch(API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, author, genre, year: year ? parseInt(year) : null })
  });

  const data = await res.json();
  if (data.success) {
    showToast('Book added successfully!', 'success');
    ['title','author','genre','year'].forEach(id => document.getElementById(id).value = '');
    fetchBooks();
  } else {
    showToast(data.message, 'error');
  }
}

async function updateBook() {
  const id     = document.getElementById('update-id').value.trim();
  const title  = document.getElementById('update-title').value.trim();
  const author = document.getElementById('update-author').value.trim();
  const genre  = document.getElementById('update-genre').value.trim();

  if (!id) return showToast('Book ID is required', 'error');

  const res = await fetch(`${API}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, author, genre })
  });

  const data = await res.json();
  if (data.success) {
    showToast('Book updated!', 'success');
    ['update-id','update-title','update-author','update-genre'].forEach(id => document.getElementById(id).value = '');
    fetchBooks();
  } else {
    showToast(data.message, 'error');
  }
}

async function deleteBook() {
  const id = document.getElementById('delete-id').value.trim();
  if (!id) return showToast('Enter a Book ID to delete', 'error');

  const res = await fetch(`${API}/${id}`, { method: 'DELETE' });
  const data = await res.json();

  if (data.success) {
    showToast('Book deleted!', 'success');
    document.getElementById('delete-id').value = '';
    fetchBooks();
  } else {
    showToast(data.message, 'error');
  }
}

function showToast(msg, type = 'success') {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.className = `show ${type}`;
  setTimeout(() => toast.className = '', 2800);
}

fetchBooks();
