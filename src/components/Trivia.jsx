import React, { useEffect, useState } from 'react'
import useSound from 'use-sound'
import play from '../assest/assest/play.mp3'
import wrong from '../assest/assest/wrong.mp3'
import correct from '../assest/assest/correct.mp3'

const Trivia = ({data, questionNumber, setQuestionNumber, setClock}) => {
    const [question, setQuestion]=useState(null)
    const [selectedAnswer, setSelectedAnswer]=useState(null)
    const [className, setClassName]=useState('answer')
    const [letPlay]=useSound(play)
    const [correctAnswer]=useSound(correct)
    const [wrongAnswer]=useSound(wrong)

    useEffect(()=> {
        letPlay()
    },[letPlay])

    useEffect(() =>{
        setQuestion(data[questionNumber - 1])
    }, [data,questionNumber])

    const delay =(duration, callback) => {
        setTimeout(()=>{
            callback()
        }, duration)
    }


    const handleSubmit = (x) => {
        setSelectedAnswer(x)
        setClassName('answer active')
        delay(3000, () => setClassName(x.correct ? 'answer correct' : 'answer wrong'))


       delay(5000, () =>{
        if(x.correct){
            correctAnswer()
            setQuestionNumber((prev)=> prev + 1)
            setSelectedAnswer(null)
        }else{
            wrongAnswer()
            delay(1000, () =>{
                setClock(true);

            })
            
        }
       })
    }

  return (
    <div className='trivia'>
        <div className='question'>
            <p>{question?.question}</p>

        </div>
        <div className='answers'>
           {question?.answers.map((x)=>(
            <div key={x.text} className={selectedAnswer === x ? className:'answer'} onClick={()=> handleSubmit(x)}>{x.text}</div>
           ))}

        </div>
    </div>
  )
}

export default Trivia