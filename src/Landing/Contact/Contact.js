import React from 'react';
import ContactBadge from './ContactBadge.js';
import './Contact.css';


class Contact extends React.Component {
    render() {
        return (
            <div className="contact col-xs-12">
                <ContactBadge name='Facebook' icon='facebook' target='https://www.facebook.com/assitch.96'/>
                <ContactBadge name='Twitter' icon='twitter' target='https://twitter.com/itch96'/>
                <ContactBadge name='Github' icon='github' target='https://github.com/itch96'/>
                <ContactBadge name='LinkedIn' icon='linkedin' target='https://www.linkedin.com/in/rahul-gupta-itch96/'/>
            </div>
        );
    }
}

export default Contact;