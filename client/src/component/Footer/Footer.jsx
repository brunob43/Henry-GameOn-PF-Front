import { HStack, VStack, Text} from "@chakra-ui/react";
const Footer = () => {
  return (
    <HStack w="100%" justifyContent="center" p="45px 0 25px" flex-shrink="0" box-sizing= "border-box" display= "block" bg="black">
      <VStack fontSize="14" color="white" mt="-3">
        <Text>Trabajo realizado con 💛 por alumnos de Henry</Text>
        <Text>Henry GameOn 2023</Text>
      </VStack>
    </HStack>
  );
};

export default Footer;
