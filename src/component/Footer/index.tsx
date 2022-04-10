import { Flex, Heading, Spacer } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter, faDiscord, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faBook } from "@fortawesome/free-solid-svg-icons"

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 64px;
    margin: auto;
    width: 250px;
    color: white;
`

const VerticalBorder = styled.div`
    width: 1px;
    height: 20px;
    background-color: #323232;
`

function Header() {
    const iconStyle: React.CSSProperties = { fontSize: 13 }

    return (
        <Container>
            <Link to="/docs">
                <FontAwesomeIcon style={iconStyle} icon={faBook} inverse />
            </Link>

            <Link to={{ pathname: "https://twitter.com/perpdex" }} target="_blank">
                <FontAwesomeIcon style={iconStyle} icon={faTwitter} inverse />
            </Link>

            <Link to={{ pathname: "https://discord.gg/AmfhYA7q" }} target="_blank">
                <FontAwesomeIcon style={iconStyle} icon={faDiscord} inverse />
            </Link>

            <Link to={{ pathname: "https://github.com/perpdex/" }} target="_blank">
                <FontAwesomeIcon style={iconStyle} icon={faGithub} inverse />
            </Link>

            <VerticalBorder />

            <Link to="/terms">T & C</Link>
        </Container>
    )
}

export default Footer
