import { useEffect, useRef } from "react";

const Notification = ({ message }) => {
    const errRef = useRef();

    useEffect(() => {
        if (message) {
            errRef.current.focus();
        }
    }, [message]);

    return (
        <div className="notification">
            <p ref={errRef} className={message ? "errmsg" : "offscreen"} aria-live='assertive'>
                {message}
            </p>
        </div>
    );
};

export default Notification;
