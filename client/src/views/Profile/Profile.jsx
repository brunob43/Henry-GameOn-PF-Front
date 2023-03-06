import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom";
import { VStack, Text, Image, HStack, Divider, Button } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { profileCreation } from "../../component/Utils/utils";
import { resetProfile, sendProfile } from "../../redux/actions";
import Donut from "./graph/Donut";
import LineaBsic from "./graph/LineaBasic";
import TableLikeDocs from "./graph/TableLikeDocs"
import TableLikeGames from "./graph/TableLikeGames";
import DonutDocs from "./graph/DonutDocs";
import DonutGames from "./graph/DonutGames";
import { EmailIcon } from "@chakra-ui/icons";
import ButtonDelete from "./ButtonDelete";

const Profile = () => {
  const dispatch = useDispatch();
  const { user, } = useAuth0();
  const profile = useSelector((state) => state.profile);

  useEffect(() => {
    if (user) {
      let prof = profileCreation(user);
      dispatch(sendProfile(prof));
    } else {
      dispatch(resetProfile());
    }
  }, [user, dispatch]);

  return (
    <>
      <VStack>
        <HStack mt="150px">
          <VStack>
            <VStack p="6">
              <Image
                src={profile.user_image}
                alt={profile.user_name}
                borderRadius="50px"
                w="200px"
              ></Image>
              <Text>{profile.user_name}</Text>
              <HStack>
                <EmailIcon />
                <Text>{profile.user_email}</Text>
              </HStack>
            </VStack>

            <NavLink to="/userprofile">
              <HStack border="1px" p="2">
                <Text>Edit Profile</Text>
                <EditIcon />
              </HStack>
            </NavLink>
            <HStack>
              <ButtonDelete/>
            </HStack>
          </VStack>
        </HStack>

        <VStack>
          <Divider p="6" orientation="horizontal" />
          <HStack p="45px">
            <LineaBsic />
            <Donut />
            
          </HStack>
          <HStack>
            <DonutGames />
            <DonutDocs />
          </HStack>

          <HStack>
          <TableLikeGames/>
          <TableLikeDocs/>

          </HStack>
        </VStack>
      </VStack>
    </>
  );
};

export default Profile;
