import React, { Component } from 'react';
import "../Theme/home.css";
import mcga from '../Assets/mcga.svg';
import procezeus from '../Assets/procezeus.png';
import mda from '../Assets/mda.jpg';
import ads from '../Assets/ads.png';
import sae from '../Assets/sae.png';

class Home extends Component {
    constructor(){
        super();
        
        this.state = {
            text: "Landlord-tenant law artificial intelligence\n\
            -Natural Language Processing\n\
            -Deep learning, classification, clusters, regression\n\
            -Overall over 90% accuracy on predictions\n\n\
            JusticeAI (ProceZeus) is a web chat bot that aims to facilitate access to judicial proceedings involving specific domains of law. Users will have the ability to converse with the chatbot, describing in detail the situation for which they wish to pursue litigation. The system, which will leverage the power of machine learning and natural language processing, will guide the user through a process wherein they’ll be prompted with a series of questions relating to their potential case allowing the system to ultimately determine, based on provincial jurisprudence, whether the user has a valid case worth pursuing in the judicial system. Alternatively, the system may also suggest remedies in lieu of legal action if it is deemed unlikely to be in the user’s best interest.",
            image: procezeus,
            github: "https://github.com/Cyberjusticelab/JusticeAI" ,
            facebook: "https://www.facebook.com/procezeus/?ref=br_rs",
            website: "https://capstone.cyberjustice.ca/"
        }

        this.properties={
            procezeus:{
             text: "Landlord-tenant law artificial intelligence\n\
            -Natural Language Processing\n\
            -Deep learning, classification, clusters, regression\n\
            -Overall over 90% accuracy on predictions\n\n\
            JusticeAI (ProceZeus) is a web chat bot that aims to facilitate access to judicial proceedings involving specific domains of law. Users will have the ability to converse with the chatbot, describing in detail the situation for which they wish to pursue litigation. The system, which will leverage the power of machine learning and natural language processing, will guide the user through a process wherein they’ll be prompted with a series of questions relating to their potential case allowing the system to ultimately determine, based on provincial jurisprudence, whether the user has a valid case worth pursuing in the judicial system. Alternatively, the system may also suggest remedies in lieu of legal action if it is deemed unlikely to be in the user’s best interest.",
                image: procezeus,
                github: "https://github.com/Cyberjusticelab/JusticeAI" ,
                facebook: "https://www.facebook.com/procezeus/?ref=br_rs",
                website: "https://capstone.cyberjustice.ca/"
            },
            mda:{
                text: "Automation of manufacturing process\n\
                -Embedded systems\n\
                -Low level forms of communication\n\
                -Quality Assurance\n\n\
                Maxar Technologies Ltd. is an international space technology company. I was involved in the multi billion dollar project called OneWeb. This contract envolves the development of a constellation of 648 satellites in order to provide the world with global internet broadband service. The development of automation on the manufacturing floor was essential to the fruition of the program. This involves programming small machinery with no capacity for error. According to Wikipedia, satellites belonging to OneWeb should begin to orbit as early as 2019.",
                image: mda,
                github: null,
                facebook: null,
                website: "https://mdacorporation.com/"           
            },
            mcga:{
                text: "Make Concordia Great Again (MCGA)\n\
                -Android Application\n\
                -Google Map API\n\
                -GPS Service\n\n\
                MCGA is a mobile Campus Guide application that is meant to help new incoming students navigate and familiarize themselves with Concordia University - Montréal’s two campuses. It is a project implemented using the Android platform.",
                image: mcga,
                github: "https://github.com/Taimoorrana1/MCGA",
                facebook: null,
                website: null          
            },
            ads:{
                text: "Automotive Data Solutions (ADS)\n\
                -Embedded systems\n\
                -Communication: I2C, CAN, SPI, UART, and Manchester\n\
                -VHDL, Python, C#\n\
                -System and Security\n\n\
                Headquartered in Montreal, Canada, Automotive Data Solutions Inc. is a technology company specialized in the development and marketing of aftermarket automotive electronics. Their areas of expertise include: immobolizer bypass, data bus integration, audio integration, remote start. I helped develop a tool to test the immobolizer bypass as well as the remote start as part of the continuous integration project. This involved simulating every car on the market on a software program.",
                image: ads,
                github: null,
                facebook: null,
                website: "https://www.adsdata.ca/"           
            },
            sae:{
                text: "Concordia Society of Automotive Engineers\n\
                -Embedded systems\n\
                -C\n\
                -Hardware and electronics circuits\n\
                -I2C\n\n\
                Concordia SAE, located in Montreal, Quebec, is a student-run chapter of SAE International at Concordia University. A world-renowned engineering organization, SAE International hosts the Collegiate Design Series for students. These yearly international competitions allow students to apply classroom knowledge to real-life situations, challenging students to design, manufacture, test and compete with a vehicle in a dynamic environment.\n\n\
                Designed a PCB as well as programmed it for data collection of the vehicle on the Baja team. Sensors used consisted of: accelerometer, gyroscope, hall effect sensor, shock sensors, steering potentiometer, and IR thermometer.",
                image: sae,
                github: "https://github.com/Samuel-Campbell/ConcordiaBajaComputer",
                facebook: "https://www.facebook.com/concordiasae/",
                website: "http://www.concordiasae.ca/"           
            }
        }
        this.toggleIcon = this.toggleIcon.bind(this);
    }

    render() {
        return (
            <div class="parent-div">
                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />

                {/* ACHIEVEMENT DIV */}
                <div class="achievement-div">
                    <div class="image-div">
                        <img src={this.state.image} alt="" class="achievement-img"/>
                    </div>
                    <div class="text-div">
                        <p>{this.state.text}</p>
                    </div>
                    <div class="link-div">
                        <table>
                            <tr>
                                <td>
                                    <a href={this.state.github} target="_blank"><i class="fa fa-github"></i></a>
                                </td>
                                <td>
                                    <a href={this.state.facebook} target="_blank"><i class="fa fa-facebook"></i></a>
                                </td>
                                <td>
                                    <a href={this.state.website} target="_blank"><i class="fa fa-firefox"></i></a>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
                {/* END OF ACHIEVEMENT DIV */}
                
                {/* SCROLLING IMAGE DIV */}
                <div class="image-scroll-div">
                    <div class="image-scroll">
                        <img src={procezeus} alt="" class="achievement-img" onClick={e => this.toggleIcon(this.properties.procezeus)}/>
                    </div>
                    <div class="image-scroll">
                        <img src={mda} alt="" class="achievement-img" onClick={e => this.toggleIcon(this.properties.mda)}/>
                    </div>
                    <div class="image-scroll">
                        <img src={mcga} alt="" class="achievement-img" onClick={e => this.toggleIcon(this.properties.mcga)}/>
                    </div>
                    <div class="image-scroll">
                        <img src={ads} alt="" class="achievement-img" onClick={e => this.toggleIcon(this.properties.ads)}/>
                    </div>
                    <div class="image-scroll">
                        <img src={sae} alt="" class="achievement-img" onClick={e => this.toggleIcon(this.properties.sae)}/>
                    </div>
                </div>
            {/* END SCROLLING IMAGE DIV */}
            </div>
       );
    }

    toggleIcon = e => {
        this.setState({
            image:e.image,
            text:e.text,
            github:e.github,
            facebook:e.facebook,
            website:e.website
        })        
    }
}
export default Home;
