import React, { Component } from 'react';
import './Theme/App.css';
import TabNavigation from './Components/TabNavigation';
import SkillBarChart from './Components/SkillBarChart';
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Cv from './Components/Cv';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
    render() {
		return (
            <Router>
                <div className="App">				
                    <TabNavigation/>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/skills' component={SkillBarChart} />
                        <Route exact path='/about' component={About} />
                        <Route exact path='/contact' component={Contact} />
                        <Route exact path='/cv' component={Cv} />
                    </Switch>
                </div>	
            </Router>
        );
    }
}

export default App;
