import Hangman from "./Hangman/Hangman";
import Memory from "./Memory/Memory";
import Memory2 from "./Memory2/Memory2";
import Crosswords from "./Crosswords/Crosswords"
import WordFind from "./WordFind/WordFind.jsx"

const gamesArray = [
    {
        game: <Memory/>,
        name: "Memory Game - Basics",
        id:1
    },
    {
        game: <Memory2 />,
        name: "Memory Game - Advanced",
        id:2 
    },
    {
        game: <Hangman />,
        name: "Hangman",
        id:3
    },
    {
        game: <Crosswords />,
        name: "Crosswords",
        id:7
    },
    {
        game: <WordFind />,
        name: "Word Find",
        id:8
    }
]

export default gamesArray