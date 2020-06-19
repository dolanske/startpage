import React, {Component} from "react"

class WeatherStatus extends React.Component {
    constructor() {
        super()

        this.state = {
            error: null,
            isLoaded: false,
            item: [],
        }
    }

    componentDidMount() {
        let that = this

        navigator.geolocation.getCurrentPosition(function(pos) {
            fetch ("http://api.openweathermap.org/data/2.5/weather?lat="+ pos.coords.latitude + "&lon="+ pos.coords.longitude +"&appid=61e5fb6d8fa7c7c2736431897f274f9b")
            .then(res => res.json())
            .then((result) => {
                    that.setState({
                        isLoaded: true,
                        item: result.main
                    });
                }, (error) => {
                    that.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
        });
    }

    render () {
        const { error, isLoaded, item } = this.state;

        if (!error && isLoaded && item) {
            // Convert kelvin to celsius
            let c = item.temp - 273;
            let out;

            if (c < -10) {
                out = "fucking cold";
            } else if (c < 0) {
                out = "freezing ngl"
            } else if (c < 10) {
                out = "not summer tbh"
            } else if(c < 18) {
                out = "jeans"
            } else if (c < 23) {
                out = "superb, perfect, ideal"
            } else if (c < 28) {
                out = "oven-like"
            } else if (c > 29) {
                out = "for straight up not having a good time"
            }

            return ( <span>{out}</span> )
        } else {
            return ( <span>Error when loading weather</span> )
        }

    }
}

export default WeatherStatus
