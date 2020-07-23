import React from 'react';

const Skills = () => {
    return ( 
        <div id="skills">
            <h1>My Skills</h1>
            <p> I generally code web and mobile applications. My core skills are Javascript,
            ReactJS, NodeJS, Express, mongodb, python </p>
            <br />
            <p>Among other technologies I use on regular basis are: HTML, CSS, APIs, Git, Github, Bootstrap, C++ and NoSql Databases</p>
            <br />
            <ul className="icons">
                <li>
                    <div><i className="fa fa-heart-o fa-2x" aria-hidden="true"></i></div>
                    <h3>Creative</h3> 
                </li>
                <li>
                    <div><i class="fa fa-check fa-2x" aria-hidden="true"></i></div>
                    <h3>Programming</h3>
                </li>
                <li>
                    <div><i className="fa fa-heart-o fa-2x" aria-hidden="true"></i></div>
                    <h3>Quick Learner</h3>
                </li>
            </ul>
        </div>
    );
}
 
export default Skills;