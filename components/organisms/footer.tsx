import {Box, Grid, Img, Text} from "@chakra-ui/react";
import * as React from "react";

const Footer: React.FunctionComponent = () => {
  return (
    <Box p="64px 127px 0px" color="white" fontSize="14px" bgColor="black">
      <Grid
        templateColumns="30% 50% 20%"
        pb="70px"
        borderBottom="1px solid rgba(225, 227, 232, 0.6)"
      >
        <Box>
          <Img src="/assets/images/logo.png" w="28px" mr="10.5px"/>
          <Text maxW="176px" mt="38px">
            559 Ikorodu Rd, Ikosi Ketu 105102, Lagos, Nigeria.
          </Text>
          <Text mt={"30px"}>+234 (0) 909 054 2599</Text>
          <Text mt="30px">support@tyrannus.com</Text>
        </Box>
        <Box>
          <Text fontSize="28px" lineHeight="42px" fontWeight="600">
            Resources
          </Text>
          <Grid templateColumns="repeat(2, minmax(0, 1fr))" mt="30px">
            <Text>
              kldksn
              <span>ds</span>
            </Text>
            <Box>
              <Text opacity="0.6" fontSize="14px" mb="26px">
                Audio Messages
              </Text>
              <Text opacity="0.6" fontSize="14px" mb="26px">
                Short Videos Library
              </Text>
              <Text opacity="0.6" fontSize="14px" mb="26px">
                E-books Library
              </Text>
              <Text opacity="0.6" fontSize="14px" mb="26px">
                Listen Live
              </Text>
              <Text opacity="0.6" fontSize="14px" mb="26px">
                Watch Live
              </Text>
            </Box>
            <Box>
              <Text opacity="0.6" fontSize="14px" mb="26px">
                Singlz' Summit
              </Text>
              <Text opacity="0.6" fontSize="14px" mb="26px">
                Testimonies
              </Text>
              <Text opacity="0.6" fontSize="14px" mb="26px">
                Couples' Garden
              </Text>
              <Text opacity="0.6" fontSize="14px" mb="26px">
                House Fellowships
              </Text>
            </Box>
          </Grid>
        </Box>

        <Box>
          <Text fontSize="28px" lineHeight="42px" fontWeight="600">
            Connect
          </Text>
          <Grid templateColumns="repeat(2, minmax(0, 1fr))" mt="30px">
            <Box>
              <Text opacity="0.6" fontSize="14px" mb="26px">
                Contact
              </Text>
              <Text opacity="0.6" fontSize="14px" mb="26px">
                Instagram
              </Text>
            </Box>
            <Box>
              <Text opacity="0.6" fontSize="14px" mb="26px">
                Twitter
              </Text>
              <Text opacity="0.6" fontSize="14px" mb="26px">
                Youtube
              </Text>
            </Box>
          </Grid>
        </Box>
      </Grid>
      <Text textAlign="center" py="40px">
        ©2022 . Tyrannus . All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;
