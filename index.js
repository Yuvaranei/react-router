import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import './index.scss'

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route path="/" component = {Home} />
            <Route path="/about" component = {About} />
            <Route path="/contact" component = {Contact} />
        </div>
    </BrowserRouter>, document.getElementById('container')
)