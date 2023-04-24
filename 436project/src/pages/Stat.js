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
function Stat(book){
    var maximum = 0

    var dictionary = {}

    for(var i = 0; i < book.length; ++i){
        if (!(book.author in key)){
            dictionary[book.author] = 1
        }
        else{
            dictionary[book.author] += 1
        }
    }
    
    var array = []
    for(var key in dictionary){
        if(dictionary[key] > maximum){
            array = []
            array.push(key)
        }
        if(dictionary[key] > maximum){
            array.push(key)
        }
    }

    var answer = ""
    for(var i = 0; i < array.length;++i){
        if(i === 0){
            answer = array[0]
            continue
        }
        else if(i == array.length-1){
            answer += " ,and " + answer[i]
        }
        else{
            answer += ", "+answer[i]
        }
    }



    return(
        <h1>The most popular author you are reading right now is : ${answer} with ${maximum}</h1>
    )
}
}
export default Stat
