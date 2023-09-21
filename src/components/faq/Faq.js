import "./Faq.css"

import rocket from "../../assets/rocket.png"
import pc from "../../assets/pc.png"
import user from "../../assets/add-user.png"
import bot from "../../assets/bot.png"
import workspace from "../../assets/workspace.png"
import tutorial from "../../assets/video-tutorials.png"

import GridItem from "./GridItem"

const Faq = () => {
  return (
    <section id="faq">
        <div className="container faq"> 
            <div className="container-right">
                <h1>Getting Started</h1>
            </div>
            <div className="container-grid">
                <GridItem img={rocket} title={"First steps"} />
                <GridItem img={pc} title={"Use our app"} />
                <GridItem img={user} title={"Your profile"} />
                <GridItem img={bot} title={"Automate tasks"} />
                <GridItem img={workspace} title={"Workspace administration"} />
                <GridItem img={tutorial} title={"Tutorials"} />
            </div>
        </div>
    </section>
  )
}

export default Faq
