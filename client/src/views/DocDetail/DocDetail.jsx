import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./DocDetail.module.css";
import { useParams } from "react-router-dom";

import { getDocDetailFromState, countViewsDocs } from "../../redux/actions";

    const DocDetail = () =>{
        const { id } = useParams();
        const dispatch = useDispatch();
       
        useEffect(()=>{
            dispatch(getDocDetailFromState(id));
            countViewsDocs(id)
        }, [dispatch, id])
        
        const docDetail = useSelector((state) => state.docDetail);
        
        const {doc_id} = docDetail;

     return (
         <div className={style.main}>
            {  (id == doc_id) ?
                <div className={style.title}>

                    <h1 className={style.main}>{docDetail.doc_name}</h1>
                    <img alt = {docDetail.doc_name} src = {docDetail.doc_image}></img>
                    <p className={style.main}>{docDetail.doc_topic}</p>
                    <p className={style.main}>{docDetail.doc_author}</p>
                    <p className={style.main}>{docDetail.doc_content}</p>
                    
                </div>
                :  
                 <div>
                    <h1 className={style.title}>Loading...</h1>
                 </div>
            }
         </div>
     )
     }

export default DocDetail;
