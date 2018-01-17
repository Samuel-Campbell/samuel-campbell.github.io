import React, { Component } from 'react';
import '../Theme/About.css';

class About extends Component {
    render() {
        return (
            <div id="about-component">
                <h1>About</h1>
                <br/>
                <h1>Chatbot in dev</h1>
                <div id="chatbot-reply">
                </div>
                <form>
                    <input type="text"/>
                    <input type="submit"/>
                </form>
            </div>
        );
    }
}
export default About;
