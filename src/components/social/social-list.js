import React, { Component } from 'react';
import Twitter from '../../assets/images/social-media/twitter.svg';
import Instagram from '../../assets/images/social-media/instagram.svg';

class SocialList extends Component {
    constructor() {
        super();

        this.state = {
            twitter: this.props.twitter,
            instagram: this.props.instagram
        }
    };

    render() {
        const divider = {
            marginRight: '30px',
        };

        return (
            <div>
                <ul className="list-inline">
                    <li className="list-inline-item"><a href={this.state.twitter}><img src={Twitter} height="20px" width="auto" role="presentation" /></a></li>
                    <li className="list-inline-item"><div className="row" style={divider} /></li>
                    <li className="list-inline-item"><a href={this.state.instagram}><img src={Instagram} height="20px" width="auto" role="presentation" /></a></li>
                </ul>
            </div>
        );
    }
};

export default SocialList;
