import { redirect } from "next/navigation";
import React from "react";

const ServerSide = () => {
  const session = false;
  if (!session) {
    redirect("/login");
  }
  return <div>ServerSideserver-sideserver-sideserver-sideserver-side</div>;
};

export default ServerSide;
