import React, { Component } from 'react'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import {BsChevronDown} from 'react-icons/bs'

export default class Questions extends Component {
    state = {
        ShowAnswer: false
    }

    handleShowAnswer = () => {
        this.setState({
            ShowAnswer: !this.state.ShowAnswer
        })
    }

    render() {
        const { question, answer} = this.props.question
        return (
            <div className="questions">
                <div className="questions-sm">
                <div className="question-container">
                    <AiOutlineQuestionCircle className="question-icon" />
                    <p className="question-title text-justify">{question}</p>
                    <div className="question-btn__992">
                    <BsChevronDown />
                    </div>
                </div>
                </div>
                <div className="questions-992" onClick={this.handleShowAnswer}>
                <div className="question-container">
                    <AiOutlineQuestionCircle className="question-icon" />
                    <p className="question-title text-justify">{question}</p>
                </div>
                <div className="question-btn__992">
                    <BsChevronDown />
                    </div>
                </div>
                <div className={this.state.ShowAnswer?"answer-container show-answer" : "answer-container" }>
                    <p className="answer-text text-justify">
                        {answer}
                    </p>
                </div>
                <div className="question-button__container">
                    <button onClick={this.handleShowAnswer} className="question-btn">
                        <span className="question-btn__text" >پاسخ</span>
                        <BsChevronDown />
                    </button>
                </div>                    
            </div>
        )
    }
}