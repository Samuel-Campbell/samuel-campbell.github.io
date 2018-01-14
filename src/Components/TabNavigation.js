import React, { Component } from 'react';
import '../Theme/TabNavigation.css';

class TabNavigation extends Component {
  render() {
		return (
			<div id="tab-navigation-component">
				<ul>
					<li>Home</li>
					<li>Skills</li>
					<li>About</li>
					<li>Contact</li>
				</ul>  
			</div>
    );
  }
}

export default TabNavigation;
