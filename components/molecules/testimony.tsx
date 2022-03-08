import * as React from "react";
import {Box, Flex, Img, Text} from "@chakra-ui/react";

interface ITestimonyProps {
}

const Testimony: React.FunctionComponent<ITestimonyProps> = (props) => {
    return (
        <Box pos="relative">
            <Text pos="absolute" top="-60px" left="-100px" color="#6677A0" fontFamily="'Roboto', sans-serif"
                  fontSize={"193.6px"}>“</Text>
            <Text maxW={"440px"} mb={"41px"}>Since I started the course on Charity, a rush of grace
                has come with relating better with my brethren and
                my mum. I now see how much change has to occur
                in me first.</Text>
            <Flex alignItems="center">
                <Img w={"62px"} h={"62px"} objectFit="cover" borderRadius="50%" src="/assets/images/banner.png"/>
                <Box ml={"21px"}>
                    <Text fontSize={"18px"}>Gbemi Adebayo</Text>
                    <Text color="#979797">Accountant</Text>
                </Box>
            </Flex>
        </Box>
    );
};

export default Testimony;
