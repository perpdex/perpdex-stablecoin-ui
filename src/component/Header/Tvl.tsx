import React from "react"
import styled from "styled-components"

const Container = styled.div`
    align-items: left;
    height: 24px;
    margin: auto;
    margin-left: 20px;
    border: solid;
    border-color: #242424;
    display: flex;
    font-size: 14px;
    color: #ffffff;
    padding-left: 12px;
`

const Text = styled.p`
  color: '#ffffff'
  padding-right: 5px;
  margin: 2px auto;
  margin-right: 12px;
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
