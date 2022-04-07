import React from "react"
import { Button } from "@chakra-ui/react"
import WalletFill from "../Icon/WalletFill"
import { Global } from "container/global"
import { getShortenAccount } from "util/getShortenAddress"
import { User } from "container/user"
import styled from "styled-components"

const Container = styled.div`
    align-items: right;
    margin-right: 30px;
`

function ConnectBtn() {
    const {
        state: { address },
    } = User.useContainer()

    const {
        actions: { toggleWalletModal },
    } = Global.useContainer()

    return (
        <Container>
            <Button
                size="sm"
                onClick={toggleWalletModal}
                colorScheme="white"
                variant="outline"
                leftIcon={<WalletFill boxSize={4} />}
                color="#FFFFFF"
            >
                {address ? getShortenAccount(address) : "Connect"}
            </Button>
        </Container>
    )
}

export default ConnectBtn
