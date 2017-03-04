import React, { Component } from 'react';
import SocialList from '../components/social/social-list.js';

class Work extends Component {
    constructor(props) {
        super(props);
        let data = props.data;
        console.log(data.company);

        this.state = {
            flow: data.flow,
            company: data.company,
            about: data.about,
            goal: data.goal,
            approach: data.approach,
            animation: data.animation,
            video: data.video,
            twitter: data.twitter,
            instagram: data.instagram,
        };
    };

    render() {
        const section = {
            background: `url(${this.state.animation}) no-repeat center center`,
            backgroundSize: 'cover',
        }

        const container = {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'stretch',
            flexDirection: 'row',
            width: '100%',
            height: '100%',
        };

        const mainRow = {
            display: 'flex',
            flexDirection: `${this.state.flow}`,
            alignItems: 'stretch',
            margin: '20px auto',
            width: '100%',
        };

        const column = {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            backgroundColor: '#0A2037',
            padding: '40px',
            color: 'white',
        };

        const heading = {
            textAlign: 'left',
            color: '#FFFFFF',
            fontSize: '4.0em',
            lineHeight: '1.0em',
            fontStyle: 'italic',
            margin: '0',
            width: '70%',
        };

        const divider = {
            marginBottom: '40px',
        };

        return (
            <div className="section" style={section}>
                <div className="container-fluid">
                    <div className="container" style={container}>
                        <div className="row" style={mainRow}>
                            <div className="col-md-3" style={column}>
                                <h6>{this.state.company}</h6>
                                <p></p>
                                <p>{this.state.about}</p>
                                <div className="row" style={divider} />
                                <h6>THE GOAL</h6>
                                <p></p>
                                <p>{this.state.goal}</p>
                                <div className="row" style={divider} />
                                <h6>THE APPROACH</h6>
                                <p></p>
                                <p>{this.state.approach}</p>
                                <div className="row" style={divider} />
                                <a href=""><h6>Watch Video</h6></a>
                                <div className="row" style={divider} />
                                <SocialList twitter={this.state.twitter} instagram={this.state.instagram} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Work;
