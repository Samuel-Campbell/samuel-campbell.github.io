import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div>
                <h2>About</h2>
                <div id="chatbot-reply">
                    Some reply message
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
