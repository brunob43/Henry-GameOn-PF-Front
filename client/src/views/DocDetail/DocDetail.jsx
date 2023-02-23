import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { countViewsDocs, getDetailFromState } from "../../redux/actions";
import docArray from "../../games/gamesIndex";
import style from "./GameDetail.module.css";

const DocDetail = () =>{
    const { id } = useParams();
    const dispatch = useDispatch();
    console.log(id)
    
    useEffect(()=>{
        dispatch(getDetailFromState(id));
        countViewsDocs(id)
    }, [dispatch, id])

    const docDetail = useSelector((state) => state.docDetail);

    const doc = docArray.filter((doc) => doc.id.toString() === id)

    return(
        <div className={style.main}>
            <div className={style.title}>
                {doc[0].name} 
            </div>

            <div>
                {doc.length === 1 
                ? doc[0].doc
                : console.log(id)
                }
            </div>
        </div>

    )

    //---------------------------de BDD-------------------------//

    // export default function DocDetail(props) {
    // console.log(props)
    // const dispatch = useDispatch()

    // const docDetail = useSelector((state) => state.detail)
    // console.log(myDetail)


    // useEffect(() => {
    //     dispatch(getDetail(props.match.params.id));
    // }, [])

    // return (
    //     <div className={style.main}>
    //         {
    //             <div className={style.title}>
    //                 <h1 className={style.h1}>{myDetail.name}</h1>
    //                 <img src={myDetail.image} />
    //                 <h2>{myDetail.id}</h2>
                
    //                 <p className={style.label}>Name : {myDetail.name}</p>
    //                 <p className={style.label}>Image: {myDetail.image}</p>
    //                 <p className={style.label}>Content: {myDetail.content}</p>
    //                 <p className={style.label}>Author: {myDetail.author}</p>
     //                <p className={style.label}>Topic: {myDetail.topic}</p>
               
                    
    //                 <Link to="/home">
    //                     <button className={style2.button}>Volver</button>
    //                 </Link>
    //             </div>
    //         }
    //     </div>
    // )
    // }
}


export default DocDetail;