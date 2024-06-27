import {
  Box,
  Flex,
  Grid,
  Img,
  Text,
  Link as ChakraLink,
} from "@chakra-ui/react";
import Link from "next/link";
import * as React from "react";

const Footer: React.FunctionComponent = () => {
  return (
    <Box
      p={{ base: "3rem 1.5rem", lg: "64px 127px 0px" }}
      color="white"
      fontSize="14px"
      bgColor="black"
    >
      <Grid
        templateColumns={{ lg: "30% 50% 20%" }}
        pb="70px"
        rowGap="4rem"
        borderBottom="1px solid rgba(225, 227, 232, 0.6)"
      >
        <Box>
          <Img
            src="/assets/images/tyrannus-white-logo.svg"
            w="128px"
            mr="10.5px"
          />
          <Text maxW="228px" mt="38px">
            1-3 VIP Estate, Omonile-VIP Zone, Abule Ado, Lagos-Badagry
            Expressway, Lagos
          </Text>
          <ChakraLink
            display="block"
            mt="30px"
            href="mailto:support@tyrannus.com"
          >
            support@tyrannus.com
          </ChakraLink>
        </Box>
        <Box>
          <Text fontSize="28px" lineHeight="42px" fontWeight="600">
            Resources
          </Text>
          <Grid
            display={{ base: "flex", sm: "grid" }}
            justifyContent="space-between"
            templateColumns="repeat(2, minmax(0, 1fr))"
            mt="30px"
          >
            <Box>
              <Text opacity="0.6" fontSize="14px" mb="26px">
                <a
                  href="https://nlwc.church/audio-messages/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Audio Messages
                </a>
              </Text>
              <Text opacity="0.6" fontSize="14px" mb="26px">
                <a
                  href="https://nlwc.church/video-library/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Short Videos Library
                </a>
              </Text>
              <Text opacity="0.6" fontSize="14px" mb="26px">
                <a
                  href="https://nlwc.church/ebooks-library/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  E-books Library
                </a>
              </Text>
              <Text opacity="0.6" fontSize="14px" mb="26px">
                <a
                  href="https://nlwc.church/listenlive/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Listen Live
                </a>
              </Text>
              <Text opacity="0.6" fontSize="14px" mb="26px">
                <a
                  href="https://nlwc.church/video-library/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {" "}
                  Watch Live
                </a>
              </Text>
            </Box>
            <Box>
              <Text opacity="0.6" fontSize="14px" mb="26px">
                <a
                  href="https://singlzsummit.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Singlz&apos; Summit
                </a>
              </Text>
              <Text opacity="0.6" fontSize="14px" mb="26px">
                <a
                  href="https://nlwc.church/testimonies/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Testimonies
                </a>
              </Text>
              <Text opacity="0.6" fontSize="14px" mb="26px">
                <a
                  href="https://nlwc.church/couples-garden/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Couples&apos; Garden
                </a>
              </Text>
              <Text opacity="0.6" fontSize="14px" mb="26px">
                <a
                  href="https://nlwc.church/house-fellowship/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  House Fellowships
                </a>
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
                <a
                  href="https://nlwc.church/contact/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Contact
                </a>
              </Text>
              <Text opacity="0.6" fontSize="14px" mb="26px">
                <a
                  href="https://www.instagram.com/accounts/login/?next=/nlwclife/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Instagram
                </a>
              </Text>
            </Box>
            <Box>
              <Text opacity="0.6" fontSize="14px" mb="26px">
                <a
                  href="https://twitter.com/nlwclife?lang=en"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Twitter{" "}
                </a>
              </Text>
              <Text opacity="0.6" fontSize="14px" mb="26px">
                <a
                  href="https://www.youtube.com/nlwclife"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Youtube
                </a>
              </Text>
            </Box>
          </Grid>
        </Box>
      </Grid>
      <Flex textAlign="center" py="40px" justify="center" gap="10px">
        ©2022 . Tyrannus . All rights reserved.{" "}
        <Text textDecoration="underline">
          <Link href="/privacy-policy">Privacy Policy</Link>
        </Text>
        {" – "}
        <Text textDecoration="underline">
          <Link href="/terms">Terms & Condition</Link>
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
