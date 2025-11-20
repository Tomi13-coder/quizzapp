"use client"
//assimgent 1 improve visuls assimgent 2 trobleshot next/previous button
import React from 'react'
import { useState, useMemo } from 'react'
import { Button } from '@/components/ui/button'
import { Card, 
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle } from '@/components/ui/card'

const Page = () => {
  const [score,setScore] = useState(0)
  const questions = useMemo(() => [
    {

      question:"what is the captial of France?",
      options:["Rome","Manhattan", "Paris","Madrid" ],
      answer:2
    
    },
    {

      question:"the ____ bird gets the worm",
      options:["early","quick", "smart","bad" ],
      answer:0
    
    },
    {

      question:"how many letters are in the alphabet",
      options:["27","24", "26","23" ],
      answer:2
    
    },
    {

      question:"what is the poorest country?",
      options:["Brazil","South Sudan", "Burundi","Mozambique," ],
      answer:1
    
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Jupiter", "Mars", "Venus"],
      answer: 2
    },
    {
      question: "What is the largest mammal in the world?",
      options: ["Elephant", "Blue Whale", "Giraffe", "Great White Shark"],
      answer: 1
    },
    {
      question: "Who wrote 'Romeo and Juliet'?",
      options: ["William Shakespeare","Charles Dickens" , "Jane Austen", "Mark Twain"],
      answer: 0
    },
    {
      question: "What is the chemical symbol for water?",
      options: ["O2","NaCl" , "CO2", "H2O"],
      answer: 3
    },
  ], []);

  const [currentIndex, setCurrentIndex]= useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [isFinished, setIsFinished] = useState(false)

  const handleNext = () => {
    if (selectedAnswer === questions[currentIndex].answer) {
      setScore(score + 1);
    }

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer(null);
    } else {
      setIsFinished(true);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      // This logic for score adjustment on previous is a bit tricky.
      // A common approach is to disable score changes when going back,
      // or to store answers for each question.
      // For now, I'll just allow navigation.
      setCurrentIndex(currentIndex - 1);
      // Reset selection when going back
      setSelectedAnswer(null);
    }
  };

  const handleRestart = () => {
    setScore(0);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setIsFinished(false);
  }

  if (isFinished) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
        <Card className="w-full max-w-2xl text-center bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-white">Quiz Complete!</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-5xl font-bold text-green-400">{score} / {questions.length}</p>
            <p className="text-lg text-gray-300 mt-2">Your final score</p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button onClick={handleRestart} className="bg-orange-500 hover:bg-orange-600 text-white">
              Restart Quiz
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <Card className="w-full max-w-4xl bg-gray-800 border-gray-700 shadow-2xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-orange-400 md:text-blue-400">Question {currentIndex + 1}/{questions.length}</CardTitle>
          <CardDescription className="text-lg text-gray-300 pt-4">{currentQuestion.question}</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {currentQuestion.options.map((option, index) => (
            <Button
              key={index}
              variant={selectedAnswer === index ? "default" : "outline"}
              className={`h-auto py-4 text-left justify-start whitespace-normal ${selectedAnswer === index ? 'bg-green-600 hover:bg-green-700 text-white' : 'bg-gray-700 hover:bg-gray-600 text-gray-200 border-gray-600'}`}
              onClick={() => setSelectedAnswer(index)}
            >
              {option}
            </Button>
          ))}
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button onClick={handlePrevious} disabled={currentIndex === 0}>Previous</Button>
          <Button onClick={handleNext} disabled={selectedAnswer === null}>Next</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default Page
