import "./Subscribe.css"

const Subscribe = () => {
    return(
        <section id="subscribe">
            <div className="container susbcribe">
                <h1>SUBSCRIBE</h1>
                <form>
                    <input type="email" placeholder="Your Email"></input>
                    <button onClick={(e) => {e.preventDefault();}}>Send</button>
                </form>
            </div>
        </section>
    )
}

export default Subscribe