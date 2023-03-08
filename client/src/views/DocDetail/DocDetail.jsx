import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  VStack,
  Heading,
  HStack,
  Image,
  Text,
  Button,
  Box,
} from "@chakra-ui/react";
import {
  getDocDetailFromState,
  countViewsDocs,
  addLikeDoc,
  removeLikeDoc,
} from "../../redux/actions";
import { useAuth0 } from "@auth0/auth0-react";
import { PageNotFound } from "../../component/PageNotFound/PageNotFound";

const DocDetail = () => {
  const { isAuthenticated } = useAuth0();
  const { id } = useParams();
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);
  const docDetail = useSelector((state) => state.docDetail);
  const { doc_id } = docDetail;
  const embedSpace = new RegExp('/\n/g')

  useEffect(() => {
    dispatch(getDocDetailFromState(id));
    countViewsDocs(id);
  }, [dispatch, id]);

  const likeHandler = () => {
    dispatch(addLikeDoc(id, profile.internal_id));
    window.location.reload()

  };
  const dislikeHandler = () => {
    dispatch(removeLikeDoc(id, profile.internal_id));
    window.location.reload()

  };

  return (
    isAuthenticated ? (
    <VStack>
      <Image
        mt={["162px", "55px", "40px", "40px", "40px"]}
        boxSize="525px"
        w="100%"
        alt={docDetail.doc_name}
        src={docDetail.doc_image}
        position="center"
      ></Image>
      <HStack>
        {id === doc_id.toString() ? (
          <VStack>
            <VStack>
              <Text textAlign="center" fontSize="60px" fontWeight="bold">
                {docDetail.doc_name}
              </Text>
              {Object.keys(profile).length && (
                <Box>
                   {!profile.Docs.map((d)=>d.doc_id).includes(doc_id) ? (
                   <Button bg="yellow" border="1px solid black" color="black" _hover={{bg:"#c4be00"}} onClick={likeHandler}> Like👍🏼</Button>
                   ) : (
                   <Button bg="yellow" border="1px solid black" color="black" _hover={{bg:"#c4be00"}} onClick={dislikeHandler}>Quitar Like👎🏼</Button>
          )}
        </Box>
      )}
            </VStack>

            <VStack w="70%" p="20px" align="flex-start">
              <Text fontSize="34px" fontWeight="bold">
                {docDetail.doc_topic}
              </Text>
              <Text fontSize="22px">Author: {docDetail.doc_author}</Text>
              <Text fontSize="18px">{docDetail.doc_content.split('\n').map(str => <div>{str} </div>)}</Text>
            </VStack>
          </VStack> 
        ) : (
          <VStack>
            <Heading>Loading...</Heading>
          </VStack>
        )}
      </HStack>
    </VStack>
  ) : (
    <PageNotFound />
  )
  );
};

export default DocDetail;
