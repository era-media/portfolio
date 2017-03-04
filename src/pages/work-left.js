import React, { Component } from 'react';
import SocialList from '../components/social/social-list.js';

class WorkLeft extends Component {
    render() {

        const section = {
            background: `url(https://firebasestorage.googleapis.com/v0/b/era-portfolio.appspot.com/o/work%2Fikea%2Fikea_pre_ramadan.gif?alt=media&token=e7004fe8-b05f-4ac8-9b8b-048924b6013b) no-repeat center center`,
            backgroundSize: 'cover',
        }

        const container = {
            flexDirection: 'column',
        }

        const row = {
            display: 'flex',
            flexDirection: 'column',
            padding: '60px 0',
            marginRight: '180px',
        };

        const column = {
            flexBasis: '100%',
            backgroundColor: '#0A2037',
            padding: '40px 30px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            color: 'white',
        }

        return (
            <div className="section" style={section}>
                <div className="container main-container" style={container}>
                    <div className="row" style={row}>
                        <div className="col-md-3" style={column}>
                            <div className="row">
                                <div className="col">
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <h6>KUWAIT OIL COMPANY</h6>
                                    <p></p>
                                    <p>The Kuwait Oil Company is an oil company headquartered in Ahmadi, Kuwait. It is a subsidiary of the Kuwait Petroleum Corporation, a Government-owned holding company.</p>
                                    <br />
                                    <h6>THE GOAL</h6>
                                    <p></p>
                                    <p>To inform the public of an ongoing operation relating to a nationwide geological survey conducted by a foreign company.</p>
                                    <br />
                                    <h6>THE APPROACH</h6>
                                    <p></p>
                                    <p>We branded the campaign "Deraya" (To know is Arabic). Added emotional and national aspects to the campaign and made it engaging for the public.</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <a href=""><h6>Watch Video</h6></a>
                                    <p />
                                    <SocialList />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default WorkLeft;
