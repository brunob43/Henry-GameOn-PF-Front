import { HStack, VStack, Text} from "@chakra-ui/react";
const Footer = () => {
  return (
    <HStack w="100%" justifyContent="center" p="45px" bg="black">
      <VStack fontSize="14" color="white" >
        <Text>Trabajo realizado con 💛 por alumnos de Henry</Text>
        <Text>Henry GameOn 2023</Text>
      </VStack>
    </HStack>
  );
};

export default Footer;
