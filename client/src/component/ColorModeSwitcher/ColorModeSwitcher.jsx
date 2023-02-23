import { useColorMode, Button } from "@chakra-ui/react";



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
    bg={colorMode === "dark" ? "black" : "yellow"} 
    _hover={colorMode === "dark" ? { bg: 'yellow', color: 'black' } : { bg: 'black', color: 'yellow' }}
    border='1px'
    borderColor={colorMode === "dark" ? "yellow" : "black"}>
      {isDark ? "Modo claro 🌞" : "Modo oscuro 🌙"}
    </Button>
  );
}

