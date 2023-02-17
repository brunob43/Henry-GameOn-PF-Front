import Hangman from "./Hangman/Hangman";
import Memory from "./Memory/Memory";
import Memory2 from "./Memory2/Memory2";

const gamesArray = [
    {
        game: <Memory/>,
        id:1
    },
    {
        game: <Memory2 />,
        id:2 
    },
    {
        game: <Hangman />,
        id:3
    }
]

export default gamesArray