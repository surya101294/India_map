import { redirect } from "next/navigation";
import { useLayoutEffect } from "react";

export default function withAuth(Component: any) {
  return function WithAuth(props: any) {
    const storedUser = localStorage.getItem("user");
    // const session = storedUser==null?false:true;
    const session = false;
    console.log("storedUser", session);

    useLayoutEffect(() => {
      if (!session) {
        redirect("/login");
      }
    }, []);

    if (!session) {
      return null;
    }
    return <Component {...props} />;
  };
}
