import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Navigation from './Navigation';
import '../font-awesome';
 
const App = () => {
    return (
        <Router >
            <Navigation></Navigation>
            <Switch>
                <Route path='/home' component={ Home } ></Route>
                <Route path='/contact' component={ Contact } ></Route>
                <Route path='/' component={ Home } ></Route>
            </Switch>
        </Router> 
    );
}

export default App;
