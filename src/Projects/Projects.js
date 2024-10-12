import React from 'react';
import './Projects.css';
import './ProjectCard.css'; // Import CSS for styling
import ProjectCard from './ProjectCard';
import ExpenseManagerProject from '../assets/Projects/expense_manager.png'
import TicTacTeoProject from '../assets/Projects/Tic-Tac-Teo.png'
import MathRiddleproject from '../assets/Projects/MathRiddle.png'
import ToDoListProject from '../assets/Projects/ToDoList.png'


const Projects = () => {

    const projects = [
        {
            title: 'Expense Manager: Easy',
            description: 'Expense Manager is a mobile app designed to help users manage their daily expenses efficiently. It typically include features like Expense Tracking, Monthly/Yarly Budget Management, Privacy and Security, Data Export in term of flexibility, control, and advanced financial management.',
            imageUrl: ExpenseManagerProject, // Replace with your image URLs
            tech: ['ReactNative', 'Redux', 'Javascript'],
            githubLink: 'https://github.com/BansiKhokhani/ExpenseManager',
            projectsUrl: 'https://play.google.com/store/apps/details?id=com.harekrishna.expensemanager&pcampaignid=web_share'
        },
        {
            title: 'Math Riddle',
            description: 'The Math Riddle app is a mobile application designed to provide a variety of math-related puzzles and riddles. These riddles typically require logical thinking, problem-solving skills, and mathematical reasoning to solve. It includes fetures like variety of puzzles and Riddles, Hint system, user-friendly interface, offline mode, and Voice control.',
            imageUrl: MathRiddleproject,
            tech: ['ReactNative', 'Javascript'],
            githubLink: 'https://github.com/BansiKhokhani/MathRiddle',
            projectsUrl: ''
        },
        {
            title: 'Tic-Tac-Toe Web Game',
            description: 'Tic-Tac-Toe is a widely enjoyed two-player game, where participants alternate marking `X`es or `O`s within a 3×3 grid. It has been adapted across various platforms, from traditional pen and paper to diverse digital interfaces. The objective is simple: the player who manages to place three of their marks in a diagonal, horizontal, or vertical row emerges victorious.',
            imageUrl: TicTacTeoProject,
            tech: ['Typescript', 'HTML', 'CSS'],
            githubLink: 'https://github.com/BansiKhokhani/Tic-toe-game',
            projectsUrl: 'https://tictacteowebgame.netlify.app/'
        },
        {
            title: 'ToDoList App',
            description: 'The Todolist app is a simple yet powerful tool designed to help you stay on top of your tasks and boost productivity. Whether you’re managing daily errands, work projects, or long-term goals, this app keeps everything in one place and easily accessible.',
            imageUrl: ToDoListProject,
            tech: ['ReactNative', 'Javascript', 'Realm'],
            githubLink: 'https://github.com/BansiKhokhani/ToDoList',
            projectsUrl: ''
        }
    ];
   

    return (
        <div className="Projects">
            <hr className='line' />
            <h3 className='ProjectText'>Projects</h3>
            <div className="project">
                <div className="project-grid">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            imageUrl={project.imageUrl}
                            tech={project.tech}
                            githubLink={project.githubLink}
                            projectsUrl={project.projectsUrl}
                        />
                    ))}
                </div>
            </div>
        </div>

    );
};

export default Projects;

