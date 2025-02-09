//import React and component from react
import React, { Component } from 'react'
//import QuizQuestionButton for buttons
import QuizQuestionButton from './QuizQuestionButton.js'

//Create QuizQuestion class that extends Component and holds the instruction_text and answer_options
class QuizQuestion extends Component {
  constructor (props) {
    super(props)
    this.state = { incorrectAnswer :  false }
  }

  handleClick(buttonText) {
    if (buttonText === this.props.quiz_question.answer) {
       this.props.showNextQuestionHandler()
       this.setState((state) => {
        return {
          incorrectAnswer: false
        }
       })
    }
    this.setState((state) => {
      return {
        incorrectAnswer: true
      }
    })
  }

  render (){
    return (
      <main>
        <section>
          <p>{this.props.quiz_question.instruction_text}</p>
        </section>
        <section className="buttons">
          <ul>
            {this.props.quiz_question.answer_options.map((answer_option, index) => {
                return <QuizQuestionButton
                        key={index}
                        button_text={answer_option}
                        clickHandler={this.handleClick.bind(this)}
                        />
            })}
          </ul>
        </section>
        {this.state.incorrectAnswer ? <p className='error'> Sorry, that's not right</p> : null}
      </main>
    )
  }
}

export default QuizQuestion
