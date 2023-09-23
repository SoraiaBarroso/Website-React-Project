import "./Faq.css"

import { ImBooks } from "react-icons/im"

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
            <div className="u-title">
                <ImBooks color="#00B0FF" size={30} className="icon"/>
                <h2>- GET STARTED -</h2>
                <p> TechX has Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit. Nullam mollis leo at dapibus dictum.
                    Ut posuere est erat, id semper dui ultricies at.
                </p>
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
