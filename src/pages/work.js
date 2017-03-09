import React, { Component } from 'react';
import WorkModal from  '../components/modal/work-modal.js';

class Work extends Component {
    constructor(props) {
        super(props);

        let data = props.data;
        this.state = {
            data: data,
            flow: data.flow,
            company: data.company,
            heading: data.heading,
            about: data.about,
            goal: data.goal,
            approach: data.approach,
            animation: data.animation,
            video: data.video,
            twitter: data.twitter,
            instagram: data.instagram,
            showModal: false,
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    };

    handleOpenModal() {
        this.setState({ showModal: true });
    };

    handleCloseModal() {
        this.setState({ showModal: false });
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
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
            width: '100%',
        };

        const column = {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            backgroundColor: 'RGBA(10, 32, 55, 0.90)',
            margin: '60px 35px',
            color: 'white',
        };

        const headingRow = {
            padding: '35px',
        }

        const heading = {
            textAlign: 'left',
            lineHeight: '1.1em',
            fontStyle: 'italic',
            marginBottom: '5px',
        };

        const paragraph = {
            textAlign: 'left',
            fontSize: '0.9em',
            lineHeight: '1.4em',
            fontStyle: 'normal',
            marginBottom: '3px',
        };

        const span = {
            lineHeight: '0.8em',
            verticalAlign: 'text-bottom',
        }

        const modalVisibility = this.state.showModal;

        return (
            <div className="section" style={section}>
                <div className="container-fluid">
                    { modalVisibility ? (
                        <WorkModal data={this.state.data} clickHandler={this.handleCloseModal}/>
                    ) : (
                        <div className="container" style={container}>
                            <div className="row" style={mainRow}>
                                <div className="col-md-4" style={column}>
                                    <div className="row" style={headingRow} >
                                        <h1 className="work_heading" style={heading}>{this.state.heading}</h1>
                                        <button className="btn work-button work_modal_button" onClick={this.handleOpenModal} ><p style={paragraph}>Read More <span style={span}>→</span></p></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
};

export default Work;
