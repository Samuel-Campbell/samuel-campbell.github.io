import React, { Component } from 'react';
import mcga from '../Assets/mcga.svg';
import procezeus from '../Assets/procezeus.png';
import mda from '../Assets/mda.jpg';
import ads from '../Assets/ads.png';

class Home extends Component {
    render() {
        return (
            <div>
				<h2>Home</h2>
				<table>
	                <tr>
						<td><img src={procezeus} alt="" width="30%" height="30%"/></td>
						<td>Description</td>
					</tr>
					<tr>
						<td><img src={mda} alt="" width="30%" height="30%"/></td>
						<td>Description</td>						
					</tr>				
					<tr>
						<td><img src={mcga} alt="" width="30%" height="30%"/></td>
						<td>Description</td>						
					</tr>
					<tr>
						<td><img src={ads} alt="" width="30%" height="30%"/></td>
						<td>Description</td>						
					</tr>	
				</table>
            </div>
        );
    }
}
export default Home;
