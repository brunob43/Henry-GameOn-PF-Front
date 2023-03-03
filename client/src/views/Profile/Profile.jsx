import { useAuth0 } from "@auth0/auth0-react";
import { VStack, Text, Image, HStack, Button } from "@chakra-ui/react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { profileCreation } from "../../component/Utils/utils";
import { resetProfile, sendProfile } from "../../redux/actions";
import SplineArea from "./graph/SplineArea";

const Profile = () => {
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useAuth0();
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

        <VStack >
          <Image
            src={profile.user_image}
            alt={profile.user_name}
            borderRadius="50px"
            w="200px"
          ></Image>
          <Text>{profile.user_name}</Text>
          <Text>{profile.user_email}</Text>
        </VStack>

        <Button>Edit Profile</Button>
        </HStack>

        <SplineArea />
      </VStack>
    </>
  );
};

export default Profile;
