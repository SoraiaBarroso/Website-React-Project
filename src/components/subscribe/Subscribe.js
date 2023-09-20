import "./Subscribe.css"

import {AiOutlineTwitter} from "react-icons/ai"
import {AiOutlineInstagram} from "react-icons/ai"
import {BiLogoFacebookCircle} from "react-icons/bi"

const Subscribe = () => {

    function HandleBtn(e) {
        e.preventDefault();
    }   

    return(
        <section id="subscribe">
            <div className="container susbcribe">
                <h1>SUBSCRIBE NOW!</h1>
                <form action="" method="POST">
                    <input className="input-email" type="email" name="email" pattern=".+@gmail\.com" size={30} placeholder="techx@gmail.com" required/>
                    <input className="btn-input" type="submit" onClick={HandleBtn} value="Send"/>
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
        </section>
    )
}

export default Subscribe