import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {VStack, Heading, HStack, Image, Text, Button, Box} from '@chakra-ui/react'
import { getDocDetailFromState, countViewsDocs, addLikeDoc, removeLikeDoc } from "../../redux/actions";

    const DocDetail = () =>{
        const { id } = useParams();
        const dispatch = useDispatch();
        const profile = useSelector((state)=>state.profile)
        const likedDocs = useSelector((state)=>state.docsProfile)
        const docDetail = useSelector((state) => state.docDetail);
        const {doc_id} = docDetail;
        useEffect(()=>{
            dispatch(getDocDetailFromState(id));
            countViewsDocs(id)
           }, [dispatch, id])
        
           const likeHandler=()=>{
            dispatch(addLikeDoc(id,profile.internal_id))
        }
        const dislikeHandler=()=>{
            dispatch(removeLikeDoc(id,profile.internal_id))
        }

        console.log(id, "idParams")
        console.log(doc_id, "doc_id")

           return (
        <VStack >
           <Image mt={["170px", "100px", "40px", "40px", "40px"]} boxSize='525px' objectFit='cover' w="100%"   alt = {docDetail.doc_name} src = {docDetail.doc_image}></Image>
            <HStack  >
            {id == doc_id ?
          

            <VStack >
                <VStack>
                <Text textAlign="center" fontSize="60px" fontWeight="bold" >{docDetail.doc_name}</Text>
                    {Object.keys(profile).length&&<Box>{!likedDocs.includes(doc_id)?<Button onClick={likeHandler}>Dar Like</Button>:<Button onClick={dislikeHandler}>Quitar Like</Button>}</Box>}
                </VStack>
                   
                    <VStack w="70%" p="20px" align="flex-start">
                  <Text fontSize="34px" fontWeight="bold" >{docDetail.doc_topic}</Text>
                   <Text fontSize="22px">Author: {docDetail.doc_author}</Text>
                  <Text fontSize="18px">{docDetail.doc_content}</Text>
                    </VStack>
              
                   
        
              </VStack>
              :
             <VStack>
                <Heading>
                Loading...
                </Heading>
             </VStack>
              }


            
            </HStack>
     </VStack>
 )
 }

export default DocDetail;
