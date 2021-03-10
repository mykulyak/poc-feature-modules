import React, { useState } from "react";
import context from "@pocfm/core/build";

export default function LoginButton() {
  const [logged, setLogged] = useState(false);

  const handleClick = () => {
    context.eventBus.emit(logged ? "logout" : "login");
    setLogged(!logged);
  };

  return <button onClick={handleClick}>{logged ? "Log Out" : "Log In"}</button>;
}
