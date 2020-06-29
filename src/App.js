import React from 'react'
import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Switch , Route} from 'react-router-dom'
import Bus from './pages/Bus'
import Home from './pages/Home'
import Error from './pages/Error'
import HotelPage from './pages/HotelPage'
import Hotels from './pages/Hotels'
import IranOut from './pages/IranOut'
import Iran from './pages/Iran'
import Tour from './pages/Tour'
import Train from './pages/Train'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CopyRight from './components/CopyRight'
import HotelFilters from './pages/HotelFilters'
import Alert from './components/Alert'



function App() {
  return (
    <React.Fragment>
      <div className="site-wrapper">
      <Navbar />
      <div className="main">
      <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/iranout' component={IranOut} />
      <Route exact path='/iran' component={Iran} />
      <Route exact path='/train-ticket' component={Train} />
      <Route exact path='/bus-ticket' component={Bus} />
      <Route exact path='/tour' component={Tour} />
      <Route exact path='/hotel' component={Hotels} />
      <Route exact path='/:url/hotel-filters' component={HotelFilters} />
      <Route exact path='/hotel/:url/:slug' component={HotelPage} />
      <Route  component={Error} />
      </Switch>
      </div>
      <Footer />
      <CopyRight />
      </div>
    </React.Fragment>
  );
}

export default App;
