import React, { Component } from 'react';
import Bars from 'react-bars';
import "../Theme/SkillBarChart.css";

class SkillBarChart extends Component {
    constructor(props){
        super(props);
        this.state={
            primary_skills:[
                {label:'android', value:30, showValue: true, suffix: '%'},
                {label:'c', value:60, showValue: true, suffix: '%'},
                {label:'c#', value:70, showValue: true, suffix: '%'},								
                {label:'c++', value:40, showValue: true, suffix: '%'},
                {label:'java', value:70, showValue: true, suffix: '%'},
                {label:'javascript', value:30, showValue: true, suffix: '%'},				
                {label:'python', value:85, showValue: true, suffix: '%'},
                {label:'vhdl', value:45, showValue: true, suffix: '%'},
            ],
            secondary_skills:[
                {label:'boxing', value:50, showValue: true, suffix: '%'},
                {label:'fishing', value:30, showValue: true, suffix: '%'},
                {label:'golf', value:10, showValue: true, suffix: '%'},
                {label:'3d printing', value:40, showValue: true, suffix: '%'},
                {label:'cooking', value:60, showValue: true, suffix: '%'}
            ]
        }
    }
    render() {
        return (
            <div id="skillbar-chart-component">
                <h1>Primary Spec</h1>
                <Bars data={this.state.primary_skills} makeUppercase={true}/>
                <h1>Secondary Spec</h1>
                <Bars data={this.state.secondary_skills} makeUppercase={true}/>
            </div>
        );
    }
}

export default SkillBarChart;
