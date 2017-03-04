import React, { Component } from 'react';
import Twitter from '../../assets/images/social-media/twitter.svg';
import Instagram from '../../assets/images/social-media/instagram.svg';

class SocialList extends Component {
    render() {
        return (
            <div>
                <ul className="list-inline">
                    <li className="list-inline-item"><a href=""><img src={Twitter} height="20px" width="auto" role="presentation" /></a></li>
                    <li className="list-inline-item"></li>
                    <li className="list-inline-item"></li>
                    <li className="list-inline-item"><a href=""><img src={Instagram} height="20px" width="auto" role="presentation" /></a></li>
                </ul>
            </div>
        );
    }
};

export default SocialList;
