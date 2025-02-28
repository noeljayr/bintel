"use client";

import { useEffect } from "react";
import "@n8n/chat/style.css";
import { createChat } from "@n8n/chat";
import "@/css/live-chat.css";

function LiveChat() {
  useEffect(() => {
    createChat({
      initialMessages: [
        "Welcome to Bintel Analytics, I am here to assist you rent Data Collection Tablets.",
        "I respond instantly. Never leaving you waiting! 😊",
      ],
      webhookUrl:
        "https://bintelauto.app.n8n.cloud/webhook/306452bf-1524-443c-9b24-a8071f0de937/chat",
    });
  }, []);

  return <div id="#chat-container" className="chat-container"></div>;
}

export default LiveChat;
