import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import flightPanel from './flightPanel'
import { FaPlane , FaPlaneDeparture , FaTrain, FaBabyCarriage, FaBed, FaBus} from 'react-icons/fa'

export default class Banner extends Component {

    state = {
        iconIsBig: true
    }

    changeClass = () => {
        this.setState({
            iconIsBig: !this.state.iconIsBig
        })
    }

    render() {
        return (
            <div className="panels">
                <div className="panel-container">
                    <ul className="panel-items">
                    <li className="panel-item col-xs-4 col-md-2">
                            <Link to="/hotel" className="panel-link" >
                                <div className="panel-icon__wraper">
                                    <FaBed className="panel-icon" />
                                </div>
                                <p className="panel-text">
                                    هتل
                                </p>
                            </Link>
                        </li>
                        <li className="panel-item col-xs-4 col-md-2">
                            <Link to="/train-ticket" className="panel-link" >
                                <div className="panel-icon__wraper">
                                    <FaTrain className="panel-icon" />
                                </div>
                                <p className="panel-text">
                                    قطار
                                </p>
                            </Link>
                        </li>
                        <li className="panel-item col-xs-4 col-md-2">
                                <Link to="/bus-ticket" className="panel-link" >
                                <div className="panel-icon__wraper">
                                    <FaBus className="panel-icon" />
                                </div>
                                <p className="panel-text">
                                    اتوبوس   
                                </p>
                            </Link>
                        </li>
                        <li className="panel-item col-xs-4 col-md-2">
                            <Link to="/tour" className="panel-link" >
                                <div className="panel-icon__wraper">
                                    <FaBabyCarriage className="panel-icon" />
                                </div>
                                <p className="panel-text">
                                    تور
                                </p>
                            </Link>
                        </li>
                        <li className="panel-item col-xs-4 col-md-2" >
                            <Link to="/iran" className="panel-link"  >
                                <div className="panel-icon__wraper">
                                    <FaPlane className="panel-icon" />
                                </div>
                                <p className="panel-text">
                                    پرواز داخلی
                                </p>
                            </Link>
                            <div className="panel-children">
                            </div>
                        </li>
                        <li className="panel-item col-xs-4 col-md-2">
                            <Link to="/iranout" className="panel-link" >
                                <div className="panel-icon__wraper">
                                    <FaPlaneDeparture className="panel-icon" />
                                </div>
                                <p className="panel-text">
                                    پرواز خارجی
                                </p>
                            </Link>
                        </li>
                    </ul>
                    <div className="search-panel__container">
                    {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}
