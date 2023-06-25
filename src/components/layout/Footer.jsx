import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import style from './Footer.module.css'


function Footer() {
    return (
        <footer className={style.footer}>
            <ul className={style.socialList}>
                <li>
                    <FaFacebook />
                </li>
                <li>
                    <FaInstagram />
                </li>
                <li>
                    <FaLinkedin />
                </li>
            </ul>
            <p className={style.copyRight}>
                <span>TaskMaster</span> &copy; 2023
            </p>
        </footer>)
}

export default Footer;
