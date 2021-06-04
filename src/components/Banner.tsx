import {Flex,Text, Image, Box, Stack} from '@chakra-ui/react'

export function Banner(){

    return (
        <Flex
            w="100%" 
            h="368.21"
            //bg="blue"
            alignItems="center"
            justifyContent="center"
            position="relative"
            
        >
            <Box
                w="100%" 
                h="335"
                position="absolute"
                top="0"
                left="0"  
            >
                <Image 
                    w="100%"
                    h="100%"
                    src="/images/BannerBackground.png" 
                    alt="Banner"
                />
                                
            </Box>
            <Flex
                w="100%"
                h="368.21"
                maxWidth={1440}
                //bg="red"
                zIndex="1"
                alignItems="center"
                justifyContent='space-around'
                px="4"
            >
                <Flex
                    flexDirection="column"
                    alignItems="left"
                    justifyContent="center"
                    p="4"
                    color="light.200"
                    //bg="green"
                >
                    <Stack
                        spacing="4"
                    >
                        <Text
                            fontSize="3xl"
                            fontWeight="medium"
                        >
                            5 Continentes,<br></br>infinitas possibilidades.
                        </Text>
                        <Text
                            fontSize="sm"
                            fontWeight="regular"
                        >
                            Chegou a hora de tirar do papel a viagem que você<br></br> sempre sonhou. 
                        </Text>
                    </Stack>
                </Flex>
                <Flex 
                    boxSize="xs"
                    //bg="yellow"
                    alignItems='flex-end'
                    alignSelf="flex-end"
                    transform="rotate(-3deg)"
                
                >
                    <Image src="/images/BannerAirplane.png" alt="Airplane"/>
                </Flex>
            </Flex>
        </Flex>
    );
}