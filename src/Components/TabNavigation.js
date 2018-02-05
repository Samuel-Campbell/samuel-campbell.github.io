import React, { Component } from 'react';
import '../Theme/TabNavigation.css';
import { Link } from 'react-router-dom';

class TabNavigation extends Component {
    render() {
        return (
            <div id="tab-navigation-component">
                <Link to={'/'}>Home</Link>
                <Link to={'/skills'}>Skills</Link>
                <Link to={'/about'}>About</Link>
            </div>
        );
    }
}

export default TabNavigation;
