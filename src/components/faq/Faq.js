import "./Faq.css"

import faqImg from "../../assets/faq.svg"

const Faq = () => {
  return (
    <section id="faq">
        <div className="container faq"> 
            <div className="container-grid">
                <div className="grid-item">
                    <img alt="img"></img>
                    <h1>getting started</h1>
                    <p>get started with....</p>
                </div>
                <div className="grid-item">
                    <img alt="img"></img>
                    <h1>getting started</h1>
                    <p>get started with....</p>
                </div>
                <div className="grid-item">
                    <img alt="img"></img>
                    <h1>getting started</h1>
                    <p>get started with....</p>
                </div>
                <div className="grid-item">
                    <img alt="img"></img>
                    <h1>getting started</h1>
                    <p>get started with....</p>
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
