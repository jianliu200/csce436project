import React, { useState } from 'react';
import axios from 'axios';
const { Configuration, OpenAIApi } = require("openai");


const Search = () => {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');

//   const config = new Configuration({
// 	apiKey: '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',
// });


let config = new Configuration({
    apiKey: "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",
  });
  
  delete config.baseOptions.headers['User-Agent'];
  
  //const openai = new OpenAIApi(configuration);
const openai = new OpenAIApi(config);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("This is the question: ",question)
    try {
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: question,
            max_tokens: 100,
            temperature: 1,
        });
      console.log(response.data.choices[0].text);
      setResponse(response.data.choices[0].text);
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
export default Search;
