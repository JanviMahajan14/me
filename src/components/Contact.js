import React from 'react';

const Contact = () => {
    return ( 
        <div id="contact">
            <h1>Say hello!</h1>
            <h4>Available to start new projects</h4>
            <ul id="links">
                <li><a target="_blank" href="https://github.com/JanviMahajan14"><i class="fa fa-github fa-3x" aria-hidden="true"></i></a></li>
                <li><a target="_blank" href="https://www.linkedin.com/in/janvi-mahajan-497377167/"><i class="fa fa-linkedin fa-3x" aria-hidden="true"></i></a></li>
                <li><a target="_blank" href="https://www.facebook.com/janvi.mahajan.31945/"><i class="fa fa-facebook-official fa-3x" aria-hidden="true"></i></a></li>
                <li><a target="_blank" href="https://www.facebook.com/janvi.mahajan.31945/"><i class="fa fa-instagram fa-3x" aria-hidden="true"></i></a></li>
            </ul>
            <h4>Email me: <a href="mailto:janvimahajan337@gmail.com">janvimahajan337@gmail.com</a></h4>
            <h3 style={{fontSize:"1rem"}}>made with <i class="fa fa-heart" aria-hidden="true"></i> by Janvi Mahajan</h3>
        </div>
    );
}
 
export default Contact;