import { useState } from 'react'
import reactLogo from './assets/react.svg'

// ChakraUI Components
import { Box, Text, Heading, Button } from "@chakra-ui/react"
import { Flex, Spacer} from '@chakra-ui/react'
import {Stack, HStack, VStack} from "@chakra-ui/react"

//css
import './App.css'

export default function App() {

  return (
    <div className="App">
      {/*Heading example; If you don't specify a heading using 'as' prop, it will render <h2> by default */}

      <Heading as="h1" fontSize='40px'>Chakra Component Heading Example</Heading>
      <br/>
      <h1>Flex and Box Example</h1>
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
      <h1>Styled Props Example </h1>

      
      
       
    </div>
  )
}

