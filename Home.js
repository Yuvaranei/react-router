import React from 'react'
import {Link} from 'react-router-dom'

export default class Home extends React.Component{
    render(){
        return (
            <div>
                <h1>React Router Examples!!</h1>
                <ul role="nav">
                    <li><Link to="/about" className='testLink'>About</Link></li>
                    <li><Link to="/contact" className='testLink'>Contact</Link></li>
                </ul>
            </div>
        )
    }
}