import React, { Component } from 'react';
import Bars from 'react-bars';
import "../Theme/SkillBarChart.css";

class SkillBarChart extends Component {
	constructor(props){
		super(props);
		this.state={
			skills:[
				{label:'android', value:30, showValue: true, suffix: '%'},
				{label:'c', value:30, showValue: true, suffix: '%'},
				{label:'c#', value:20, showValue: true, suffix: '%'},								
				{label:'c++', value:40, showValue: true, suffix: '%'},
				{label:'java', value:85, showValue: true, suffix: '%'},
				{label:'javascript', value:30, showValue: true, suffix: '%'},				
				{label:'python', value:70, showValue: true, suffix: '%'},
				{label:'vhdl', value:50, showValue: true, suffix: '%'},
			]
		}
	}
  render() {
		return (
			<div id="skillbar-chart-component">
				<Bars data={this.state.skills} makeUppercase={true}/>
			</div>
    );
  }
}

export default SkillBarChart;
