import React, { useEffect, useState, useRef } from "react";

const CounterNumber = () => {
    const [count, setCount] = useState(0);
    const hasFetched = useRef(false); // Prevents multiple API calls

    useEffect(() => {
        if (!hasFetched.current) { // Ensures it runs only once
            hasFetched.current = true; // Set before calling API to prevent double fetch
            async function fetchCounter() {
                try {
                    let response = await fetch("https://3ge5x7nim42ir355oqdb35hrvu0axxvc.lambda-url.us-east-1.on.aws/");
                    let data = await response.json();
                    setCount(data);
                } catch (error) {
                    console.error("Error updating counter:", error);
                }
            }
            fetchCounter();
        }
    }, []); // Empty dependency array ensures it only runs once

    return <span id="counter-number">{count}</span>;
};

export default CounterNumber;