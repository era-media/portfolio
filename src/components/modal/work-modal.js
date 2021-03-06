import React, { Component } from 'react';
import SocialList from '../social/social-list.js';

class WorkModal extends Component {
    constructor(props) {
        super(props);
        let data = props.data;
        this.state = {
            company: data.company,
            heading: data.heading,
            about: data.about,
            goal: data.goal,
            approach: data.approach,
            animation: data.animation,
            video: data.video,
            social: data.social,
        };
    };

    render() {
        const overlay = {
            backgroundColor: 'RGBA(5, 5, 5, 0.70)',
        };

        const container = {
            position: 'absolute',
            top: '5px',
            left: '5px',
            right: '5px',
            bottom: '5px',
            background: '#0A2037',
            color: '#FFFFFF',
            border: 'none',
            borderRadius: '0',
            padding: '25px',
            margin: '10px',
            height: 'initial',
            width: 'initial',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        };

        const row = {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
        };

        const col = {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
        };

        const subHeading = {
            textAlign: 'left',
            fontSize: '1.0em',
            lineHeight: '1.1em',
            fontStyle: 'normal',
            marginBottom: '3px',
        };

        const paragraph = {
            textAlign: 'left',
            fontSize: '1.0em',
            lineHeight: '1.2em',
            fontStyle: 'normal',
            marginBottom: '3px',
        };

        const divider = {
            marginBottom: '20px',
        };

        const span = {
            lineHeight: '0.8em',
            verticalAlign: 'text-bottom',
        }

        const socialList = this.state.social;
        const videoLink = this.state.video;

        return (
            <div className="container-fluid" style={overlay}>
                <div className="container" style={container}>
                    <div className="row work_modal_row" style={row} >
                        <div className="col" style={col}>
                            <h5 style={subHeading}>{this.state.company}</h5>
                            <p style={paragraph}>{this.state.about}</p>
                            <div className="row" style={divider} />
                            <h6 style={subHeading}>THE GOAL</h6>
                            <p style={paragraph}>{this.state.goal}</p>
                            <div className="row" style={divider} />
                            <h6 style={subHeading}>THE APPROACH</h6>
                            <p style={paragraph}>{this.state.approach}</p>
                            <div className="row" style={divider} />
                            {videoLink &&
                                <div>
                                    <a href={this.state.video} target="_blank"><h6>Watch Video</h6></a>
                                    <div className="row" style={divider} />
                                </div>
                            }
                            {socialList &&
                                <SocialList social={this.state.social} />
                            }
                            <button className="btn work-button" onClick={this.props.clickHandler} ><p style={paragraph}><span style={span}>←</span> Read Less</p></button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default WorkModal;
