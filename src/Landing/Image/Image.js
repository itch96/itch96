import React from 'react';
import './Image.css';

class Image extends React.Component {
    render() {
        return (
            <div className='image'>
                <img src={this.props.source} alt={this.props.alt}/>
            </div>
        );
    }
}

export default Image;