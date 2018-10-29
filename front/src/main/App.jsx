import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'

import Home from '../components/home/Home'
import Logo from '../template/Logo'
import Nav from '../template/Nav'
import Footer from '../template/Footer'

export default props =>
    <div className="app">
        <Logo />
        <Nav/>
        <Home/>
        <Footer/>
    </div>