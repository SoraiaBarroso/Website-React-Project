import React from "react";
import "./DownloadBtn.css"

const DownloadBtn = ({icon, name}) => {
    return(
        <div data-aos="fade-in" className="btn-dwn">
            <div>
                {icon}
            </div>
            <div className="name">
                <h3>{name}</h3>
            </div>
        </div>
    )
};

export default DownloadBtn;