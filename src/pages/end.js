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
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        };

        const column = {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        };

        const paragraph = {
            textAlign: 'left',
            fontStyle: 'italic',
            color: 'white',
            lineHeight: '1.1em',
        };

        return (
            <div className="section" style={section}>
                <div className="container-fluid">
                    <div className="container" style={container}>
                        <div className="row" style={row}>
                            <div className="col" style={column} >
                                <h1 className="end_paragraph" style={paragraph}>*insert quote here that will inspire you to work with us...</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default End;
