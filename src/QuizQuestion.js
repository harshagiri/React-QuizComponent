//import React and component from react
import React, { Component } from 'react'
//import QuizQuestionButton for buttons
import QuizQuestionButton from './QuizQuestionButton.js'

//Create QuizQuestion class that extends Component and holds the instruction_text and answer_options
class QuizQuestion extends Component {

  render (){
    return (
      <main>
        <section>
        //Create a instruction_text area
          <p>{this.props.quiz_question.instruction_text}</p>
        </section>
        <section className="buttons">
          <ul>
          //list the answer_options
            <QuizQuestionButton button_text={this.props.quiz_question.answer_options[0]}/>
          </ul>
        </section>
      </main>
    )
  }
}

export default QuizQuestion
