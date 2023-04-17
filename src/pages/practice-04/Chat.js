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
    <>
      <div>
        <p>공백일경우! 엔터 작동 안하게</p>
        <p>입력버튼 추가</p>
        <p>
          보낸시간에서 10초가 지나지 않았을 경우 -알럿 노출 / 지났을 경우 - 삭제
          가능
        </p>
      </div>
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
    </>
  );
}

const ChatBox = styled.div`
  width: 800px;
  border: solid 1px #ddd;
  height: 700px;
  position: relative;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: #fff;
`;
const InputBox = styled.input`
  width: 100%;
  text-indent: 10px;
  box-sizing: border-box;
  line-height: 45px;
  position: absolute;
  bottom: 0;
  left: 0;
  background: #eee;
  outline: none;
  border: none;
`;
const MsgLog = styled.ul`
  height: 550px;
  overflow-y: auto;
  padding-right: 5px;
  &::-webkit-scrollbar {
    width: 2px;
    background: #eee;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #666;
  }
`;
const ChatList = styled.li`
  display: flex;
  justify-content: flex-srart;
  gap: 15px;
  align-items: baseline;
`;
const ChatMsg = styled.div`
  background-color: #eee;
  line-height: 35px;
  padding: 5px 10px;
  margin-bottom: 5px;
  word-break: break-all;
  max-width: 380px;
  color: #222;
  border-radius: 0px 10px 10px 10px;
`;
const ChatDate = styled.div`
  font-size: 11px;
  line-height: 35px;
  color: #6b6b6b;
`;
const DelBtn = styled.button`
  font-size: 10px;
  padding: 5px;
  border: none;
  cursor: pointer;
  margin-left: 5px;
  color: #fff;
  background-color: #065fd499;
`;
const UserName = styled.div`
  line-height: 30px;
  text-align: center;
  box-sizing: border-box;
  color: #222;
  width: 35px;
  height: 35px;
  border: solid 1px #eee;
  border-radius: 50%;
`;
const SubmitBtn = styled.button`
  width: 50px;
  text-align: center;
  height: 33px;
  border: none;
  background-color: #111;
  color: #fff;
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
      //공백포함 빈 값일경우 미반환처리
      console.log("key event", event.target.value);
      const date = new Date();
      let hour = date.getHours();
      let minute = date.getMinutes();
      let second = date.getSeconds();
      const ampm = hour <= 12 ? "오전" : "오후";
      const time = " " + ampm + " " + hour + ":" + minute + ":" + second;
      context?.setMessage((message) => {
        return [
          ...message,
          {
            id,
            message: event.target.value,
            date: new Intl.DateTimeFormat("ko-KR").format(date) + time,
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
      <h2 style={{ marginBottom: "20px", color: "#bb2649" }}>user1</h2>
      <MsgLog>
        {context?.message.map((msg, index) => (
          <ChatList
            key={index}
            style={
              id === msg.id
                ? { flexDirection: "row-reverse" }
                : { justifyContent: "flex-start" }
            }
          >
            <UserName
              style={id === msg.id ? { display: "none" } : { display: "block" }}
            >
              {id === msg.id ? null : msg.id}
            </UserName>
            <ChatMsg
              style={id === msg.id ? { borderRadius: "10px 0 10px 10px" } : {}}
            >
              {msg.message}
            </ChatMsg>
            <ChatDate>{msg.date}</ChatDate>
            {id === msg.id && (
              <DelBtn onClick={() => onDelete(index)}>X</DelBtn>
            )}
          </ChatList>
        ))}
      </MsgLog>
      <div>
        <div>
          <InputBox
            type="text"
            onKeyDown={onKeyDown}
            value={input}
            onChange={onChange}
          />
        </div>
        {/* <SubmitBtn>전송</SubmitBtn> */}
      </div>
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
      const date = new Date();
      let hour = date.getHours();
      let minute = date.getMinutes();
      let second = date.getSeconds();
      const ampm = hour <= 12 ? "오전" : "오후";
      const time = " " + ampm + " " + hour + ":" + minute + ":" + second;
      context?.setMessage((message) => {
        return [
          ...message,
          {
            id,
            message: event.target.value,
            date: new Intl.DateTimeFormat("ko-KR").format(date) + time,
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
      <h2 style={{ marginBottom: "20px", color: "#bb2649" }}>user2</h2>
      <MsgLog>
        {context?.message.map((msg, index) => (
          <ChatList
            key={index}
            style={
              id === msg.id
                ? { flexDirection: "row-reverse" }
                : { justifyContent: "flex-start" }
            }
          >
            <UserName
              style={id === msg.id ? { display: "none" } : { display: "block" }}
            >
              {id === msg.id ? null : msg.id}
            </UserName>
            <ChatMsg
              style={id === msg.id ? { borderRadius: "10px 0 10px 10px" } : {}}
            >
              {msg.message}
            </ChatMsg>
            <ChatDate>{msg.date}</ChatDate>
            {id === msg.id && (
              <DelBtn onClick={() => onDelete(index)}>X</DelBtn>
            )}
          </ChatList>
        ))}
      </MsgLog>
      <InputBox
        type="text"
        onKeyDown={onKeyDown}
        value={input}
        onChange={onChange}
      />
      {/* <SubmitBtn>전송</SubmitBtn> */}
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
