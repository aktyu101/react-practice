import { useState, createContext, useContext, useId, useEffect } from "react";
import styled from "@emotion/styled";
import { useChat } from "./useChat";
import ChatUser from "./ChatLayout";

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
          width: "100%",
          flexDirection: "column",
        }}
      >
        <ChatContext.Provider value={{ message, setMessage }}>
          <ChatUser />
          <ChatUser />
          {/* <ChatUser3 /> */}
        </ChatContext.Provider>
      </div>
    </>
  );
}
