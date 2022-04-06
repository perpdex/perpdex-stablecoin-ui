import React from "react"
import styled from "styled-components"

const Container = styled.div`
    align-items: left;
    margin: auto;
    margin-left: 20px;
    border: solid;
    border-width: thin;
    border-color: #555555;
    display: flex;
    font-size: 15px;
    color: #ffffff;
`

const Text = styled.p`
  color: '#ffffff'
  margin: 10px;
  padding: 5px;
`

function Tvl() {
    return (
        <Container>
            <Text>27.51M</Text>
            <Text> / </Text>
            <Text>40M</Text>
            <Text> SUPPLY CAP</Text>
        </Container>
    )
}

export default Tvl
