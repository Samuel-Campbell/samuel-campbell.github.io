import React, { Component } from 'react';
import '../Theme/TabNavigation.css';
import { Link } from 'react-router-dom';

class TabNavigation extends Component {
    render() {
        return (
            <div id="tab-navigation-component">
                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/skills'}>Skills</Link></li>
                    <li><Link to={'/about'}>About</Link></li>
                    <li><Link to={'/contact'}>Contact</Link></li>
                    <li><Link to={'/cv'}>CV</Link></li>
                </ul>  
            </div>
        );
    }
}

export default TabNavigation;
