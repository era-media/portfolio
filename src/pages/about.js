import React, { Component } from 'react';

class About extends Component {
    render() {

        const section = {
            backgroundColor: 'white',
        };

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
            flexDirection: 'row',
            alignItems: 'stretch',
            margin: '20px auto',
            width: '100%',
        };

        const leftColumn = {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '50px 25px',
            margin: '25px auto',
        }

        const rightColumn = {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            background: `url(https://firebasestorage.googleapis.com/v0/b/era-portfolio.appspot.com/o/era-artwork%2Froad_crossing.jpg?alt=media&token=cea45289-9b19-4727-88a9-acb73eadb1a5) no-repeat center center`,
            backgroundSize: 'cover',
            backgroundColor: '#0A2037',
            minHeight: '500px',
            order: '-1',
        }

        const heading = {
            textAlign: 'left',
            color: '#0A2037',
            lineHeight: '1.0em',
            fontStyle: 'italic',
        };

        const paragraph = {
            textAlign: 'left',
            color: '#0A2037',
            lineHeight: '1.0em',
            fontStyle: 'italic',
        };

        const divider = {
            height: '40px',
        };

        return (
            <div className="section" style={section} >
                <div className="container-fluid">
                    <div className="container" style={container}>
                        <div className="row" style={mainRow}>
                            <div className="col-xs-12 col-sm-12 col-md-6" style={leftColumn}>
                                <h1 className="about_heading" style={heading}>mission.</h1>
                                <p className="about_paragraph" style={paragraph}>To tell meaningful brand stories through combining the power of high quality design, engaging content, and smart technology.</p>
                                <div className="row" style={divider} />
                                <h1 className="about_heading" style={heading}>vision.</h1>
                                <p className="about_paragraph" style={paragraph}>Because change is inevitable, we aim to lead it.</p>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6" style={rightColumn}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default About;
