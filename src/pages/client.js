import React, { Component } from 'react';

class Client extends Component {
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
            flexDirection: 'row',
            justifyContent: 'flex-end',
            backgroundColor: '#0A2037',
            background: `url(https://firebasestorage.googleapis.com/v0/b/era-portfolio.appspot.com/o/era-artwork%2Fcar_park.jpg?alt=media&token=e6e32c38-f157-45f4-9761-4f004408358a) no-repeat center center`,
            backgroundSize: 'cover',
            color: 'white',
            minHeight: '500px',
            padding: '0px',
        };

        const rightColumn = {
            display: 'flex',
            background: `url(https://firebasestorage.googleapis.com/v0/b/era-portfolio.appspot.com/o/clients%2Fclients.png?alt=media&token=b29179a0-7835-4209-87e9-e2c1f0d94fa2) no-repeat center center`,
            backgroundSize: 'contain',
            minHeight: '500px',
            padding: '10px',
            margin: '25px auto',
        };

        const heading = {
            textAlign: 'left',
            lineHeight: '1.1em',
            fontStyle: 'italic',
            marginBottom: '5px',
            padding: '20px',
            backgroundColor: 'RGBA(10, 32, 55, 0.90)',
        };

        const headingRow = {
            display: 'flex',
            alignItems: 'flex-end',
            width: '420px',
        };

        const headingCol = {
            width: '100%',
            padding: '0px',
        }


        return (
            <div className="section" style={section}>
                <div className="container-fluid">
                    <div className="container" style={container}>
                        <div className="row" style={mainRow}>
                            <div className="col-md-6" style={leftColumn}>
                                <div className="row capability_heading_row" style={headingRow} >
                                    <div className="col" style={headingCol}>
                                        <h1 className="capability_heading" style={heading}>here are some of the people that trust us.</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6" style={rightColumn}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Client;
