import React from "react"
import WeatherStatus from "./WeatherStatus"

function Title() {
    const date = new Date();

    return (
        <div>
            <h1>hello {getToday(date)} the {getDayNumber(date)}, the weather is <WeatherStatus /></h1>
        </div>
    )
}

// Ugh
function getDayNumber(date) {
    let day = date.getDate()
    switch (day) {
        case 1:
            return day + "st"
            break;
        case 2:
            return day + "nd"
            break;
        case 3:
            return day + "rd"
            break;
        default:
            return day + "th"
    }
}

function getToday(date) {
    switch (date.getDay()) {
        case 0:
            return "sunday"
            break;
        case 1:
            return "monday"
            break;
        case 2:
            return "tuesday"
            break;
        case 3:
            return "wednesday"
            break;
        case 4:
            return "thursday"
            break;
        case 5:
            return "friday"
            break;
        case 6:
            return "saturday"
            break;
        default:
            return "_date_"
    }
}

function getRanWeatherDesc() {
    const desc = [
        "pristine",
        "no idea",
        "javascript",
        "_enter weather_",
        "worst ever",
        "like in London",
        "****cold",
        "type 'search weather' and find out"
    ]

    return desc[Math.floor(Math.random() * desc.length)];
}

export default Title
