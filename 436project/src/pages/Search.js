import React, { useState } from 'react';
import axios from 'axios';
const { Configuration, OpenAIApi } = require("openai");


const Search = () => {
  const [information, setInformation] = useState('');
  const [information2, setInformation2] = useState('');
  const [response, setResponse] = useState('');
  const [synopsis, setSynopsis] = useState('');

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
    console.log("This is the question: ",information)
    const question = "What real book does this sound like: " + information+ "?"
    try {
        const res1 = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: question,
            max_tokens: 100,
            temperature: 1,
        });
        const getsynopsis = "Give a synopsis of the following book " + res1.data.choices[0].text
        const res2 = await openai.createCompletion({
          model: "text-davinci-003",
          prompt: getsynopsis,
          max_tokens: 100,
          temperature: 1,
      });
      console.log(res1.data.choices[0].text);
      setResponse(res1.data.choices[0].text);
      setSynopsis(res2.data.choices[0].text)
    } catch (error) {
      console.error(error);
      setResponse('Sorry, we could not find an answer to your question.');
    }
  };

  const handleSubmit2 = async (e) => {
    e.preventDefault();
    console.log("This is the question: ",information)
    console.log("this is the previous response: ", response)
    const question = "What real book does this sound like: " + information+ "?" + response + "No that is not it. In that case it is "
    try {
      const res1 = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: question,
        max_tokens: 100,
        temperature: 1,
    });
    const getsynopsis = "Give a synopsis of the following book " + res1.data.choices[0].text
    const res2 = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: getsynopsis,
      max_tokens: 100,
      temperature: 1,
  });
  console.log(res1.data.choices[0].text);
  setResponse(res1.data.choices[0].text);
  setSynopsis(res2.data.choices[0].text)
    } catch (error) {
      console.error(error);
      setResponse('Sorry, we could not find an answer to your question.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter any details about the book" value={information} onChange={(e) => setInformation(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
      {/* <p>Get Many books</p>
      <form onSubmit={handleSubmit2}>
        <input type="text" placeholder="Enter any information about the book" value={information2} onChange={(e) => setInformation2(e.target.value)} />
        <button type="submit">Submit</button>
      </form> */}
      <p>{response}</p>
      <p>{synopsis}</p>
      <button onClick={handleSubmit2}>Not my book</button>
    </div>
  );
};
export default Search;
