import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { UserContext } from "../../context/user-context";

const PrivatePage = <P extends object>(
  Component: React.ComponentType<P>
): React.FC<P> => {
  const Hoc = ({ ...props }) => {
    const { user } = useContext(UserContext);
    const router = useRouter();
    const [isRouterReady, setIsRouterReady] = useState(false);
    useEffect(() => {
      setIsRouterReady(router.isReady);
    }, [router]);

    if (user.isLoggedIn) {
      return <Component {...(props as P)} />;
    }
    if (typeof window !== "undefined" && isRouterReady) {
      router.push("/signin?redirect=" + router.asPath);
    }
    return <></>;
  };
  return Hoc;
};

export default PrivatePage;
