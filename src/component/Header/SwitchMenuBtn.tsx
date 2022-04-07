import React from "react"
import styled from "styled-components"

const Container = styled.div`
    align-items: center;
    display: flex;
    font-size: 15px;
    color: #000000;
    background: #ffffff;
    padding: 10px;
    margin-right: 200px;
`

function SwitchMenuBtn() {
    return <Container>SWAP</Container>
}

export default SwitchMenuBtn
