import "./Subscribe.css"

import EmailImg from "../../assets/mail.svg"
import {AiOutlineClose} from "react-icons/ai"
import {AiOutlineTwitter} from "react-icons/ai"
import {AiOutlineInstagram} from "react-icons/ai"
import {BiLogoFacebookCircle} from "react-icons/bi"
import { useState } from "react"

const Subscribe = () => {

    const [showWindow, setShowWindow] = useState(false);

    function HandleBtn(e) {
        setShowWindow(true);
        e.preventDefault();
    }   

    function CloseWindow() {
        setShowWindow(false);
    }

    return(
        <section id="subscribe">
            <div className="container susbcribe">
                <h1>SUBSCRIBE NOW!</h1>
                <form>
                    <input type="email" name="email" placeholder="techx@hotmail.com" required/>
                    <button onClick={HandleBtn}>Send</button>
                </form>
            </div>
            <div className="social-icon">
                <div className="icon-sb">
                    <AiOutlineInstagram size={25} color="white"/>
                </div>
                <div className="icon-sb">
                    <AiOutlineTwitter size={25} color="white" />
                </div>
                <div className="icon-sb">
                    <BiLogoFacebookCircle size={25} color="white"/>
                </div>
            </div>
            {
                showWindow === true ? 
                <div className="subs-panel">
                    <div className="window-subs">
                        <div className="img-email">
                            <img src={EmailImg} alt="mail img"></img>
                        </div>
                        <div className="text-email">
                            <h1>Thank you!</h1>
                            <p>Your will receive emails with the latest news about our project</p>
                        </div>
                        <AiOutlineClose onClick={CloseWindow} className="close-icon" size={25} color="rgba(19, 55, 113, 0.957)"/>
                    </div>
                </div> 
                : <div></div>
            }
        </section>
    )
}

export default Subscribe