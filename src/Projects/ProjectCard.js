import React, { useState } from 'react';
import './ProjectCard.css'; // Import CSS for styling
import HTMLLogo from '../assets/Projects/html.svg'
import CSSLOGO from '../assets/Projects/css.svg'
import JavascriptLogo from '../assets/skills/Javascript.png'
import TypescriptLogo from '../assets/skills/Typescript.png'
import ReactNativeLogo from '../assets/Projects/ReactNativeLogo.svg'
import ReduxLogo from '../assets/Projects/redux.svg'
import githublogo from '../assets/Projects/github-icon.svg'
import internetLogo from '../assets/Projects/internet.png'
import Tooltip from "./Tooltip.js";
import Realm from '../assets/skills/realm.svg'


const ProjectCard = ({ title, description, imageUrl, tech,githubLink,projectsUrl }) => {
    const [isFlipped, setIsFlipped] = useState(false); // State to manage flip

    const handleCardClick = () => {
        setIsFlipped(!isFlipped); // Toggle flip state on click
    };

    return (
        <div className="flip-card-background">
            <div className='topDetail'>
                <h2 className="flip-card-title">{title}</h2>
                <a href={githubLink}><img src={githublogo} height={30}></img></a>
                <a href={projectsUrl}><img src={internetLogo} height={30}></img></a>

            </div>

            <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={handleCardClick}>
                <div className="flip-card-inner">
                    {/* Front Side */}
                    <div className="flip-card-front">
                        <img src={imageUrl} alt={title} className="project-image" width={400} height={220} />
                    </div>

                    {/* Back Side */}
                    <div className="flip-card-back">
                        <p>{description}</p>
                    </div>
                </div>
            </div>
            <div className='BottomDetail'>

                <ul>
                    
                        {tech.includes('Typescript') && <Tooltip content="Typescript"><li><img src={TypescriptLogo} alt="icon" /></li> </Tooltip>}
                        {tech.includes('HTML') &&  <Tooltip content="HTML"> <li><img src={HTMLLogo} alt="icon" /></li> </Tooltip>}
                        {tech.includes('CSS') && <Tooltip content="CSS"> <li><img src={CSSLOGO} alt="icon" /></li></Tooltip>}
                        {tech.includes('ReactNative') &&  <Tooltip content="React Native"><li><img src={ReactNativeLogo} alt="icon" /></li></Tooltip>}
                        {tech.includes('Javascript') && <Tooltip content="Javascript"> <li><img src={JavascriptLogo} alt="icon" /></li></Tooltip>}
                        {tech.includes('Redux') && <Tooltip content="Redux"> <li><img src={ReduxLogo} alt="icon" /></li></Tooltip>}
                        {tech.includes('Realm') && <Tooltip content="Realm"> <li><img src={Realm} alt="icon" /></li></Tooltip>}
                </ul>
            </div>
        </div>

    );
};

export default ProjectCard;
