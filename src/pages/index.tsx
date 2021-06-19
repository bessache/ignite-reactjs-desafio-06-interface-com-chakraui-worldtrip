import {Divider, Flex, Text } from '@chakra-ui/react'
import { GetStaticProps } from "next";
import Prismic from '@prismicio/client';
import Head from "next/head";
import { Banner } from '../components/Banner'
import { Header } from '../components/Header'
import Slider from '../components/Slider'
import { TravelType } from '../components/TravelType'
import { getPrismicClient } from '../services/prismic';


interface HomeProps {
  continents:{
    slug: string;
    title: string;
    summary: string;
    image: string;
  }[]
}

export default function Home({continents}:HomeProps) {
  return (
      <Flex
        w="100vm"
        h="100vh"
        alignItems="center"
        flexDirection="column"
        
      >
        <Head>
          <title>WorldTrip - Home</title>
              <meta property="og:image" content="/images/ogimage.png" />
              <meta property="og:image:secure_url" content="/images/ogimage.png" />
              <meta name="twitter:image" content="/images/ogimage.png" />
              <meta name="twitter:image:src" content="/images/ogimage.png" />
              <meta property="og:title" content="WorldTrip" />
              <meta name="twitter:title" content="WorldTrip" />
        </Head>
        <Header/>
        <Banner/>
        <TravelType/>
        <Divider width="90px" borderColor="dark.600" background="dark.600" height="1.2px" textAlign="center" marginY="40px"/>
        <Text
        textAlign="center"
        fontSize="36px"
        my="25px"
        >
            Vamos nessa?<br/>Então escolha seu continente
        </Text>
        <Slider continents={continents}/>
        <Divider/>
      </Flex>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query(
    [Prismic.Predicates.at('document.type', 'continent')]
  )
  console.log(response)

  const continents = response.results.map(continent => {
    return {
      slug: continent.uid,
      title: continent.data.title,
      summary: continent.data.summary,
      image: continent.data.image.url
    }
  })

  return {
    props: {
      continents
    }
  }
}
