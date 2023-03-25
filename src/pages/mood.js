import { useState } from 'react';
import Header from '@/components/header';
const questions = [
  {
    text: 'How would you rate your energy level right now?',
    options: [
      { text: 'High', mood: 'energized' },
      { text: 'Average', mood: 'content' },
      { text: 'Low', mood: 'tired' },
    ],
  },
  {
    text: 'Do you feel like you have accomplished something significant today?',
    options: [
      { text: 'Yes, I have', mood: 'accomplished' },
      { text: 'No, not really', mood: 'unproductive' },
    ],
  },
  {
    text: 'Have you experienced anything exciting or new recently?',
    options: [
      { text: 'Yes, I have', mood: 'excited' },
      { text: 'Not recently', mood: 'neutral' },
    ],
  },
  {
    text: 'Do you feel like you have a clear sense of direction or purpose in your life?',
    options: [
      { text: 'Yes, I do', mood: 'fulfilled' },
      { text: 'Not really', mood: 'uncertain' },
      { text: 'No, I don\'t', mood: 'disheartened' },
    ],
  },
  {
    text: 'How would you describe your current mood in one word?',
    options: [
      { text: 'Happy', mood: 'happy' },
      { text: 'Content', mood: 'content' },
      { text: 'Anxious', mood: 'anxious' },
      { text: 'Sad', mood: 'sad' },
    ],
  },
];

function MoodQuiz() {
  const [answers, setAnswers] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);

  function handleOptionSelect(option) {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [currentQuestion]: option.mood,
    }));
    if (currentQuestion === questions.length - 1) {
      const moodCounts = Object.values(answers).reduce(
        (counts, mood) => ({
          ...counts,
          [mood]: (counts[mood] || 0) + 1,
        }),
        {}
      );
      
      const sortedMoods = Object.entries(moodCounts).sort((a, b) => b[1] - a[1]);
      const mood = sortedMoods[0][0];
      alert(`Your current mood is ${mood}`);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  }

  return (
    <><Header /><div className=" h-screen mx-auto text-white flex flex-col px-4"
    style={{
        backgroundColor : "#0cbaba",
    backgroundImage: "linear-gradient(315deg, #0cbaba 0%, #380036 74%)"
    
        }}
    >
          <h1 className="text-3xl font-bold mb-4">Mood Quiz</h1>
          {questions.map((question, index) => (
              <div
                  key={index}
                  className={`mb-4 ${index === currentQuestion ? 'block' : 'hidden'}`}
              >
                  <h2 className="text-xl font-medium mb-2">{question.text}</h2>
                  {question.options.map((option, index) => (
                      <button
                          key={index}
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-2 ml-5"
                          onClick={() => handleOptionSelect(option)}
                      >
                          {option.text}
                      </button>
                  ))}
              </div>
          ))}

      </div></>
  );
}

export default MoodQuiz;