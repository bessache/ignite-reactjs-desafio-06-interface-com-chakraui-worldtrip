import {Flex } from '@chakra-ui/react'
import { Banner } from '../components/Banner'
import { Header } from '../components/Header'


export default function Home() {
  return (
    <Flex
      w="100vm"
      h="100vh"
      alignItems="center"
      flexDirection="column"
    >
      <Header/>
      <Banner/>
    </Flex>
    
  )
}
