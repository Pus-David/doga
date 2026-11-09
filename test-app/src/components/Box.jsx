import { useState } from "react";

export function Box() {
    const [message, setMessage] = useState("valts messaget");

    function valt() {
        setMessage("clicked");
    }
    return (
        <div>
            <button onClick={valt}>GOMB 1</button>
            allapot: {number1}
        </div>
    );
}
