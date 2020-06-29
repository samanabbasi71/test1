import React, { Component } from 'react'
import {flightQuestion} from '../QuestionData'
import Questions from './Questions'

export default class QuestionFlight extends Component {
    state = {
        questions: flightQuestion
    }
    render() {
        const {questions} = this.state
        return (
            <section className="question-section">
                <div className="flight-questions">
                    <div className="flight-questions__title--container">
                    <h2 className="flight-questions__title text-center">پرسش های شما</h2>
                    <span className="flight-questions__title--border mx-auto my-3"></span>
                    </div>
                {
                    questions.map(question => {
                        return <Questions key={question.id} question={question} />
                    })
                }
                </div>
            </section>
        )
    }
}
