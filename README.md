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

#Nested  Router using react-router-dom

<div>
    <Route path="/" component={Home} />
    <Route path="/welcome" component={Welcome}/>
		<Route path="/welcome/greetMorning" component={GreetMorning}/>
		<Route path="/welcome/greetNoon" component={GreetNoon}/>
		<Route path="/welcome/greetEvening" component={GreetEvening}/>
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
</div>

In this case, welcome route path has 3 links, so it can be redirect in the below way
<ul role="nav">
    <li><Link to="/welcome/greetMorning" className='testLink'>Greet Morning</Link></li>
    <li><Link to="/welcome/greetNoon" className='testLink'>Greet Noon</Link></li>
    <li><Link to={`${this.props.match.path}/greetEvening`} className='testLink'>Greet Evening</Link></li>
</ul>   
A dynamic updation of path
<li><Link to={`${this.props.match.path}/greetEvening`} className='testLink'>Greet Evening</Link></li>
