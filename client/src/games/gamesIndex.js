import Hangman from "./Hangman/Hangman";
import Memory from "./Memory/Memory";
import Memory2 from "./Memory2/Memory2";
import Crosswords from "./Crosswords/Crosswords";
import CodeEditor from "./CodeEditor/CodeEditor";

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
        id:4
    },
    {
        game: <CodeEditor />,
        name: "Code Editor",
        id:5
    }
]

export default gamesArray