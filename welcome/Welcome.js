import React from 'react'
import { Link } from 'react-router-dom'

export default class Welcome extends React.Component {
    render() {
        return (
            <div>
                Welcome!!!!!!
                <ul role="nav">
                    <li><Link to="/welcome/greetMorning" className='testLink'>Greet Morning</Link></li>
                    <li><Link to="/welcome/greetNoon" className='testLink'>Greet Noon</Link></li>
                    <li><Link to={`${this.props.match.path}/greetEvening`} className='testLink'>Greet Evening</Link></li>
                </ul>   
            </div>
        )
    }
}