import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from '../home'
import Calendar from '../calendar'
import ScrollToTop from './scrollToTop';


const App = () => (
    <div>
        <ScrollToTop>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/calendar" component={Calendar} />
                <Route component={NoMatch}/>
            </Switch>
        </ScrollToTop>
    </div>
)


const NoMatch = ({ location }) => (
    <div>
        <h2>404</h2>
        <h3>No url match found for</h3>
        <p><code>{location.pathname}</code></p>
    </div>
)

export default App
