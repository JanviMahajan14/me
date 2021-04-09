import React from 'react';

const Projects = () => {
    return (
        <div id="projects" className="container-fluid">
            <h1>My Projects</h1>
            <div className="row project-content">
                <div className="col-xl-7 col-xs-12"><img className="materialboxed" src="https://res.cloudinary.com/smilingcloud/image/upload/v1595668246/Screenshot_from_2020-07-24_15-56-04_kjw22z.png" alt="" style={{ width: "400px", height: "300px" }}></img></div>
                <div className="col-xl-5 col-xs-12">
                    <h4 className="project-title">
                        <a href="https://github.com/JanviMahajan14/Smvdu_Blog" target="_blank">
                        Smvdu_Blog
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
                            A blog website for university built with React Hooks and Context API for state
                            management. Peristent No Sql DB and JWT Authentication Features.
                            Includes RESTful API with Express and NodeJS.Have capabilities to like, comment, post and follow, unfollow people.
                            Feature to upload and download Notes to help university students.
                        </p>
                    </div>
                </div>
            </div>

            
            <div className="row project-content">
                <div className="col-xl-5 col-xs-12">
                    <h4 className="project-title">
                        <a href="https://github.com/JanviMahajan14/Foodies_Check" target="_blank">
                            Foodies_Check
                        <i class="fa fa-github fa-1x" aria-hidden="true" style={{ marginLeft: "10px" }}></i>
                        </a>
                    </h4>
                    <div className="project-suite">
                        <span>NextJS</span>
                        <span>ReactJS</span>
                        <span>MongoDB Atlas</span>
                        <span>Payment Gateway</span>
                    </div>
                    <div className="project-description">
                        <p>
                            Foodies Check is a fully functional portal to order your favorite food online and avoid paying in cash.
                            This project is an initiative to digitalize the nearby food stores at times of COVID-19.
                            Includes CART functionality, Payment Gateway Integration using STRIPE API.
                            Feature to support multiple admins to Add and Delete their Dishes.
                            CRUD application built with NextJS, ReactJs (Frontend), MongoDB (NoSQL DB).
                        </p>
                    </div>
                </div>
                <div className="col-xl-7 col-xs-12" style={{ paddingLeft:"110px"}}><img className="materialboxed" src="https://res.cloudinary.com/smilingcloud/image/upload/v1617967715/Screenshot_from_2021-04-09_17-02-28_d7fsdb.png" alt="" style={{ width: "400px", height: "300px" }}></img></div>
            </div>

            
            {/* <div className="row project-content">
                <div className="col-6"><img className="materialboxed" src="https://res.cloudinary.com/smilingcloud/image/upload/v1617967729/Screenshot_from_2021-04-09_16-57-55_p3fytj.png" alt="" style={{ width: "400px", height: "300px" }}></img></div>
                <div className="col-6">
                    <h4 className="project-title">
                        <a href="https://github.com/JANVIMAHAJAN14/WEATHER-APP" target="_blank">
                            Weather Application
                        <i class="fa fa-github fa-1x" aria-hidden="true" style={{ marginLeft: "10px" }}></i>
                        </a>
                    </h4>
                    <div className="project-suite">
                        <span>NodeJS</span>
                        <span>Express</span>
                        <span>handlebars</span>
                    </div>
                    <div className="project-description">
                        <p>
                            Weather application built with NodeJs, express, and handlebars.
                            It uses Geocoding and Dark Sky API. Provides information regarding the weather of the place as perthe location
                            entered by the user.
                        </p>
                    </div>
                </div>
            </div>   */}
        </div>
    );
}
 
export default Projects;