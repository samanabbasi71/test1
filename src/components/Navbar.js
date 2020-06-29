import React, { Component } from 'react'
import logo from '../images/logo.svg'
import Alibaba from '../images/alibaba.svg'
import classnames from "classnames";
import { Link } from 'react-router-dom'
import { FaPlane ,FaBusAlt, FaHotel, FaTrain, FaBabyCarriage, FaRegUser, FaChevronDown, FaPhoneAlt} from 'react-icons/fa'
import {BsChevronDown} from 'react-icons/bs'
import styled from 'styled-components';
import Headroom from 'react-headroom'



export default class Navbar extends Component {
    constructor(props){
        super(props)
        this.state = {
            airlineOpen: false,
            supportOpen: false,
            show: true,
            scrollPos: 0
          }
          this.handleScroll = this.handleScroll.bind(this);
    }
  // Adds an event listener when the component is mount.
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  // Hide or show the menu.
  handleScroll = () => {
    const { scrollPos } = this.state;
    this.setState({
      scrollPos: document.body.getBoundingClientRect().top,
      show: document.body.getBoundingClientRect().top > scrollPos
    });
  }

    handleAirlineMenu = () => {
        this.setState({
            supportOpen:false,
            airlineOpen:!this.state.airlineOpen
        })
    }

    handleSupportMenu = () => {
        this.setState({
            supportOpen:!this.state.supportOpen,
            airlineOpen:false
        })
    }
    render() {
        return (
            <React.Fragment>
                <Headroom>
                <StyledNavbar>
                    {/* <h1 className="hidden-xs hidden-sm seo-only">خرید آنلاین بلیط هواپیما ،قطار ،اتوبوس</h1> */}
                    <nav 
                    className="navbar"
                    id="navbar">
                    <div className="navbar-goto">
                        <Link to='/'  >
                            <img src={logo} alt="alibaba logo" width="50"
                            className="inline-block v-middle logo-img"
                            />
                            <div className="v-middle logo-text">
                                <img src={Alibaba} alt="" height="18"/>
                                {/* <img src={Alibaba} alt=""/> */}
                                <p className="logo-title m-0 w-bold">خرید بلیط هواپیما قطار اتوبوس</p>
                            </div>
                        </Link>
                    </div>
                        <ul className="main-navigation__list first-nav mr-4 ">
                            <li onClick={this.handleAirlineMenu} className="main-navigation__item m-2">
                                <Link  className="main-navigation__button">
                                    <span className="main-navigation__icon">
                                        <FaPlane />
                                    </span>
                                    <span className="mr-2 main-navigation__text">هواپیما</span>
                                    <span className="main-navigation__icon down mr-2">
                                        <BsChevronDown />
                                    </span>
                                </Link>
                                <ul className={this.state.airlineOpen ? "header-menu v-dropdown open" : "header-menu v-dropdown"}>
                                    <li>
                                        <Link to="/iran" className="dropdown-link">
                                            پرواز داخلی
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/iranout" className="dropdown-link">
                                            پرواز خارجی
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="line-border"></li>
                            {/* train */}
                            <li className="main-navigation__item m-2">
                                <Link to="/train-ticket" className="main-navigation__button">
                                    <span className="main-navigation__icon">
                                        <FaTrain />
                                    </span>
                                    <span className="mr-2 main-navigation__text">قطار</span>
                                    <span className="main-navigation__icon">
                                    </span>
                                </Link>
                            </li>
                            <li className="line-border"></li>
                            {/* bus */}
                            <li className="main-navigation__item m-2">
                                <Link to="/bus-ticket" className="main-navigation__button">
                                    <span className="main-navigation__icon">
                                        <FaBusAlt />
                                    </span>
                                    <span className="mr-2 main-navigation__text">اتوبوس</span>
                                    <span className="main-navigation__icon">
                                    </span>
                                </Link>
                            </li>
                            <li className="line-border"></li>
                            {/* tour */}
                            <li className="main-navigation__item m-2">
                                <Link to="/tour" className="main-navigation__button">
                                    <span className="main-navigation__icon">
                                        <FaBabyCarriage />
                                    </span>
                                    <span className="mr-2 main-navigation__text">تور</span>
                                    <span className="main-navigation__icon">
                                    </span>
                                </Link>
                            </li>
                            <li className="line-border"></li>
                            {/* hotel */}
                            <li className="main-navigation__item m-2">
                                <Link to="/hotel" className="main-navigation__button">
                                    <span className="main-navigation__icon">
                                        <FaHotel />
                                    </span>
                                    <span className="mr-2 main-navigation__text ">هتل</span>
                                    <span className="main-navigation__icon">
                                    </span>
                                </Link>
                            </li>
                        </ul>
                        <ul className="main-navigation__list mr-auto">
                            <li className="main-navigation__item">
                                <Link className="btn-order-follow">
                                <span>پیگیری خرید</span>
                                </Link>
                            </li>
                            <li className="main-navigation__item ">
                                <button type="button" className="main-navigation__button">
                                    <span className="d-none d-md-inline-block w-bold">ورود - ثبت نام</span>
                                    <FaRegUser className="user m-2"/>
                                </button>
                            </li>
                            <li className="line-border d-none d-md-inline-block">
                                
                            </li>
                            <li onClick={this.handleSupportMenu} className="main-navigation__item">
                                <button className="main-navigation__button">
                                    <span className="d-none d-md-inline-block w-bold">0215222833</span>
                                    <FaPhoneAlt className=" d-none d-md-inline-block mr-1 user"/>
                                    <BsChevronDown className=" m-2 d-none d-lg-inline-block down" />
                                </button>
                                <div className={this.state.supportOpen ? "v-dropdown  support pt-3 open" : "v-dropdown  support pt-3"}>
                                    <div className="support-top">
                                    <span className="text-center support-menu__title w-300 ">
                                        پشتیبانی
                                        <strong className="text-orange w-500 mx-2">24</strong>
                                        ساعته
                                    </span>
                                    <div className="py-2 text-center">
                                        <a  href="tel:0215222833" className="support-menu__number mt-2">
                                            021
                                            <span className="text-orange mx-1">-</span>
                                            5222833
                                        </a>
                                        <a  href="tel:0215222833" className="support-menu__number mt-2">
                                            021
                                            <span className="text-orange mx-1">-</span>
                                            9800000
                                        </a>
                                    </div>
                                    </div>
                                    <ul className="header-menu">
                                        <li>
                                            <Link to="/purchase-guide" className="dropdown-link" >
                                                راهنمای خرید بلیط
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/refund-guide/:guide" className="dropdown-link" >
                                                راهنمای استرداد بلیط
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/contact-us" className="dropdown-link" >
                                                تماس با ما
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/policy" className="dropdown-link" >
                                                قوانین و مقررات
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/flight-info" className="dropdown-link" >
                                                اطلاعات فرودگاهی
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </StyledNavbar>
                </Headroom>
            </React.Fragment>
        )
    }
}
const StyledNavbar = styled.div`
height: 4rem;
background-color: var(--mainWhite);
border-bottom: 1px solid var(--lightGrey);
box-shadow: 0 3px 4px 0 rgba(0,0,0,.28);
transition: top 0.3s ease;
`