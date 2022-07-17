import { faMailBulk, faMailForward, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaLinkedin } from 'react-icons/fa'
import styles from '../../styles/Home.module.css'


const ContactPage = ({ }) => {
    const {contactPage,textContact,genFont,contactMe,aboutUl} = styles
    return (
        <div className={contactPage}>
            <h2>About me</h2>
            <ul className={aboutUl}>
                    <li>{"I'm a front end developer who is based in London,Orpington." }</li>
                    <li> I love sports, especially football and basketball.</li>
                    <li>I took an interest in programming as I have a curious mind and want to keep learning.</li>
                    <li>I like solving problems and very keen on details. I aim to keep learning so I can become a full stack developer !</li>
                </ul>
            <h2 className='getInTouch'>Get in touch!</h2>
            <ul className={textContact}>
                <li>  <a href="tel:07949429180" ><FontAwesomeIcon icon={faPhone} className={genFont} /></a> </li>
                <li><a href="mailto:davidrtm45@gmail.com"><FontAwesomeIcon icon={faMailBulk} className={genFont} /> </a> </li>
                <li><a href="https://www.linkedin.com/in/david-akingbehin-15b691224/"><FaLinkedin className={genFont} /> </a> </li>
            </ul>
        </div>
    )
}

export default ContactPage