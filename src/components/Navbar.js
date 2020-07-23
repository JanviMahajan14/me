import React from 'react';

const Navbar = () => {
    const renderList = ["Home", "About Me", "Skills", "Projects", "Contact"]
    return (
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top" style={{backgroundColor:"black"}}>
            <button class="navbar-toggler ml-auto custom-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mx-auto">
                    {
                        renderList.map((item) => {
                            return (
                              <li class="nav-item active text-center bounceIn ">
                                <a class="nav-link" href="#">
                                  {item}
                                </a>
                              </li>
                            );
                        })
                    }
                </ul>
            </div>
        </nav>
    );
}
 
export default Navbar;