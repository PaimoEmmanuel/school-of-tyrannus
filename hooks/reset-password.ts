import { useRouter } from "next/router";
import { useCallback, useContext, useEffect, useState } from "react";
import { UserContext } from "../context/user-context";
import { resetPassword, validateEmailToken } from "../services/auth";
import getUser from "../utils/get-user";
import Bugsnag from "@bugsnag/js";

const useResetPassword = () => {
  const router = useRouter();
  const token = router.query.token as string;

  const [tokenState, setTokenState] = useState({
    verifying: true,
    verified: false,
    error: "",
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [resettingPassword, setResettingPassword] = useState(false);

  const { setUser } = useContext(UserContext);

  const validateToken = useCallback(() => {
    if (!token) {
      return;
    }
    validateEmailToken(token)
      .then((res) => {
        setEmail(res.data.emailAddress);
        setTokenState((tokenState) => ({
          ...tokenState,
          verifying: false,
          verified: true,
        }));
      })
      .catch((err) => {
        Bugsnag.notify(err)
        setTokenState((tokenState) => ({
          ...tokenState,
          verifying: false,
          error:
            err.response.data === `Invalid Request token: ${token}`
              ? "Invalid Request token. "
              : err.response.data,
        }));
      });
  }, [token]);

  useEffect(() => {
    validateToken();
  }, [validateToken]);

  const handlePasswordReset = () => {
    setError("");
    if (email.length === 0) {
      return setError("Please enter your email");
    }
    if (password.length === 0) {
      return setError("Please enter your new password");
    }
    if (password !== confirmPassword) {
      return setError("Passwords do not match!");
    }
    setResettingPassword(true);
    resetPassword({ email, password })
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem("tyrannus-tk", res.data.result.value);
          setUser(getUser());
          router.push("/");
        } else {
          setResettingPassword(false);
          setError("An error occurred, please try again.");
        }
      })
      .catch((err) => {
        Bugsnag.notify(err)
        setResettingPassword(false);
        if (err?.response?.data) {
          setError(err.response.data);
        } else setError("An error occurred, please try again.");
      });
  };
  return {
    tokenState,
    email,
    setPassword,
    setConfirmPassword,
    error,
    resettingPassword,
    handlePasswordReset,
  };
};
export default useResetPassword;
