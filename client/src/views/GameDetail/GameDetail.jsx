import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { countViewsGames, getDetailFromState } from "../../redux/actions";
import gamesArray from "../../games/gamesIndex";
import style from "./GameDetail.module.css";

const GameDetail = () =>{
    const { id } = useParams();
    const dispatch = useDispatch();
   
    
    useEffect(()=>{
        dispatch(getDetailFromState(id));
        countViewsGames(id)
    }, [dispatch, id])

    const gameDetail = useSelector((state) => state.gameDetail);

    const {game_id} = gameDetail;

    const game = gamesArray.filter((game) => game.id.toString() === id)


    return(
        
        <div className={style.main}>
            { (id == game_id) ?
             <div>   
            <div className={style.title}>
                {game[0].name} 
            </div>

            <div>
                {game.length === 1 
                ? game[0].game
                : console.log(id)
                }
            </div>
            </div> :
             <div>
             <h1 className={style.title}>Loading...</h1>
          </div>
            }
        </div>

    )
}

export default GameDetail;