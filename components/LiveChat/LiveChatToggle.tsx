"use client";

import { IconChevronRight } from "@tabler/icons-react";
import { useEffect, useState } from "react";

interface props {
  variant: string;
  label: string;
  className?: string;
  icon?: boolean;
}

function LiveChatToggle(props: props) {
  const [toggle, setToggle] = useState(false);
  const toggleChat = () => {
    const n8nChatToggle = document.querySelector(".chat-window-toggle");
    if (n8nChatToggle) {
      const clickEvent = new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
        view: window,
      });
      n8nChatToggle.dispatchEvent(clickEvent);
      setToggle(!toggle);
    }
  };


  if (props.variant === "cta") {
    return (
      <button
        onClick={toggleChat}
        className={`cta ${props.className ? props.className : ""}`}
      >
        {props.label}
        {props.icon ? <IconChevronRight /> : <></>}
      </button>
    );
  } else if (props.variant === "cta-2") {
    return (
      <button
        onClick={toggleChat}
        className={`cta-2 ${props.className ? props.className : ""}`}
      >
        {props.label}
      </button>
    );
  } else if (props.variant === "event") {
    return (
      <button
        onClick={toggleChat}
        className={`cta-3 ${props.className ? props.className : ""}`}
      >
        <IconChevronRight />
      </button>
    );
  } else {
    return (
      <button
        onClick={toggleChat}
        className={`cta-3 ${props.className ? props.className : ""}`}
      >
        {props.label}
        <IconChevronRight />
      </button>
    );
  }

  return <></>;
}

export default LiveChatToggle;
