import React from 'react';
import './About.css';

const About = ({onProjectsClick,}) => {


    return (
        <div className="About">
            <hr className='line' />
            <h3 className='AboutText'>About</h3>
            <p className='detail'>Hello! I'm Bansi Khokhani, a passionate software engineer with a strong focus on React Native. My journey in software development has been marked by a commitment to crafting dynamic, high-performing mobile applications that provide exceptional user experiences.</p>
            <br />
            <p className='detail'>With expertise in React Native, I have built a range of mobile applications that leverage modern technologies like Redux, React Navigation, and third-party APIs to create seamless, cross-platform experiences. I am adept at translating complex business requirements into intuitive, user-friendly interfaces that engage and delight users.</p>
            <br />
            <p className='detail'>In addition to React Native, my skill set includes a variety of tools and frameworks like Node.js, Express, PostgreSQL, MongoDB, Jest, and more, allowing me to deliver scalable and efficient solutions. I thrive in collaborative environments where innovation meets functionality, always looking for ways to enhance my skills and contribute to exciting projects.</p>
            <br />
            <p className='detail'>I invite you to explore my portfolio to see the projects that reflect my technical expertise and creative problem-solving capabilities. Each project represents a step forward in my mission to develop impactful, user-centric applications.</p>
            <button className="ProjectsButton" onClick={onProjectsClick}>
                Projects
            </button>
        </div>
    );
};

export default About;
