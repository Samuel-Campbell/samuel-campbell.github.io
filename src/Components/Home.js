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
            image:'',
            text:'',
            github:null,
            facebook:null,
            website:null
        }

        this.properties={
            procezeus:{
                text: "insert text",
                image: procezeus,
                github: "https://github.com/Cyberjusticelab/JusticeAI" ,
                facebook: "https://www.facebook.com/procezeus/?ref=br_rs",
                website: "https://capstone.cyberjustice.ca/"
            },
            mda:{
                text: "",
                image: mda,
                github: null,
                facebook: null,
                website: "https://mdacorporation.com/"           
            },
            mcga:{
                text: "",
                image: mcga,
                github: "https://github.com/Taimoorrana1/MCGA",
                facebook: null,
                website: null          
            },
            ads:{
                text: "",
                image: ads,
                github: null,
                facebook: null,
                website: "https://www.adsdata.ca/"           
            },
            sae:{
                text: "",
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
