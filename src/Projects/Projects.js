import React from 'react';
import Project from './Project.js';

import RecipeImg from './ProjectPics/recipes.svg';
import TennisImg from './ProjectPics/tennis.svg';
import SimonImg from './ProjectPics/simon.svg';
import WikiImg from './ProjectPics/wikiApp.svg';
import TicTacToeImg from './ProjectPics/ttt.svg';
import PomodoroImg from './ProjectPics/pomodoro.svg';
import WeatherImg from './ProjectPics/weather.svg';
import CalcImg from './ProjectPics/calc.svg';

class Projects extends React.Component {
    render() {
        // add first:true to every 3rd Project and first:false to others.
        return (
            <div className="projects container">
                <h2 className='col-md-11 col-md-offset-1'>Projects</h2>
                <Project first='true' name='Recipe Book' image={RecipeImg} target='https://itch96.github.io/recipes' description='Your recipe book where you can add, edit or delete your recipes. Built using ServiceWorker for caching and ReactJS for UI.'/>
                <Project first='false' name='Tennis Game' image={TennisImg} target='https://itch96.github.io/Tennis' description='Play Tennis online with your computer to kill time. Built using HTML5 canvas and JavaScript.'/>
                <Project first='false' name='Simon Game' image={SimonImg} target='https://itch96.github.io/simon' description='Play the classic simon game on the web. Built using HTML, CSS, Saas, Bootstrap, JavaScript, and jQuery.'/>
                <Project first='true' name='Wikipedia Client' image={WikiImg} target='https://itch96.github.io/WikiViewer/' description='A beautiful client for Wikipedia. Built using the open Wkikepedia API -> MediaWiki.'/>
                <Project first='false' name='Tic Tac Toe Game' image={TicTacToeImg} target='https://itch96.github.io/TicTacToe/' description='A Tic Tac Toe game on the web against an Unbeatable Opponent. Built using HTML, CSS, Bootstrap, JavaScript, and jQuery.'/>
                <Project first='false' name='Pomodoro Timer' image={PomodoroImg} target='https://itch96.github.io/Pomodoro/' description='A Pomodoro Timer to remind you to take a break, increase Productivity and Improve Health. Built using HTML, CSS, Bootstrap, JavaScript, and jQuery.'/>
                <Project first='true' name='Weather App' image={WeatherImg} target='https://itch96.github.io/WeatherApp' description='It grabs your IP address and locates your geographical position, then fetches the weather data of your geographical location.'/>
                <Project first='false' name='Calculator' image={CalcImg} target='https://codepen.io/itch96/full/xVybgW' description='A web based calculator. Just what you needed. right? Built using HTML, CSS, and JavaScript'/>
            </div>
        );
    }
}

export default Projects;