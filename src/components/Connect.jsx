import React from 'react';
import { Link } from "react-router-dom";

const Connect = () => {
    return (
        <div id="connect">
            {/* <Link to="/resume"><img src="./images/logos/resume-cv-icon.svg" alt="Resume" /><p>Resume</p></Link> */}
            <a href="./assets/Shawn_Hellwege_resume.pdf" target="_blank"><img src="./images/logos/resume-cv-icon.svg" alt="Resume/CV" /><p>Résumé</p></a>
            <a href="mailto:shellwe@gmail.com"><img src="./images/logos/gmail-icon.svg" alt="Email Me" /><p>Email</p></a>
            <a href="tel:1402-570-7904"><img src="./images/logos/message-phone-chat-icon.svg" alt="Call or text" /><p>Call</p></a>
            <a href="https://www.linkedin.com/in/shawnhellwege/" target="_blank" rel="noreferrer"><img src="./images/logos/linkedin-app-icon.svg" alt="LinkedIn" /><p>LinkedIn</p></a>
            <a href="https://github.com/shellwe/" target="_blank" rel="noreferrer"><img src="./images/logos/github-icon.svg" alt="Github" /><p>Github</p></a>
        </div>
    )
}

export default Connect;