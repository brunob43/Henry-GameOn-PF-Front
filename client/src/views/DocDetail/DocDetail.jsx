import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./DocDetail.module.css";
import { useParams } from "react-router-dom";
import {VStack, Heading, HStack, Image, Text} from '@chakra-ui/react'
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
        <VStack  >
        {  (id == doc_id) ?
            <VStack paddingTop="75px">

                <Heading fontSize="60px" mt= {["350px", "200px", "150px", "70px", "70px"]} >{docDetail.doc_name}</Heading>
                <HStack >
                    <VStack w="50%" p="20px">
                <Image borderRadius="15px" alt = {docDetail.doc_name} src = {docDetail.doc_image}></Image>
                    </VStack>
                    <VStack w="50%" p="20px">
                <Text fontSize="34px"  className={style.main}>{docDetail.doc_topic}</Text>
                <Text fontSize="22px" className={style.main}>{docDetail.doc_author}</Text>
                <Text fontSize="18px" className={style.main}>{docDetail.doc_content}</Text>
                    </VStack>
                </HStack>
            </VStack>
            :
             <VStack>
                <Heading>
                Loading...
                </Heading>
             </VStack>
        }
     </VStack>
 )
 }

export default DocDetail;
