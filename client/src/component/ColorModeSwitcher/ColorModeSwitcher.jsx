import { useColorMode, Button, HStack } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from '@chakra-ui/icons'



// const theme = extendTheme({
//     styles: {
//       global: {
//         // styles for the `body`
//         body: {
//           bg: 'gray.400',
//           color: 'white',
//         },
//     }
// }
// });

export function ColorModeSwitcher() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
   
    <Button onClick={toggleColorMode} 
   p="35px"
    colorScheme='black' variant='link'
    borderColor={colorMode === "dark" ? "yellow" : "black"}>
      {isDark ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
}


