import { useState, createContext, useContext, useId, useEffect } from "react";
import styled from "@emotion/styled";
import { useChat } from "./useChat";
import ChatLayout from "./ChatLayout";

export const ChatContext = createContext(null);

export default function Chat() {
  const [message, setMessage] = useState([]);

  return (
    <>
      <div
        id="content_wrapper"
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <ChatContext.Provider value={{ message, setMessage }}>
          <ChatUser1 />
          <ChatUser2 />
          <ChatUser3 />
        </ChatContext.Provider>
      </div>
    </>
  );
}

function ChatUser1() {
  return <ChatLayout></ChatLayout>;
}

function ChatUser2() {
  return <ChatLayout></ChatLayout>;
}

function ChatUser3() {
  return <ChatLayout></ChatLayout>;
}
