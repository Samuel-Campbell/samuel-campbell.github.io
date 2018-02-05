import React, { Component } from 'react';
import Bars from 'react-bars';
import "../Theme/SkillBarChart.css";

class SkillBarChart extends Component {
    constructor(props){
        super(props);
        this.state={
            primary_skills:[
                {label:'android', value:0, showValue: true, suffix: '%', barColor:'rgb(255, 0, 0)'},
                {label:'c', value:0, showValue: true, suffix: '%', barColor:'rgb(255, 0, 0)'},
                {label:'c#', value:0, showValue: true, suffix: '%', barColor:'rgb(255, 0, 0)'},	
                {label:'c++', value:0, showValue: true, suffix: '%', barColor:'rgb(255, 0, 0)'},
                {label:'java', value:0, showValue: true, suffix: '%', barColor:'rgb(255, 0, 0)'},
                {label:'javascript', value:0, showValue: true, suffix: '%', barColor:'rgb(255, 0, 0)'},
                {label:'python', value:0, showValue: true, suffix: '%', barColor:'rgb(255, 0, 0)'},
                {label:'vhdl', value:0, showValue: true, suffix: '%', barColor:'rgb(255, 0, 0)'},
            ],
            secondary_skills:[
                {label:'boxing', value:0, showValue: true, suffix: '%', barColor:'rgb(255, 0, 0)'},
                {label:'fishing', value:0, showValue: true, suffix: '%', barColor:'rgb(255, 0, 0)'},
                {label:'golf', value:0, showValue: true, suffix: '%', barColor:'rgb(255, 0, 0)'},
                {label:'3d printing', value:0, showValue: true, suffix: '%', barColor:'rgb(255, 0, 0)'},
                {label:'cooking', value:0, showValue: true, suffix: '%', barColor:'rgb(255, 0, 0)'}
            ]
        }
        this.max_primary_skills_values=[30, 60, 70, 40, 70, 30, 85, 45];
        this.max_secondary_skills_values=[60, 30, 10, 40, 45];
        this.showProgress = this.showProgress.bind(this);
        this.timer = 0;
    }
    
    progressTimeout(){
        this.timer = setTimeout(this.showProgress, 20);
        if (this.timer == 100){
            clearTimeout(this.timer);
        }
    }

    showProgress(){
        var skills = this.state;
        for (var i = 0; i < skills.primary_skills.length; i++){
            if (skills.primary_skills[i].value < this.max_primary_skills_values[i]){
                skills.primary_skills[i].value += 1;
                var green = (skills.primary_skills[i].value / 100) * 255;
                var red = 255 - ((skills.primary_skills[i].value / 100) * 255)
                skills.primary_skills[i].barColor = 'rgb('+ red +', ' + green + ', 0)';
            }
        }
        for (var i = 0; i < skills.secondary_skills.length; i++){
            if (skills.secondary_skills[i].value < this.max_secondary_skills_values[i]){
                skills.secondary_skills[i].value += 1;
                var green = (skills.secondary_skills[i].value / 100) * 255;
                var red = 255 - ((skills.secondary_skills[i].value / 100) * 255)
                skills.secondary_skills[i].barColor = 'rgb('+ red +', ' + green + ', 0)';
            }
        }
        this.setState({skills});
    }

    render() {
        return (
            <div id="skillbar-chart-component">
                <h1>Primary Skills</h1>
                <Bars data={this.state.primary_skills} makeUppercase={true}/>
                <h1>Secondary Skills</h1>
                <Bars data={this.state.secondary_skills} makeUppercase={true}/>
                <br/>
                {this.progressTimeout()}
            </div>
        );
    }    
}

export default SkillBarChart;
