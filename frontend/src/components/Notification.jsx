import { useRef } from "react";

const Notification = ({ message }) => {
    const errRef = useRef();
    return (
        <div>
            <p ref={errRef} className={message ? "errmsg" : "offscreen"} aria-live='assertive'>
                {message}
            </p>
        </div>
    );
};

export default Notification;
