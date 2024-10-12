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
import Flippy, { FrontSide, BackSide } from 'react-flippy'


const ProjectCard = ({ title, description, imageUrl, tech, githubLink, projectsUrl }) => {
    const [isFlipped, setIsFlipped] = useState(false); // State to manage flip

    const handleCardClick = () => {
        setIsFlipped(!isFlipped); // Toggle flip state on click
    };

    return (

        <div className='projectWrapper'>
            <div className='topDetail'>
                <h2 className="flip-card-title">{title}</h2>
                <a href={githubLink} className='topImg'><img src={githublogo} height={30}></img></a>                         
                <a href={projectsUrl} className='topImg'><img src={internetLogo} height={30}></img></a>
            </div>


            <Flippy
                //   flipOnHover={true} // You can flip on hover
                flipOnClick={true} // Or flip on click
                flipDirection="horizontal" // Flip direction can be horizontal or vertical
                style={{ margin: '3%' }} // Customize the card size
            >
                {/* Front side with an image */}
                <FrontSide
                    style={{
                        //  backgroundColor: '#41669d',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '0', margin: '0'
                    }}
                >
                    <img
                        src={imageUrl}
                        alt="Front Side"
                        style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: '10px' }}
                    />
                </FrontSide>

                {/* Back side with another image */}
                <BackSide
                    style={{
                        backgroundColor: '#CF9FFF',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: '10px'
                    }}
                >
                    <h4 className='descriptionText'>{description}</h4>
                </BackSide>

            </Flippy>
            <div  className='BottomDetail'>
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
