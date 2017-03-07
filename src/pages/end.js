import React, { Component } from 'react';

class End extends Component {
    render() {

        const section = {
            backgroundColor: 'RGBA(10, 32, 55, 1.00)',
        };

        const container = {
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            width: '100%',
            height: '100%',
        };

        const row = {
            display: 'flex',
        };

        const column = {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            marginLeft: '90px',
            marginRight: '60px',
            marginBottom: '150px',
            marginTop: '150px',
        };

        const paragraph = {
            textAlign: 'left',
            fontStyle: 'italic',
            color: 'white',
            fontSize: '2.2em',
            lineHeight: '1.1em',
        };

        const divider = {
        };

        return (
            <div className="section" style={section}>
                <div className="container-fluid">
                    <div className="container" style={container}>
                        <div className="row" style={row}>
                            <div className="col-xs-12 col-sm-10" style={column} >
                                <h1 style={paragraph}>*insert qoute here that will<br/> inspire you to sign with us...</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default End;
