import React from 'react';
import './Name.css';

class Name extends React.Component {
    render() {
        return (
            <div className="name">
                <h1>{this.props.text}</h1>
                <p>{this.props.subheading}</p>
            </div>
        );
    }
}

export default Name;