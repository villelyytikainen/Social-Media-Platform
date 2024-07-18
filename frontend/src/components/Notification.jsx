import "./css/Notification.css";
import { useEffect, useRef } from "react";

const Notification = ({ content }) => {
    const msgRef = useRef();
    const { message, type } = content;

    useEffect(() => {
        if (message) {
            msgRef.current.focus();
        }
    }, [message]);

    return type === "error" ? (
        <div className='error'>
            <p ref={msgRef} className={message ? "errmsg" : "offscreen"} aria-live='assertive'>
                {message}
            </p>
        </div>
    ) : (
        <div className='notification'>
            <p ref={msgRef} className={message ? "notmsg" : "offscreen"} aria-live='assertive'>
                {message}
            </p>
        </div>
    );
};

export default Notification;
