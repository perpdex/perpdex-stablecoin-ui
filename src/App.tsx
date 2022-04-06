import WalletListModal from "component/WalletModal"
import { Route, Switch } from "react-router-dom"
import Header from "./component/Header"
import Home from "./page/Home"
import "focus-visible/dist/focus-visible"
import { Divider } from "@chakra-ui/react"
import ClosePositionModal from "component/ClosePositionModal"
import AdjustMarginModal from "component/AdjustMarginModal"
import BlockedRegionModal from "component/BlockedRegionModal"
import UserAgreementModal from "component/UserAgreementModal"
import styled from "styled-components"

const Container = styled.div`
    background-color: black;
    text-align: justify;
    text-justify: inter-ideograph;
`

export const App = () => (
    <Container>
        <Header />
        <Divider />
        <Switch>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
        <WalletListModal />
        <ClosePositionModal />
        <AdjustMarginModal />
        <UserAgreementModal />
        {/* NOTE: BlockedRegionModal should be in the last one */}
        <BlockedRegionModal />
    </Container>
)
