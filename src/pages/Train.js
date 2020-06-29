import React, { Component } from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import SvgTitles from '../components/SvgTitles'
import AboutTrain from '../components/AboutTrain'
import QuestionTrain from '../components/QuestionTrain'
import PanelIran from '../components/PanelIran'




export default class TrainTicket extends Component {
    render() {
        return (
            <React.Fragment>
                <Hero hero={"trainHero"} >
                    <Banner>
                        <PanelIran />
                    </Banner>
                </Hero>
                <SvgTitles />
                <AboutTrain />
                <QuestionTrain />
            </React.Fragment>
        )
    }
}
