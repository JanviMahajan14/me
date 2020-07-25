import React from 'react';

const Projects = () => {
    return (
        <div id="projects" className="container-fluid">
            <h1>My Projects</h1>
            <div className="row project-content">
                <div className="col-xl-7 col-xs-12"><img className="materialboxed" src="https://res.cloudinary.com/smilingcloud/image/upload/v1595668246/Screenshot_from_2020-07-24_15-56-04_kjw22z.png" alt="" style={{ width: "400px", height: "300px" }}></img></div>
                <div className="col-xl-5 col-xs-12">
                    <h4 className="project-title">
                        <a href="https://github.com/JanviMahajan14/Social-Buddy" target="_blank">
                        Social Buddy
                        <i class="fa fa-github fa-1x" aria-hidden="true" style={{marginLeft:"10px"}}></i>
                        </a>
                    </h4>
                    <div className="project-suite">
                        <span>ReactJS</span>
                        <span>React Hooks</span>
                        <span>Context API</span>
                        <span>NodeJS</span>
                        <span>Express</span>
                        <span>Mongo DB</span>
                        <span>JWT Auth</span>
                    </div>
                    <div className="project-description">
                        <p>
                            A social-networking Full Stack React Application with React Hooks and Context API for state management.
                            Peristent No Sql DB and JWT Authentication Features.
                            Includes RESTful API with Express and NodeJS
                        </p>
                    </div>
                </div>
            </div>

            {/* testib */}
            {/* <div className="row project-content">
                <div className="col-6"><img className="materialboxed" src="https://res.cloudinary.com/smilingcloud/image/upload/v1595668246/Screenshot_from_2020-07-24_15-56-04_kjw22z.png" alt="" style={{ width: "400px", height: "300px" }}></img></div>
                <div className="col-6">
                    <h4 className="project-title">
                        <a href="https://github.com/JanviMahajan14/Social-Buddy" target="_blank">
                            Social Buddy
                        <i class="fa fa-github fa-1x" aria-hidden="true" style={{ marginLeft: "10px" }}></i>
                        </a>
                    </h4>
                    <div className="project-suite">
                        <span>ReactJS</span>
                        <span>React Hooks</span>
                        <span>Context API</span>
                        <span>NodeJS</span>
                        <span>Express</span>
                        <span>Mongo DB</span>
                        <span>JWT Auth</span>
                    </div>
                    <div className="project-description">
                        <p>
                            A social-networking Full Stack React Application with React Hooks and Context API for state management.
                            Peristent No Sql DB and JWT Authentication Features.
                            Includes RESTful API with Express and NodeJS
                        </p>
                    </div>
                </div>
            </div>

            {/* testing */}
            {/* <div className="row project-content">
                <div className="col-6"><img className="materialboxed" src="https://res.cloudinary.com/smilingcloud/image/upload/v1595668246/Screenshot_from_2020-07-24_15-56-04_kjw22z.png" alt="" style={{ width: "400px", height: "300px" }}></img></div>
                <div className="col-6">
                    <h4 className="project-title">
                        <a href="https://github.com/JanviMahajan14/Social-Buddy" target="_blank">
                            Social Buddy
                        <i class="fa fa-github fa-1x" aria-hidden="true" style={{ marginLeft: "10px" }}></i>
                        </a>
                    </h4>
                    <div className="project-suite">
                        <span>ReactJS</span>
                        <span>React Hooks</span>
                        <span>Context API</span>
                        <span>NodeJS</span>
                        <span>Express</span>
                        <span>Mongo DB</span>
                        <span>JWT Auth</span>
                    </div>
                    <div className="project-description">
                        <p>
                            A social-networking Full Stack React Application with React Hooks and Context API for state management.
                            Peristent No Sql DB and JWT Authentication Features.
                            Includes RESTful API with Express and NodeJS
                        </p>
                    </div>
                </div>
            </div>  */}
        </div>
    );
}
 
export default Projects;