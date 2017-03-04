import React, { Component } from 'react';

class About extends Component {
    render() {

        const mainRow = {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'stretch',
            margin: '20px auto',
            width: '100%',
        };

        const leftColumn = {
            display: 'flex',
        }

        const whiteRow = {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'stretch',
            height: '100%',
        };

        const whiteColumn = {
            margin: '10px',
        };

        const rightColumn = {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
        }

        const blueRow = {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'stretch',
            height: '100%',
        };

        const blueColumn = {
            backgroundColor: '#0A2037',
            margin: '10px',
            height: 'initial',
        };

        const contentRow = {
            display: 'flex',
        }

        const contentColumn = {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            marginLeft: '60px',
            marginRight: '40px',
            marginBottom: '50px',
            marginTop: '100px',
        }

        const heading = {
            textAlign: 'left',
            color: '#0A2037',
            fontSize: '2.2em',
            lineHeight: '1.0em',
            fontStyle: 'italic',
        };

        const paragraph = {
            textAlign: 'left',
            color: '#0A2037',
            paddingLeft: '40px',
            fontSize: '2.2em',
            lineHeight: '1.0em',
            fontStyle: 'italic',
        };

        const divider = {
            height: '40px',
        };

        return (
            <div className="section">
                <div className="container main-container">
                    <div className="row" style={mainRow}>
                        <div className="col-md-6" style={leftColumn}>
                            <div className="row" style={whiteRow}>
                                <div className="col" style={whiteColumn}>
                                    <div className="row" style={contentRow}>
                                        <div className="col-xs-10 col-md-8 col-lg-8" style={contentColumn}>
                                            <h1 style={heading}>mission.</h1>
                                            <p style={paragraph}>To tell meaningful brand stories through combining the power of high quality design, engaging content, and smart technology.</p>
                                            <div className="row" style={divider} />
                                            <h1 style={heading}>vision.</h1>
                                            <p style={paragraph}>Because change is inevitable,<br /> we aim to lead it.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6" style={rightColumn}>
                            <div className="row" style={blueRow}>
                                <div className="col" style={blueColumn}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default About;
