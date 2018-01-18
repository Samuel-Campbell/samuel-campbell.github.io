import React, { Component } from 'react';
import '../Theme/About.css';

class About extends Component {
    render() {
        return (
            <div id="about-component">
                <br/>
                <h1>Chatbot in dev</h1>

                {/* CHAT WINDOW */}
                <div id="chatbot-reply">
                    
                </div>
                <form id="chat-reply">
                    <input type="text" id="chat-text"/>
                    <input type="submit"/>
                </form>
            </div>
        );
    }
}
export default About;
