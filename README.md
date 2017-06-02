# react-router
Using react-router-dom to implement routing
1. npm install react-router-dom
2. Use BrowserHistory to route paths
3. {Link} to redirect to the route path

#Sample
import {BrowserRouter, Route} from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route path="/" component = {Home} />
            <Route path="/about" component = {About} />
            <Route path="/contact" component = {Contact} />
        </div>
    </BrowserRouter>, document.getElementById('container')
)

#Link usage
<ul role="nav">
    <li><Link to="/about" className='testLink'>About</Link></li>
    <li><Link to="/contact" className='testLink'>Contact</Link></li>
</ul>