import type {NextPage} from 'next'
import Head from 'next/head'
import {Box, Flex, Grid} from "@chakra-ui/react";
import {useEffect, useRef} from "react";

const Home: NextPage = () => {
  const mapLibreDivRef = useRef<HTMLDivElement>(null)
  const mapboxDivRef = useRef<HTMLDivElement>(null)
  const leafletDivRef = useRef<HTMLDivElement>(null)
  const openLayersDivRef = useRef<HTMLDivElement>(null)
  const openLayersRef = useRef(null)
  useEffect(() => {
    if (!openLayersRef.current && openLayersDivRef.current) {

    }
  }, [])
  return (
    <>
      <Head>
        <title>Map Library Compare</title>
      </Head>
      <Grid width={"100vw"} gap={"4px"} height={"100vh"} gridTemplateColumns={"1fr 1fr"} gridTemplateRows={"30px 1fr 1fr"} >
        <Flex as={"nav"} gridRow={"1 / 2"} gridColumn={"1 / 3"}>Map Library Compare</Flex>
        <Box gridRow={"2 / 3"} gridColumn={"1 / 2"} ref={mapLibreDivRef} />
        <Box gridRow={"2 / 3"} gridColumn={"2 / 3"} ref={mapboxDivRef} />
        <Box gridRow={"3 / 4"} gridColumn={"1 / 2"} ref={leafletDivRef} />
        <Box gridRow={"3 / 4"} gridColumn={"2 / 3"} ref={openLayersDivRef} />
      </Grid>
    </>
  )
}

export default Home
