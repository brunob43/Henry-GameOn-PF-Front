import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDocDetailFromState } from "./redux/actions"
import style from "./DocDetail.module.css";


    const DocDetail = () =>{
        const { id } = useParams();
        const dispatch = useDispatch();
       
        useEffect(()=>{
            dispatch(getDocDetailFromState(id));
            countViewsDoc(id)
        }, [dispatch, id])
    
        const docDetail = useSelector((state) => state.docDetail);


     return (
         <div className={style.main}>
            {
                <div className={style.title}>

                    <h1 className={style.main}>{docDetail.doc_name}</h1>
                    <img alt = {docDetail.doc_name} src = {docDetail.doc_image}></img>
                    <p className={style.main}>{docDetail.doc_topic}</p>
                    <p className={style.main}>{docDetail.doc_author}</p>
                    <p className={style.main}>{docDetail.doc_content}</p>
                    
                </div>
            }
         </div>
     )
     }


export default DocDetail;
