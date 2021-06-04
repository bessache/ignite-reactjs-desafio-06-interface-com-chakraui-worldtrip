
import {Flex, Box} from '@chakra-ui/react'

export function Header(){

    return (
        <Flex
            w="100%" 
            as="header" 
            maxWidth={1440}
            h="100"
            mt="2"
            alignItems="center"
            justify="center"
        >
            <Box>
                <img src="/images/Logo.svg" alt="logo"/>
            </Box>
        </Flex>

    );
}