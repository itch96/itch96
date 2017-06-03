import React from 'react';

class Skill extends React.Component {
    render() {
        return (
            <div className="skill col-xs-4 col-md-2 container">
                <i className={this.props.icon}></i>
                <br/>
                {this.props.name}
            </div>
        );
    }
}

export default Skill;