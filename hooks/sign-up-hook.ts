import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { signUp } from "../services/auth";
import { UserContext } from "../context/user-context";
import getUser from "../utils/get-user";
import Bugsnag from "@bugsnag/js";

const useSignUp = () => {
  const [emailAddress, setEmailAddress] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [error, setError] = useState("");
  const { setUser } = useContext(UserContext);
  const router = useRouter();

  const inputValidate = () => {
    if (firstName.trim().length === 0) {
      setError("Please enter your first name");
      return false;
    }
    if (lastName.trim().length === 0) {
      setError("Please enter your last name");
      return false;
    }
    if (emailAddress.trim().length === 0) {
      setError("Please enter your email address");
      return false;
    }
    if (phoneNumber.trim().length === 0) {
      setError("Please enter your phone number");
      return false;
    }
    if (password.trim().length === 0) {
      setError("Please enter your password");
      return false;
    }
    if (confirmPassword.trim().length === 0) {
      setError("Please confirm your password");
      return false;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match, please confirm again");
      return false;
    }
    setError("");
    return true;
  };

  const handleSignUp = () => {
    if (inputValidate()) {
      setIsSigningUp(true);
      signUp({
        firstName,
        lastName,
        phoneNumber,
        emailAddress: emailAddress,
        password,
        gender: "male",
      })
        .then((res) => {
          if (res.status === 200) {
            localStorage.setItem("tyrannus-tk", res.data);
            setUser(getUser());
            router.push("/");
          } else {
            setIsSigningUp(false);
            setError("An error occurred, please try again.");
          }
        })
        .catch((err) => {
          Bugsnag.notify(err)
          setIsSigningUp(false);
          if (err?.response?.status === 400) {
            setError(err.response.data);
          } else setError("An error occurred, please try again.");
        });
    }
  };
  return {
    setEmailAddress,
    setFirstName,
    setLastName,
    setPhoneNumber,
    setPassword,
    setConfirmPassword,
    handleSignUp,
    isSigningUp,
    error,
  };
};
export default useSignUp;
