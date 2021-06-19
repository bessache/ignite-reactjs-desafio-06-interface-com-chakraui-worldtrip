
import {Flex, Image, Box} from '@chakra-ui/react'

export function Header(){

    return (
        <Flex
            w="100%" 
            as="header" 
            maxWidth={1440}
            h="100"
            alignItems="center"
            justify="center"
        >
            <Image src="/images/Logo.svg" alt="logo"/>
        </Flex>
    );
}