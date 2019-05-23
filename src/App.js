import React, { Component } from 'react';
import './App.css';
import AboutPage from './Pages/AboutPage.js'
import ContactUs from './Pages/ContactUs.js'
import Register from './Pages/Register.js'
import {BrowserRouter, Route, Link, Redirect} from 'react-router-dom';
import ComingSoon from './Pages/ComingSoon'
import OauthCallback from './Pages/OauthCallback'
import AppContext from './AppContext.js'
import Header from './Components/Header';
import Footer from './Components/Footer';
import Header1 from './Components/Header1';
import Footer1 from './Components/Footer1';
import Dashboard from './Pages/Dashboard'
import * as api from "./api"
import Home from "./Pages/Home"

class App extends Component {
  constructor () {
    super()
    this.state = {
      user: null
    }
  }
  //Runs everytime the page is loaded
  async componentWillMount(){
    try{
      const user = await api.get(`${api.URL}/me`)
      window.history.pushState(null,"",`${window.location.origin}/dashboard`)
      this.setState({user})
    } catch(e){    
    }
  }

  render() {
    console.log(this.state)
    return (
      //Provider is a Redux term that was transferred over with Context
      <AppContext.Provider value={{
        store: this.state,
        actions: {
          setUser: (user)=> this.setState({user})
        }
      }}>
        <BrowserRouter>
          <div>
            <Header1/>          
            {/*
            <Route exact path='/' render= {()=>(
              this.state.user ? <Home/> : <Redirect to="/coming-soon"/>
            )}/>
            */}
            <Route exact path='/' component={Home}/>
            <Route exact path='/coming-soon' component={ComingSoon}/>
            <Route exact path='/about' component={AboutPage}/>
            <Route exact path='/contact-us' component={ContactUs}/>
            <Route exact path='/register' component={Register}/>
            <Route exact path='/auth/google/callback' component={OauthCallback}/>
            <Route exact path='/dashboard' component={Dashboard}/>
            <Route exact path='/home' component={Home}/>
            <Footer1/>
          </div>
        </BrowserRouter>
      </AppContext.Provider>
    );
  }
}

export default App;


