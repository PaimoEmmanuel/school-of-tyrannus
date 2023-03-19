import {
  Box,
  Button,
  List,
  ListItem,
  Link as ChakraLink,
  MenuList,
  MenuItem,
  MenuButton,
  Menu,
} from "@chakra-ui/react";
import Link from "next/link";
import router from "next/router";
import { useContext } from "react";
import { UserContext } from "../../context/user-context";
import getUser from "../../utils/get-user";
import removeUser from "../../utils/remove-user";

interface IMobileNavProps {
  openNav: boolean;
  toggleNav: () => void;
}

const MobileNav: React.FunctionComponent<IMobileNavProps> = ({
  openNav,
  toggleNav,
}) => {
  const { user, setUser } = useContext(UserContext);

  return (
    <Box display={{ base: "block", lg: "none" }}>
      <button type="button" title="nav" onClick={toggleNav}>
        {openNav ? (
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.63623 14.364L14.3642 1.63609"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1.63623 1.63599L14.3642 14.3639"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg
            width="20"
            height="14"
            viewBox="0 0 20 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 7H19"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1 1H19"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1 13H19"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>
      <Box
        pos="fixed"
        w="100vw"
        h={openNav ? "100vh" : "0"}
        overflow="hidden"
        transition="all .3s"
        left="0"
        top="80px"
        background="rgba(0, 0, 0, 0.5)"
      >
        <List
          pos="absolute"
          left="0"
          bgColor="white"
          w="100%"
          display="flex"
          flexDir="column"
          alignItems="center"
          gap="36px"
          py="24px"
          pb={user.isLoggedIn ? "88px" : "24px"}
          zIndex="90"
        >
          <ListItem>
            <Link href="/about" passHref>
              <ChakraLink fontSize="18px" _hover={{ fontWeight: 600 }}>
                About
              </ChakraLink>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/courses" passHref>
              <ChakraLink fontSize="18px" _hover={{ fontWeight: 600 }}>
                Courses
              </ChakraLink>
            </Link>
          </ListItem>

          {!user.isLoggedIn ? (
            <>
              <ListItem>
                <Link href="/signin" passHref>
                  <ChakraLink fontSize="18px" _hover={{ fontWeight: 600 }}>
                    Sign in
                  </ChakraLink>
                </Link>
              </ListItem>
              <Link href="/signup" passHref>
                <ChakraLink
                  h="50px"
                  w="300px"
                  color="black"
                  bgColor="text.orange"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="4px"
                  fontWeight="500"
                  boxShadow="4px 7px 12px rgba(238, 153, 56, 0.2)"
                  _hover={{ textDecoration: "none" }}
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
        </List>
      </Box>
    </Box>
  );
};

export default MobileNav;
