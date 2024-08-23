import { useState } from "react";
import "./css/HoverInfo.css"


const HoverInfo = ({data}) => {
    const {position, link} = data
    const style = {
        "position": "absolute",
        "top": `${position.y - 20}px`,
        "left": `${position.x + 50}px`,
    };

    return (
        <div className='hover-info' style={style}>
            <p>{link}</p>
        </div>
    );
};

export default HoverInfo;
