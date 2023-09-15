import React from "react";
import "./Download.css"
import {AiFillApple} from "react-icons/ai"
import {AiFillWindows} from "react-icons/ai"
import {DiLinux} from "react-icons/di"

import DownloadBtn from "./DownloadBtn";

const Download = () => {
    return(
        <section id="download">
            <div className="download">
                <h1>DOWNLOAD WEBSITE ANALYZER TECH-X</h1>
                <p>Analyze for free your website and receive feedback to improve your site</p>
                <div className="dwn-btns">
                    <DownloadBtn icon={<AiFillApple color="white" size={22}/>} name={"Mac"}/>
                    <DownloadBtn icon={<AiFillWindows color="white" size={22}/>} name={"Windows"}/>
                    <DownloadBtn icon={<DiLinux color="white" size={22}/>} name={"Linux"}/>
                </div>
            </div>
        </section>
    )
};

export default Download;