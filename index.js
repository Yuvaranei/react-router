import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Welcome from './welcome/Welcome'
import GreetMorning from './welcome/GreetMorning'
import GreetNoon from './welcome/GreetNoon'
import GreetEvening from './welcome/GreetEvening'
import Topmenu from './Navbar/Topmenu'
import './index.scss'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css'

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route path="/home" component={Home} />            
            <Route path="/" component={Topmenu}/>
            <Route path="/welcome" component={Welcome}/>
            <Route path="/welcome/greetMorning" component={GreetMorning}/>
            <Route path="/welcome/greetNoon" component={GreetNoon}/>
            <Route path="/welcome/greetEvening" component={GreetEvening}/>
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
        </div>
    </BrowserRouter>, document.getElementById('container')
)