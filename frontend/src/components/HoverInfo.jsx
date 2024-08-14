import { useState } from "react";


const HoverInfo = (info) => {
    const style = {
        "fontColor": "red",
        "position": "absolute",
        "top": "100px",
        "left": "100px"
    };

    return (
        <div className='hover-info' style={style}>
            <p>Test</p>
        </div>
    );
};

export default HoverInfo;
