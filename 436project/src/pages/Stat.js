import React from 'react'

function Stat(){
    const totalBooks = 123;
    const favoriteGenres = ['Mystery', 'Thriller', 'Fantasy'];
    const favoriteAuthors = ['Agatha Christie', 'Stephen King', 'J.K. Rowling'];
  
    return (
      <div>
        <h2>Profile Stats</h2>
        <p>Total number of books: {totalBooks}</p>
        <p>Favorite genres:</p>
        <ul>
          {favoriteGenres.map(genre => (
            <li key={genre}>{genre}</li>
          ))}
        </ul>
        <p>Favorite authors:</p>
        <ul>
          {favoriteAuthors.map(author => (
            <li key={author}>{author}</li>
          ))}
        </ul>
      </div>
    );
}
export default Stat