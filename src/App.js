import React, { Component } from 'react';
import './Theme/App.css';
import TabNavigation from './Components/TabNavigation';
import SkillBarChart from './Components/SkillBarChart';
import About from './Components/About';
import Home from './Components/Home';
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
                    </Switch>
                </div>	
            </Router>
        );
    }
}

export default App;
