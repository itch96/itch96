import React from 'react';

class ContactBadge extends React.Component {
    render() {
        return (
            <div className='contactBadge col-xs-6 col-md-3'>
                <a id={this.props.name} href={this.props.target} target='blank'>
                    <i className={'fa fa-' + this.props.icon}></i>
                </a>
            </div>
        );
    }
}

export default ContactBadge;