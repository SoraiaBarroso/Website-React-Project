import "./Faq.css"

import faqImg from "../../assets/faq.svg"
import rocket from "../../assets/rocket.png"


const Faq = () => {
  return (
    <section id="faq">
        <div className="container faq"> 
            <div className="container-grid">
                <div className="grid-item">
                    <img src={rocket} alt="img"></img>
                    <h1>Getting started</h1>
                    <p>Te damos la bienvenida a Slack, nos alegramos de verte. Y ahora, manos a la obra.</p>
                </div>
                <div className="grid-item">
                    <img src={rocket} alt="img"></img>
                    <h1>Getting started</h1>
                    <p>Te damos la bienvenida a Slack, nos alegramos de verte. Y ahora, manos a la obra.</p>
                </div>
                <div className="grid-item">
                    <img src={rocket} alt="img"></img>
                    <h1>Getting started</h1>
                    <p>Te damos la bienvenida a Slack, nos alegramos de verte. Y ahora, manos a la obra.</p>
                </div>
                <div className="grid-item">
                    <img src={rocket} alt="img"></img>
                    <h1>Getting started</h1>
                    <p>Te damos la bienvenida a Slack, nos alegramos de verte. Y ahora, manos a la obra.</p>
                </div>
            </div>
            <div className="container-right">
                <img src={faqImg}></img>
            </div>
        </div>
    </section>
  )
}

export default Faq
