import React, { Component } from 'react';

class About extends Component {
    render() {

        const container = {
            display: 'flex',
            alignItems: 'stretch',
            height: '100%',
            width: '90%',
        };

        const row = {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'stretch',
            padding: '60px 0',
            margin: '20px auto',
        };

        const leftColumn = {
            flexBasis: '50%',
            backgroundColor: 'white',
            padding: '0 15px',
            display: 'flex',
        }

        const subRow = {
            alignItems: 'center',
        };

        const subLeftColumn = {
            padding: '50px',
        }

        const rightColumn = {
            flexBasis: '50%',
            backgroundColor: '#0A2037',
            padding: '0 15px',
        }

        const heading = {
            textAlign: 'left',
            color: '#0A2037',
        };

        const paragraph = {
            textAlign: 'left',
            color: '#0A2037',
            paddingLeft: '40px',
            fontSize: '2.0em',
            lineHeight: '1.0em',
        };

        return (
            <div className="section">
                <div className="container" style={container}>
                    <div className="row" style={row}>
                        <div className="col-md-6" style={leftColumn}>
                            <div className="row" style={subRow}>
                                <div className="col-md-10" style={subLeftColumn}>
                                    <h2 style={heading}>mission.</h2>
                                    <p style={paragraph}>To tell meaningful brand stories through combining the power of high quality design, engaging content, and smart technology.</p>
                                    <br />
                                    <h2 style={heading}>vision.</h2>
                                    <p style={paragraph}>Because change is inevitable,<br /> we aim to lead it.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6" style={rightColumn}></div>
                    </div>
                </div>
            </div>
        );
    }
};

export default About;
