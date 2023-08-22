import {
  Button,
  Flex,
  Link as ChakraLink,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Box,
} from "@chakra-ui/react";
import Link from "next/link";
import { useContext, useState } from "react";
import LogoText from "../molecules/logo-text";
import { UserContext } from "../../context/user-context";
import removeUser from "../../utils/remove-user";
import { useRouter } from "next/router";
import getUser from "../../utils/get-user";
import MobileNav from "../molecules/mobile-nav";
import WhatsAppWidget from "../molecules/whatsapp-widget";

interface INavigationBarProps {}

const NavigationBar: React.FunctionComponent<INavigationBarProps> = (props) => {
  const { user, setUser } = useContext(UserContext);
  const router = useRouter();
  const [openNav, setOpenNav] = useState(false);
  return (
    <>
      <Box h="80px" w="100%"></Box>
      <Flex
        as="nav"
        p={{ base: "1.25rem 1.5rem", lg: "0.875rem 4rem" }}
        justifyContent="space-between"
        alignItems="center"
        pos="fixed"
        top="0"
        bgColor="white"
        w="100%"
        height={openNav ? "89px" : "auto"}
        zIndex="999999"
      >
        <Flex justifyContent="space-between">
          <LogoText />
          {/* <NavSearch /> */}
        </Flex>
        <Flex
          display={{ base: "none", lg: "flex" }}
          justifyContent="space-between"
          alignItems="center"
        >
          <Link href="/about" passHref>
            <ChakraLink mr="45px">About Tyrannus</ChakraLink>
          </Link>
          <Link href="/courses" passHref>
            <ChakraLink mr="45px">Courses</ChakraLink>
          </Link>
          {/* <Link href="/explore" passHref>
          <ChakraLink mr="45px">Explore</ChakraLink>
        </Link> */}
          {!user.isLoggedIn ? (
            <>
              <Link href="/signin" passHref>
                <ChakraLink mr="45px">Sign in</ChakraLink>
              </Link>
              <Link href="/signup" passHref>
                <ChakraLink
                  h="42px"
                  w="128px"
                  bgColor="text.orange"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="4px"
                  fontWeight="500"
                  boxShadow="4px 7px 12px rgba(238, 153, 56, 0.2)"
                  color="black"
                >
                  Register
                </ChakraLink>
              </Link>
            </>
          ) : (
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={
                  <svg
                    width="11"
                    height="6"
                    viewBox="0 0 11 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.52148 1L5.52148 5L1.52148 1"
                      stroke="#203064"
                      strokeWidth="1.14286"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                }
              >
                {String(user.details.Username)}
              </MenuButton>
              <MenuList>
                <MenuItem
                  onClick={() => {
                    removeUser();
                    router.push("/signin");
                    setUser(getUser());
                  }}
                >
                  Sign Out
                </MenuItem>
                {/* <MenuItem>My Learning</MenuItem> */}
              </MenuList>
            </Menu>
          )}
        </Flex>
        <MobileNav
          openNav={openNav}
          toggleNav={() => {
            setOpenNav(!openNav);
          }}
        />
      </Flex>
      <WhatsAppWidget />
    </>
  );
};

export default NavigationBar;
