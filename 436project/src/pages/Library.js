import React, { useState } from 'react';

function Library() {
  const [books, setBooks] = useState([
    { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { title: '1984', author: 'George Orwell' },
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger' }
  ]);
  const [showAddBookForm, setShowAddBookForm] = useState(false);
  const [newBookTitle, setNewBookTitle] = useState('');
  const [newBookAuthor, setNewBookAuthor] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleDelete = (index) => {
    const updatedBooks = [...books];
    updatedBooks.splice(index, 1);
    setBooks(updatedBooks);
  };

  const handleAddBook = () => {
    setShowAddBookForm(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedBooks = [...books, { title: newBookTitle, author: newBookAuthor }];
    setBooks(updatedBooks);
    setShowAddBookForm(false);
    setNewBookTitle('');
    setNewBookAuthor('');
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>My Library</h1>
      <div>
        <input
          type="text"
          placeholder="Search books by title or author"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <ul>
        {filteredBooks.map((book, index) => (
          <li key={index}>
            {book.title} by {book.author}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
      {showAddBookForm ? (
        <form onSubmit={handleSubmit}>
          <label>
            Title:
            <input type="text" value={newBookTitle} onChange={(event) => setNewBookTitle(event.target.value)} />
          </label>
          <label>
            Author:
            <input type="text" value={newBookAuthor} onChange={(event) => setNewBookAuthor(event.target.value)} />
          </label>
          <button type="submit">Add Book</button>
        </form>
      ) : (
        <button onClick={handleAddBook}>Add Book</button>
      )}
    </div>
  );
}

export default Library;
