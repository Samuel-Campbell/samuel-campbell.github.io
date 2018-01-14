import React, { Component } from 'react';
import './Theme/App.css';
import TabNavigation from './Components/TabNavigation';
import SkillBarChart from './Components/SkillBarChart';

class App extends Component {
    render() {
        return (
            <div className="App">				
                <TabNavigation/>
                <SkillBarChart/>
            </div>	    
        );
    }
}

export default App;
