import React, { useState } from 'react';
import axios from 'axios';

const SearchBar = () => {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(`https://api.openai.com/v1/answers?model=davinci&question=${question}`);
      setResponse(data.answers[0]);
    } catch (error) {
      console.error(error);
      setResponse('Sorry, we could not find an answer to your question.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter your question" value={question} onChange={(e) => setQuestion(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
      <p>{response}</p>
    </div>
  );
};

export default SearchBar;
