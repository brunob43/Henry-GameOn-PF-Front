import Hangman from "./Hangman/Hangman";
import Memory from "./Memory/Memory";
import Memory2 from "./Memory2/Memory2";
import Crosswords from "./Crosswords/Crosswords"

const gamesArray = [
    {
        game: <Memory/>,
        name: "Memory Game - Basics",
        id:11
    },
    {
        game: <Memory2 />,
        name: "Memory Game - Advanced",
        id:12 
    },
    {
        game: <Hangman />,
        name: "Hangman",
        id:13
    },
    {
        game: <Crosswords />,
        name: "Crosswords",
        id:14
    }
]

export default gamesArray