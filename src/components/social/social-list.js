import React, { Component } from 'react';

class SocialList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            social: props.social,
        }
    };

    render() {
        const twitter = this.state.social.twitter;
        const instagram = this.state.social.instagram;
        const facebook = this.state.social.facebook;

        const divider = {
            marginRight: '25px',
        };

        return (
            <div>
                <ul className="list-inline">

                    {twitter &&
                        <div className="list-inline-item">
                            <li className="list-inline-item"><a href={twitter} target="_blank"><i className="fa fa-twitter fa-lg"></i></a></li>

                            <li className="list-inline-item"><div className="row" style={divider} /></li>
                        </div>
                    }
                    {facebook &&
                        <div className="list-inline-item">
                            <li className="list-inline-item"><a href={facebook} target="_blank"><i className="fa fa-facebook fa-lg"></i></a></li>
                            <li className="list-inline-item"><div className="row" style={divider} /></li>
                        </div>
                    }
                    {instagram &&
                        <div className="list-inline-item">
                            <li className="list-inline-item"><a href={instagram} target="_blank"><i className="fa fa-instagram fa-lg"></i></a></li>
                        </div>
                    }
                </ul>
            </div>
        );
    }
};

export default SocialList;
