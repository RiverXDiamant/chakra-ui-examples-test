import { useState } from 'react'
import reactLogo from './assets/react.svg'

// ChakraUI Components
import { Box, Text, Heading, Button } from "@chakra-ui/react"
import { MdBuild , MdCall } from "react-icons/md"
import { Flex, Spacer} from '@chakra-ui/react'
import {Stack, HStack, VStack} from "@chakra-ui/react"


// PowerGlitch Component
import {PowerGlitch} from "powerglitch"




//css
import './App.css'

export default function App() {

  PowerGlitch.glitch(
    '.some-element',
    {
      playMode: 'always',
      hideOverflow: true,
      timing: {
          duration: 1000,
          iterations: 15,
          easing: 'ease-in-out',
      },
      glitchTimeSpan: {
          start: 0.4,
          end: 0.7,
      },
      shake: {
          velocity: 10,
          amplitudeX: 0.4,
          amplitudeY: 0.4,
      },
      slice: {
          count: 4,
          velocity: 10,
          minHeight: 0.02,
          maxHeight: 0.40,
          hueRotate: true,
      },
  }
    
    )

  return (
    <div className="App">
      {/*Heading example; If you don't specify a heading using 'as' prop, it will render <h2> by default */}

      <Heading as="h1" fontSize='40px'>Chakra Component Heading Example</Heading>
      <br/>
      <h1 className="some-element">Flex and Box Example</h1>
      <br/>
      {/*Flex and Box example */}
      <Flex justify='center'>
      <Box bg='blue' textColor="white" w="400px" h="100" p='40px'>
        Box 1
      </Box>
      {/*make Box as semantic HTML example */}
      <Box as="section" bg='red' textColor="white" w="300px" h="100" p='40px'>
        Box - Semantic HTML Example
      </Box>
      </Flex>
      <br/>
      <hr/>
      <br/>
      <h1>Stack / VStack / HStack Example </h1>
      <br/>
      {/* Stack/VStack/HStack example */}
        <HStack>
        <Box bg='blue' textColor="white" w="400px" h="100" p='40px'>
        Box 2
      </Box>
      <Box bg='blue' textColor="white" w="400px" h="100" p='40px'>
        Box 3
      </Box>
      <Box bg='blue' textColor="white" w="400px" h="100" p='40px'>
        Box 4
      </Box>
        </HStack>

      <br/>
      <hr/>
      <br/>
      <h1>Text Example </h1>
      <br/>
      {/*Text example */}
    <Text noOfLines={2}>
    "The quick brown fox jumps over the lazy dog" is an English-language pangram—a
  sentence that contains all of the letters of the English alphabet. Owing to
  its existence, Chakra was created."
    </Text>
      <br/>
      <hr/>
      <br/>
      <h1>Styled Props / Buttons / PowerGlitch Example </h1>
      <br/>

      <Flex justify='center'>
      <Box bg='blue' textColor="white" w="400px" h="100" p='10px'>
        <Text fontSize='20px'>Box 5</Text>

        {/*Use built in colorScheme for button color; _hover: the background color is an object us double {} */}
        <Button mt='10px' colorScheme='blackAlpha' _hover={{background: "red"}} _focus={{background: "yellow", color: "black"}} >Click Me</Button>
      </Box>
      </Flex>
      
      <br/>

        {/*Button / Icons (react-icons)Example */}
      
      <Flex justify='center'>
        <Stack direction='row' spacing={4}>
          <Button className="some-element" leftIcon={<MdBuild />} colorScheme='pink' variant='solid'>
          Settings
          </Button>
          <Button rightIcon={<MdCall />} colorScheme='blue' variant='outline'>
          Call us
          </Button>
        </Stack>
      </Flex>
      
       
    </div>
  )
}

