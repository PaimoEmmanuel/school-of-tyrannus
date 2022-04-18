import React, { useContext } from "react";
import { useRouter } from "next/router";
import { UserContext } from "../../context/user-context";

const PrivatePage = <P extends object>(
  Component: React.ComponentType<P>
): React.FC<P> => {
  const Hoc = ({ ...props }) => {
    const { user } = useContext(UserContext);
    const router = useRouter();
    if (user.isLoggedIn) {
      return <Component {...(props as P)} />;
    }
    if (typeof window !== "undefined") {
      router.push("/signin?redirect=" + router.asPath);
    }
    return <></>;
  };
  return Hoc;
};

export default PrivatePage;
