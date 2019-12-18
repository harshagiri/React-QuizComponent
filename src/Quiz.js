//import React and Component from react
import React, { Component } from 'react'
//import QuizQuestion from QuizQuestion file at same level as this file
import QuizQuestion from './QuizQuestion.js'
//import QuizEnd from QuizEnd
import QuizEnd from './QuizEnd.js'
//Declare a global variable that  will hold the JSON file which has questions and answers
let quizData = require('./quiz_data.json')

//Create a class Quiz that extends the React component
class Quiz extends Component {

//Create a default constructor that accepts the props
  constructor ( props ) {
    super( props )
    //Create a state that will hold the position of the quiz quesitons
    this.state = { quiz_position: 1 }
  }

  render () {
    const isQuizEnd = ((this.state.quiz_position - 1) === quizData.quiz_questions.length)
    return (
      //Render only if the questions are exhausted
      <div>
      {
        isQuizEnd ? <QuizEnd /> :
        //Render the quiz question that accepts the 1st quiz element as input
        //from quizData
        <QuizQuestion quiz_question={
          quizData.quiz_questions[this.state.quiz_position - 1]}
        />
      }
      </div>
    )
  }
}

//Expor the object Quiz so that it can imported in other files
export default Quiz
