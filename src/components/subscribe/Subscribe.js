import "./Subscribe.css"

import {AiFillAccountBook, AiOutlineTwitter} from "react-icons/ai"
import {AiOutlineInstagram} from "react-icons/ai"
import {BiLogoFacebookCircle} from "react-icons/bi"

const Subscribe = () => {
    return(
        <section id="subscribe">
            <div className="container susbcribe">
                <h1>SUBSCRIBE NOW!</h1>
                <form>
                    <input type="text" placeholder="techx@hotmail.com"></input>
                    <button onClick={(e) => {e.preventDefault();}}>Send</button>
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