import { useContext, useState } from "react";
import jwt from "jwt-decode";
import { signIn } from "../services/auth";
import getUser from "../utils/get-user";
import { useRouter } from "next/router";
import { UserContext } from "../context/user-context";

const useSignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigninIn] = useState(false);
  const [error, setError] = useState("");
  const { setUser } = useContext(UserContext);
  const router = useRouter();

  const handleSignIn = () => {
    console.log("logging in");
    setIsSigninIn(true);
    signIn({ email, password })
      .then((res) => {
        const token = res.data;
        if (res.status === 200) {
          console.log(token);
          const user = jwt(token);
          localStorage.setItem("tyrannus-tk", token);
          setUser(getUser());
          if (typeof router.query.redirect === "string") {
            router.push(router.query.redirect);
          } else {
            router.push("/");
          }
        } else {
          console.log(res.data);
          setIsSigninIn(false);
        }
      })
      .catch((err) => {
        console.log("error", err.response.data);
        if (err.response.status === 400) {
          setError(err.response.data);
        } else {
          setError("An error occurred, please try again.")
        }
        setIsSigninIn(false);
      });
  };
  return { setEmail, setPassword, isSigningIn, handleSignIn, error };
};

export default useSignIn;
