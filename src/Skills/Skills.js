import React from 'react';
import './Skills.css';
import HTMLLogo from '../assets/skills/HTML.png'
import CSSLOGO from '../assets/skills/CSS.png'
import JavascriptLogo from '../assets/skills/Javascript.png'
import TypescriptLogo from '../assets/skills/Typescript.png'
import CSharp from '../assets/skills/C-Sharp.png'
import Unity from '../assets/skills/Unity.png'
import blender from '../assets/skills/blender.png'
import ReactLogo from '../assets/skills/React.png'
import ReactNativeLogo from '../assets/skills/React-Native.png'
import ReduxLogo from '../assets/skills/Redux.png'
import NodeJsLogo from '../assets/skills/NodeJs.png'
import ExpressJs from '../assets/skills/expressJs.png'
import MongoDB from '../assets/skills/MongoDB.png'
import MySQL from '../assets/skills/MySQL.png'
import JavaLogo from '../assets/skills/Java.png'
import GitLogo from '../assets/skills/Git.png'
import Figma from '../assets/skills/Figma.png'
import PythonLogo from '../assets/skills/Python.png'
import GraphQLLogo from '../assets/skills/GraphQL.png'
import RESTAPI from '../assets/skills/RESTAPI.png'
import Trello from '../assets/skills/Trello.png'
import Postman from '../assets/skills/Postman.png'
import Firebase from '../assets/skills/Firebase.png'
import JSON from  '../assets/skills/JSON.png'


const Skills = () => {


    return (
        <div className="Skills">
           <hr className='line'/>
           <h3 className='SkillsText'>Skills</h3>
           <div className='Skills_list'>
                <ul>
                    {/*HTML, CSS, Javascript,  Typescript, C#, Unity, Blender, React, React-Native, Redux, Node, Express, MongoDB, Mangoose, SQL, Java, Git, Figma, Canva, python, GraphQL, REST API, Trello, Postman, Firebase, JSON*/}
                    <li><img src={HTMLLogo} alt="icon" /><h5>HTML</h5></li>  
                    <li><img src={CSSLOGO} alt="icon" /><h5>CSS</h5></li>
                    <li><img src={JavascriptLogo} alt="icon" /><h5>Javascript</h5></li>
                    <li><img src={TypescriptLogo} alt="icon" /><h5>Typescript</h5></li>
                    <li><img src={ReactNativeLogo} alt="icon" /><h5>React-Native</h5></li>
                    <li><img src={ReduxLogo} alt="icon" /><h5>Redux</h5></li>
                    <li><img src={CSharp} alt="icon" /><h5>C#</h5></li>
                    <li><img src={Unity} alt="icon" /><h5>Unity</h5></li>
                    <li><img src={blender} alt="icon" /><h5>Blender</h5></li>
                    <li><img src={ReactLogo} alt="icon" /><h5>React</h5></li>  
                    <li><img src={NodeJsLogo} alt="icon" /><h5>Node.js</h5></li>
                    <li><img src={ExpressJs} alt="icon" /><h5>Express.js</h5></li>
                    <li><img src={MongoDB} alt="icon" /><h5>Mongodb</h5></li>
                    <li><img src={MySQL} alt="icon" /><h5>MySQL</h5></li>
                    <li><img src={JavaLogo} alt="icon" /><h5>Java</h5></li>
                    <li><img src={GitLogo} alt="icon" /><h5>Git</h5></li>
                    <li><img src={Figma} alt="icon" /><h5>Figma</h5></li>
                    <li><img src={PythonLogo} alt="icon" /><h5>Python</h5></li>
                    <li><img src={GraphQLLogo} alt="icon" /><h5>GraphQL</h5></li>
                    <li><img src={RESTAPI} alt="icon" /><h5>REST API</h5></li>
                    <li><img src={Trello} alt="icon" /><h5>Trello</h5></li>
                    <li><img src={Postman} alt="icon" /><h5>Postman</h5></li>
                    <li><img src={Firebase} alt="icon" /><h5>firebase</h5></li>
                    <li><img src={JSON} alt="icon" /><h5>JSON</h5></li>
                </ul>
              
           </div>
        </div>
    );
};

export default Skills;
