import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react"
import { useEffect, useState } from "react"

import { Connection } from "container/connection"
import GetStarted from "./component/GetStarted"
import Position from "./component/Position"
import Switcher from "./component/Swithcer"
import styled from "@emotion/styled"

const Container = styled.div`
    align-items: center;
    width: 450px;
    min-width: 330px;
    position: relative;
    top: 40px;
    margin: auto;
    margin-top: 70px;
    border: solid;
    border-color: #242424;
    border-size: ;
`

const Home = () => {
    // NOTE: Focus the trade tab once wallet is connected.
    const [tabIndex, setTabIndex] = useState(0)
    const { account } = Connection.useContainer()
    useEffect(() => {
        if (account) {
            setTabIndex(1)
        } else {
            setTabIndex(0)
        }
    }, [account])

    return (
        <Container>
            {/* Tabs */}
            <Tabs isFitted variant="unstyled">
                <TabList border="1px" borderColor="#242424">
                    <Tab color={"#ebff00"} _selected={{ bg: "#252800" }}>
                        MINT
                    </Tab>
                    <Tab color={"#af02ab"} _selected={{ bg: "#260024" }}>
                        REDEEM
                    </Tab>
                </TabList>
                <TabPanels>
                    <TabPanel py={8} px={3}>
                        <Switcher />
                    </TabPanel>
                    <TabPanel py={8} px={3}>
                        <Position />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Container>
    )
}

export default Home
