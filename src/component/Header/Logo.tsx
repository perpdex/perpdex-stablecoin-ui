import { Flex, Heading, Spacer } from "@chakra-ui/react"

import ConnectBtn from "./ConnectBtn"
import { Link } from "react-router-dom"
import React from "react"
import styled from "styled-components"
import Tvl from "./Tvl"

const Container = styled.div`
    display: flex;
    align-items: center;
    margin-left: 20px;
`

function Logo() {
    return (
        <Container>
            <Link to="/">
                <Heading size="md" color={"#FFFFFF"}>
                    PERP USD
                </Heading>
            </Link>
            <Tvl />
        </Container>
    )
}

export default Logo
