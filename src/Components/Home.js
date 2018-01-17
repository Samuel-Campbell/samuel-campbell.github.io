import React, { Component } from 'react';
import "../Theme/home.css";
import mcga from '../Assets/mcga.svg';
import procezeus from '../Assets/procezeus.png';
import mda from '../Assets/mda.jpg';
import ads from '../Assets/ads.png';
import sae from '../Assets/sae.png';
import github from '../Assets/github.png';
import facebook from '../Assets/facebook.png';

class Home extends Component {
    render() {
        return (
            <div>
                <h1>Achievements</h1>
                {/* PROCEZEUS */}                
                <div class="achievement-div">
                    <div class="image-div">
                        <img src={procezeus} alt="" class="achievement-img"/>
                    </div>
                    <div class="text-div">
                        insert text
                    </div>
                    <div class="link-div">
                        <table>
                            <tr>
                                <td>
                                    <a href="https://github.com/Cyberjusticelab/JusticeAI" target="_blank">github</a>
                                </td>
                                <td>
                                    <a href="https://www.facebook.com/procezeus/?ref=br_rs" target="_blank">facebook</a>
                                </td>
                                <td>
                                    <a href="https://capstone.cyberjustice.ca/" target="_blank">website</a>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>

                {/* MDA */}
                <div class="achievement-div">
                    <div class="image-div">
                        <img src={mda} alt="" class="achievement-img"/>
                    </div>
                    <div class="text-div">
                        some text
                    </div>                    
                    <div class="link-div">
                        <table>
                            <tr>
                                <td>
                                    <a href="https://mdacorporation.com/" target="_blank">website</a>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>

                {/* MCGA */}
                <div class="achievement-div">
                    <div class="image-div">
                        <img src={mcga} alt="" class="achievement-img"/>
                    </div>
                    <div class="text-div">
                        some text
                    </div>                   
                    <div class="link-div">
                        <table>
                            <tr>
                                <td>
                                    <a href="https://github.com/Taimoorrana1/MCGA" target="_blank">github</a>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>

                {/* ADS */}
                <div class="achievement-div">
                    <div class="image-div">
                        <img src={ads} alt="" class="achievement-img"/>
                    </div>
                    <div class="text-div">
                        some text
                    </div>                    
                    <div class="link-div">
                        <table>
                            <tr>
                                <td>
                                    <a href="https://www.adsdata.ca/" target="_blank">website</a>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>

                {/* SAE */}
                <div class="achievement-div">
                    <div class="image-div">
                        <img src={sae} alt="" class="achievement-img"/>
                    </div>
                    <div class="text-div">
                        some text
                    </div> 
                    <div class="link-div">
                        <table>
                            <tr>
                                <td>
                                    <a href="http://www.concordiasae.ca/" target="_blank">website</a>
                                </td>
                                <td>
                                    <a href="https://www.facebook.com/concordiasae/" target="_blank">facebook</a>
                                </td>
                                <td>
                                    <a href="https://github.com/Samuel-Campbell/ConcordiaBajaComputer" target="_blank">github</a>
                                </td>
                            </tr>                            
                        </table>
                    </div>
                </div>
            </div>
       );
    }
}
export default Home;
