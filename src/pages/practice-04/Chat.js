import {
  useState,
  createContext,
  useContext,
  useId,
  useEffect,
  useRef, //state가 변경되어 다시 돌더라도 초기화하지 않음, 값 유지 o, 렌더링 x
} from "react";
import styled from "@emotion/styled";

const ChatContext = createContext(null);

export default function Chat() {
  const [message, setMessage] = useState([]);
  return (
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
        {/* <ChatUser3 /> */}
      </ChatContext.Provider>
    </div>
  );
}

const ChatBox = styled.div`
  width: 500px;
  border: solid 1px #ddd;
  height: 700px;
  position: relative;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 30px;
`;
const InputBox = styled.input`
  width: 488px;
  text-indent: 10px;
  box-sizing: border-box;
  line-height: 45px;
  position: absolute;
  bottom: 0;
  left: 0;
  border: none;
  background: #eee;
  border-radius: 30px;
  margin: 5px;
`;
const ChatList = styled.li`
  display: flex;
  justify-content: flex-srart;
  gap: 15px;
`;
const ChatMsg = styled.div`
  background-color: #f5f5f5;
  border-radius: 30px;
  line-height: 35px;
  padding: 0 10px;
  margin-bottom: 5px;
`;
const ChatDate = styled.div`
  font-size: 11px;
  line-height: 35px;
  color: #666;
`;
const DelBtn = styled.button`
  font-size: 10px;
  padding: 5px;
  border: none;
  cursor: pointer;
`;
function ChatUser1() {
  const id = useId();
  const context = useContext(ChatContext);
  const [input, setInput] = useState("");
  // const onChange = (event) => {
  //   context?.setMessage(event.target.value);
  // };
  useEffect(() => {
    console.log(context?.message);
  }, [context?.message]);

  const onKeyDown = (event) => {
    if (event.keyCode === 13) {
      console.log("key event", event.target.value);
      const date = new Date();
      context?.setMessage((message) => {
        return [
          ...message,
          {
            id,
            message: event.target.value,
            date: new Intl.DateTimeFormat("ko-KR").format(date),
          },
        ];
        // return {
        //   ...message,
        //   [id]: [...(message[id] ?? []), event.target.value],
        //   //a ?? b : a가 null, undefined면 b를 반환 아니면 a를 반환
        //   //null, undefined만 체크
        // };
      });
      setInput("");
    }
  };

  const onChange = (event) => {
    setInput(event.target.value);
  };

  const onDelete = (index) => {
    console.log("deleteindex", index);
    context?.setMessage((message) => {
      const msg = [...message];
      msg.splice(index, 1);
      return msg;
    });
  };
  return (
    <ChatBox>
      <h2 style={{ marginBottom: "20px" }}>user1</h2>
      <ul style={{ height: "550px", overflowY: "scroll" }}>
        {context?.message.map((msg, index) => (
          <ChatList key={index}>
            {/* style={reverseAlign} */}
            <ChatMsg>
              {msg.id}: {msg.message}
            </ChatMsg>
            <ChatDate>
              {msg.date}
              {id === msg.id && (
                <DelBtn onClick={() => onDelete(index)}>X</DelBtn>
              )}
            </ChatDate>
          </ChatList>
        ))}
      </ul>
      <InputBox
        type="text"
        onKeyDown={onKeyDown}
        value={input}
        onChange={onChange}
      />
    </ChatBox>
  );
}

function ChatUser2() {
  const id = useId();
  const context = useContext(ChatContext);
  const [input, setInput] = useState("");
  // const onChange = (event) => {
  //   context?.setMessage(event.target.value);
  // };
  const onKeyDown = (event) => {
    if (event.keyCode === 13) {
      console.log("key event", event.target.value);
      context?.setMessage((message) => {
        const date = new Date();
        return [
          ...message,
          {
            id,
            message: event.target.value,
            date: new Intl.DateTimeFormat("ko-KR").format(date),
          },
        ];
        // return {
        //   ...message,
        //   [id]: [...(message[id] ?? []), event.target.value],
        //   //a ?? b : a가 null, undefined면 b를 반환 아니면 a를 반환
        //   //null, undefined만 체크
        // };
      });
      setInput("");
    }
  };
  const onChange = (event) => {
    setInput(event.target.value);
  };
  const onDelete = (index) => {
    console.log("deleteindex", index);
    context?.setMessage((message) => {
      const msg = [...message];
      msg.splice(index, 1);
      return msg;
    });
  };

  return (
    <ChatBox>
      <h2 style={{ marginBottom: "20px" }}>user2</h2>
      <ul style={{ height: "550px", overflowY: "scroll" }}>
        {context?.message.map((msg, index) => (
          <ChatList key={index}>
            <ChatMsg>
              {msg.id}: {msg.message}
            </ChatMsg>
            <ChatDate>
              {msg.date}
              {id === msg.id && (
                <DelBtn onClick={() => onDelete(index)}>X</DelBtn>
              )}
            </ChatDate>
          </ChatList>
        ))}
      </ul>
      <InputBox
        type="text"
        onKeyDown={onKeyDown}
        value={input}
        onChange={onChange}
      />
    </ChatBox>
  );
}

// function ChatUser3() {
//   const context = useContext(ChatContext);
//   const onChange = (event) => {
//     context?.setMessage(event.target.value);
//   };
//   if (!context)
//     return (
//       <>
//         <div>not found context</div>
//       </>
//     );
//   return (
//     <>
//       <ul>
//         <li></li>
//       </ul>
//       <input type="text" value={context.message} onChange={onChange} />
//     </>
//   );
// }

//채팅창 스타일 (emotion)
//date를써서 입력된 date값 현재 날짜 대비 10초가 지나야 지울 수 있음 //안지났으면 aleat ondelete때 비교
//date찾아서! 날짜정보 비교
