import React from 'react';
import Tilt from 'react-tilt';
import './Project.css';

class Project extends React.Component {
    render() {
        return (
            <Tilt className="Tilt project col-xs-10 col-xs-offset-1 col-md-3">
                <a href={this.props.target}>
                    <img className='Tilt-inner' src={this.props.image} alt={this.props.name}/>
                    <h3>{this.props.name}</h3>
                    <p>{this.props.description}</p>
                </a>
            </Tilt>
        );
    }
}

export default Project;