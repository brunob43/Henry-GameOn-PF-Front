import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDocDetailFromState, countViewsDocs } from "../../redux/actions"
import style from "./DocDetail.module.css";
import { useParams } from "react-router-dom";


    const DocDetail = () =>{
        const { idParams } = useParams();
        const dispatch = useDispatch();
       
        useEffect(()=>{
            dispatch(getDocDetailFromState(idParams));
            countViewsDocs(idParams)
        }, [dispatch, idParams])
        
        const docDetail = useSelector((state) => state.docDetail);
        
        const id = docDetail.doc_id;

     return (
         <div className={style.main}>
            {  (idParams == id) ?
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
