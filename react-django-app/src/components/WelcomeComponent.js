import React, {useEffect, useState } from "react";

const WelcomeComponent = () => {
    const [message, setMessage] = useState("");

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/welcome/")
        .then((response) => response.json())
        .then((data) => setMessage(data.message))
        .catch((error) => console.log(error));
    }, []);

    return (
        <div>
            <h1>{message}</h1>
        </div>
    );
};

export default WelcomeComponent;