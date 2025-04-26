import { FaLinkedin, FaSquareGithub, FaSquareYoutube  } from "react-icons/fa6";

import '../../Styles/components/footer.css'

function Footer(){
    return (
        <footer>
            <h3>Copyright © 2025. All Rights Reserved to DJerowd.</h3>
            <div>
                <a href="https://www.linkedin.com/in/djerowd-moreschi/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin title='Linkedin' alt='Linkedin'/>
                </a>
                <a href="https://github.com/DJerowd/my-garage" target="_blank" rel="noopener noreferrer">
                    <FaSquareGithub title='Github' alt='Github'/>
                </a>
                <a href="https://www.youtube.com/@DJ_Moreschi" target="_blank" rel="noopener noreferrer">
                    <FaSquareYoutube title='Youtube' alt='Youtube'/>
                </a>
            </div>
        </footer>
    )
}

export default Footer;