const CommandList = [
    {
        id: 1,
        command: "help",
        desc: "Syntax: help _command_ | Available commands: ",
    },
    {
        id: 2,
        command: "search",
        desc: "Syntax: search _term / url_ | Will open a new tab with the searched term / url.",
    },
    {
        id: 3,
        command: "see",
        desc: "Syntax: see _param_ | Display selected information. Available parameters: all, about, contact, cv, projects, music",
    },
    {
        id: 4,
        command: "yt",
        desc: "Syntax: yt _term_ | Will open youtube in new tab with searched term. Don't search using url.",
    },
    {
        id: 5,
        command: "uwu",
        desc: "Are you sick?",
    },
    {
        id: 6,
        command: "weather",
        desc: "Syntax: weather _param_ | Displays current weather and possibly a forecast for inserted town. Available parameters: _city_, here"
    }
]

export default CommandList
