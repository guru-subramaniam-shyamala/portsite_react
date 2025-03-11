// document.addEventListener('DOMContentLoaded', function() {
//     const counter = document.querySelector("#counter-number");

//     async function updateCounter() {
//         try {
//             let response = await fetch("https://3ge5x7nim42ir355oqdb35hrvu0axxvc.lambda-url.us-east-1.on.aws/");
//             let data = await response.json();
//             animateCounter(counter, data);
//         } catch (error) {
//             console.error("Error updating counter:", error);
//         }
//     }

//     function animateCounter(element, newValue) {
//         const duration = 3000; // duration of the animation in milliseconds
//         const startValue = parseInt(element.innerText.replace(/[^0-9]/g, "")) || 0;
//         const increment = (newValue - startValue) / (duration / 10);
//         let currentValue = startValue;
        
//         const interval = setInterval(() => {
//             currentValue += increment;
//             if ((increment > 0 && currentValue >= newValue) || (increment < 0 && currentValue <= newValue)) {
//                 currentValue = newValue;
//                 clearInterval(interval);
//             }
//             element.innerHTML = `${Math.round(currentValue)}`;
//         }, 10);
//     }

//     updateCounter();
// });

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