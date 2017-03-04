import React, { Component } from 'react';
import SocialList from '../components/social/social-list.js';

class WorkRight extends Component {
    render() {

        const section = {
            background: `url(https://firebasestorage.googleapis.com/v0/b/era-portfolio.appspot.com/o/work%2Falmarkaz%2Falmarkaz.gif?alt=media&token=856ad83f-966e-4cbd-8a8d-0898a363f38c) no-repeat center center`,
            backgroundSize: 'cover',
        }

        const container = {
            flexDirection: 'row-reverse',
        }

        const row = {
            display: 'flex',
            flexDirection: 'row-reverse',
            padding: '60px 0',
            paddingRight: '80px',
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

export default WorkRight;
