import React from 'react';
import Particle from 'react-particles-js';
import ParticleConfig from '../particlesjs-config.json';
import Image from './Image/Image.js';
import imageSrc from './Image/image.jpg';
import Name from './Name/Name.js';
import Contact from './Contact/Contact.js';
import './Landing.css';

class Landing extends React.Component {
    render() {

        var particleStyle = {
            width: '100vw',
            height: '100vh',
            position: 'fixed'
        };
        return (
            <div className="landing">
                <Particle style={particleStyle} params={ParticleConfig}/>
                <Image source={imageSrc} alt='Rahul Gupta'/>
                <Name 
                    text="Rahul Gupta" 
                    subheading='Developer For Hire'
                />
                <Contact/>
            </div>
        );
    }
}

export default Landing;