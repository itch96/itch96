import React from 'react';
import Skill from './Skill.js';
import './Skills.css';

class Skills extends React.Component {
    render() {
        return (
            <div className="skills">
                <h2>Skills</h2>
                
                    <Skill name='HTML' icon='devicon-html5-plain colored'/>
                    <Skill name='CSS' icon='devicon-css3-plain colored'/>
                    <Skill name='Bootstrap' icon='devicon-bootstrap-plain colored'/>
                    <Skill name='Sass' icon='devicon-sass-original colored'/>
                    <Skill name='JavaScript' icon='devicon-javascript-plain colored'/>
                    <Skill name='JQuery' icon='devicon-jquery-plain colored'/>
                    <Skill name='ReactJS' icon='devicon-react-original colored'/>
                    <Skill name='D3' icon='devicon-d3js-plain colored'/>
                
                    <Skill name='Python' icon='devicon-python-plain colored'/>
                    <Skill name='Java' icon='devicon-java-plain colored'/>
                    <Skill name='NodeJS' icon='devicon-nodejs-plain colored'/>
                
                    <Skill name='MySQL' icon='devicon-mysql-plain colored'/>
                    <Skill name='Oracle DB' icon='devicon-oracle-original colored'/>
                
                    <Skill name='git' icon='devicon-git-plain colored'/>
                    <Skill name='Webpack' icon='devicon-webpack-plain colored'/>
                    <Skill name='C' icon='devicon-c-plain-wordmark colore'/>
                    <Skill name='Tomcat' icon='devicon-tomcat-line colored'/>
                    <Skill name='ShellScripting' icon='devicon-linux-plain colored'/>
            </div>
        );
    }
}

export default Skills;