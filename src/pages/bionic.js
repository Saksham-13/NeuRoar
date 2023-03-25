import React, { useState } from 'react';
import Header from '@/components/header';
const BionicReading = () => {
  const [sentence, setSentence] = useState('');
  const [formattedWords, setFormattedWords] = useState(null);

  const handleInputChange = (event) => {
    setSentence(event.target.value);
  };

  const handleConvertClick = () => {
    const words = sentence.split(' ');

    const formattedWords = words.map((word, index) => {
      let boldCount = 0;
      const length = word.length;

      if (length == 1) {
        boldCount = 0;
      }
      else if (length <= 3) {
        boldCount = 1;
      } else if (length > 3 && length <= 6) {
        boldCount = 3;
      } else if (length >= 7 && length <= 10) {
        boldCount = 4;
      } else {
        boldCount = 5;
      }

      if (boldCount >= length) {
        return <span key={index} className=" text-center font-bold">{word}</span>;
      } else {
        return (
          <span key={index} className="w-2/3  text-center text-xl">
            <span className="font-bold">{word.slice(0, boldCount)}</span>
            {word.slice(boldCount)}
            {index !== words.length - 1 && <>&nbsp;</>}
          </span>
        );
      }
    });

    setFormattedWords(<div className="text-lg">{formattedWords}</div>);
  };

  return (
    <div className=' text-black  font-mono min-h-screen'
    style={{
        backgroundColor : "#0cbaba",
    backgroundImage: "linear-gradient(315deg, #0cbaba 0%, #380036 74%)"
    
        }}
    >
      <Header />

      <div className='mt-20 flex flex-col gap-4'>
      <h1 className='text-white text-4xl justify-center grid'>Bionic Reading</h1>
        <textarea
          className="block  border-gray-400 w-1/2 mx-auto focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg px-4 py-2 mb-4"
          rows="5"
          value={sentence}
          onChange={handleInputChange}
          placeholder="Enter a sentence to convert to Bionic Reading format..."
        ></textarea>

        <button
          onClick={handleConvertClick}
          className="bg-blue-500 hover:bg-blue-600 w-24 mx-auto text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Convert
        </button>
        <div className='mx-auto text-white'>
        {formattedWords}
        </div>
        
      </div>
    </div>
  );
};

export default BionicReading;