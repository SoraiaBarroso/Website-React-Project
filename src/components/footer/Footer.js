import "./Footer.css"

import { DiOpenshift } from "react-icons/di"
import {HiOutlineLocationMarker} from "react-icons/hi"
import {AiOutlinePhone} from "react-icons/ai"
import {BiMailSend} from "react-icons/bi"

const Footer = () => {
    return (
        <section id="footer">
            <div className='companyName'>
                <DiOpenshift color='white' size={55} />
                <p className='logo-text'>Tech<span>X</span></p>
            </div>
            <div className="terms">
                <p>Terms and Conditions</p>
                <p>Privacy Policy</p>
                <p>Cookie Policy</p>
            </div>
            <div className="contact">
                <div className="contact-info">
                    <HiOutlineLocationMarker color='white' size={20} />
                    <p>Madrid, Spain</p>
                </div>
                <div className="contact-info">
                    <AiOutlinePhone color='white' size={20} />
                    <p>+34 698 740 831</p>
                </div>
                <div className="contact-info">
                    <BiMailSend color='white' size={20} />
                    <p>techx@gamil.com</p>
                </div>
            </div>
        </section>
    );
};
 
export default Footer;