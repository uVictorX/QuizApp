import React, { useState } from 'react'

import './index.css'

const Home = () => {
  const questions = [
    {
      text: 'Who is CEO of SpaceX?',
      options: [
        { answerContent: 'Jeff Bezos', correct: false },
        { answerContent: 'Elon Musk', correct: true },
        { answerContent: 'Sundar Pichai', correct: false },
      ]
    }, {
      text: 'Who is CEO of Google?',
      options: [
        { answerContent: 'Sundar Pichai', correct: true },
        { answerContent: 'Joe Biden', correct: false },
        { answerContent: 'Jennifer Lopes', correct: false }
      ]
    }, {
      text: 'Who is the current president of United States?',
      options: [
        { answerContent: 'Donald Trump', correct: false },
        { answerContent: 'Satya Nadela', correct: false },
        { answerContent: 'Joe Biden', correct: true }
      ]
    }
  ]

  const [current, setCurrent] = useState(0)
  const [show, setShow] = useState(false)
  const [score, setScore] = useState(0)

  const clickCallback = (isCorrect) => {
    if (isCorrect == true) {
      setScore(score + 1)
    }

    const next = current + 1
    const nxt = current + 2
    if (nxt > questions.length) {
      //alert(`Its the end!\nYou scored ${score} out of ${questions.length} questions.`)
      setShow(true)
    } else {
      setCurrent(next)
    }
  }
  
  return (
    <div className='home'>
      {show ? (
          <div className='score'>
            <div className='text-area'>
              <h1 className='text'>You scored {score} out of {questions.length} questions!</h1>
            </div>
            <div className='button'>
              <button className='btn' onClick={() => {
            window.location.reload(true)
              }}>Retry</button>
            </div>
          </div>
      ) : (
          <div className='quiz'>
            <div className='question'>
              <h1 className='number'>Question {current + 1}<span className='min-font'>/{questions.length}</span></h1>
              <span className='text'>{questions[current].text}</span>
            </div>
            <div className='answer'>
              {questions[current].options.map((content) => (
                <button className='btn' onClick={() => clickCallback(content.correct)}>{content.answerContent}</button>
               ))}
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Home