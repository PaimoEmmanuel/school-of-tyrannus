import { useState } from "react";
import { requestPasswordReset } from "../services/auth";
import Bugsnag from "@bugsnag/js";

const useForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [sendingMail, setSendingMail] = useState(false);
  const [mailSent, setMailSent] = useState(false);
  const [error, setError] = useState("");

  const sendPasswordToken = () => {
    if (!email) {
      return setError("Please fill in your email");
    }
    setError("");
    setSendingMail(true);
    requestPasswordReset(email)
      .then((res) => {
        setSendingMail(false);
        setMailSent(true);
      })
      .catch((err) => {
        Bugsnag.notify(err)
        setError(err.response.data);
        setSendingMail(false);
      });
  };

  return { email, setEmail, sendPasswordToken, sendingMail, mailSent, error };
};
export default useForgotPassword;
