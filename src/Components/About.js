import React, { Component } from 'react';
import '../Theme/About.css';

class About extends Component {
    render() {
        return (
            <div id="about-component">
                <br/>
                <h1>Chatbot</h1>

                {/* CHAT WINDOW */}
                <div id="chatbot-reply">
                    <p>
                        Hi, my name is Samuel Campbell. Ask me anything!
                    </p> 
                </div>
                <form id="chat-reply">
                    <input type="text" id="chat-text"/>
                    <input type="submit"/>
                </form>
                {/* CONTACT COMPONENT */}
                <div id="contact-component">
                    <br/>
                    <h1>Contact</h1>
                    email: samuel.pcampbell@gmail.com<br/>
                    phone: 514-654-1320
                </div>
            </div>
        );
    }
    submitQuestion(){
    }
}
export default About;
