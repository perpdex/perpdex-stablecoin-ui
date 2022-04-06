import { Flex, Heading, Spacer } from "@chakra-ui/react"

import ConnectBtn from "./ConnectBtn"
import Logo from "./Logo"
import { Link } from "react-router-dom"
import React from "react"
import styled from "styled-components"
import SwitchMenuBtn from "./SwitchMenuBtn"

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 64px;
    margin: auto;
`

function Header() {
    return (
        <Container>
            <Logo />
            <SwitchMenuBtn />
            <ConnectBtn />
        </Container>
    )
}

export default Header
