import {
  useState,
  createContext,
  useContext,
  useId,
  useEffect,
  useRef, //state가 변경되어 다시 돌더라도 초기화하지 않음, 값 유지 o, 렌더링 x
} from "react";
import styled from "@emotion/styled";
import { getDateTime } from "../../utils/dateUtils";

const ChatContext = createContext(null);

export default function Chat() {
  const [message, setMessage] = useState([]);
  const pressedKeys = useRef(new Set());

  const onKeyDown = (event, input, id) => {
    console.log("event keycode", event.keyCode);
    pressedKeys.current.add(event.keyCode);
    console.log("pressedkeycode", pressedKeys.current); //set은 중복값을 만들지 않음
    if (
      pressedKeys.current.has(16) &&
      pressedKeys.current.has(13) &&
      input.trim() !== ""
    ) {
      console.log("key event", event.target.value);
      setMessage((message) => {
        return [
          ...message,
          {
            id,
            message: event.target.value,
            ...getDateTime(),
          },
        ];
      });
    }
  };

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
        <ChatContext.Provider value={{ message, setMessage, onKeyDown }}>
          <ChatUser1 />
          <ChatUser2 />
          {/* <ChatUser3 /> */}
        </ChatContext.Provider>
      </div>
    </>
  );
}

function ChatUser1() {
  const id = useId();
  const context = useContext(ChatContext);
  const [input, setInput] = useState("");
  const pressedKeys = useRef(new Set());

  // const onChange = (event) => {
  //   context?.setMessage(event.target.value);
  // };
  useEffect(() => {
    console.log(context?.message);
  }, [context?.message]);

  const onKeyDown = (event) => {
    context?.onKeyDown(event, input, id); //optional changing 실행은 안시키지만 에러는 발생하지 않음
    setInput("");
  };
  //고차함수
  const onKeyUp = (event) => {
    console.log("onkeyup", event.keyCode);
    pressedKeys.current.delete(event.keyCode); //delete 같은 값이 있으면 지움
  };

  const onSubmit = (event) => {
    if (input.trim() !== "") {
      context?.setMessage((message) => {
        return [
          ...message,
          {
            id,
            message: input,
            ...getDateTime(),
          },
        ];
      });
      setInput("");
    }
  };

  const onChange = (event) => {
    setInput(event.target.value);
  };

  const onDelete = (index, message) => {
    const date = new Date();
    const deleteTime = date.getTime();
    const indexNumber = Number(index);
    console.log(deleteTime >= context?.message[indexNumber].sendTime + 5000);
    if (deleteTime >= context?.message[indexNumber].sendTime + 5000) {
      context?.setMessage((message) => {
        const msg = [...message];
        msg.splice(index, 1);
        return msg;
      });
    } else {
      return alert(
        Math.floor(
          (deleteTime - (context?.message[indexNumber].sendTime + 5000)) *
            -0.001
        ) + "초 뒤 삭제 가능합니다."
      );
    }
  };
  return (
    <ChatBox>
      <ChatLogWrap>
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
                style={
                  id === msg.id ? { display: "none" } : { display: "block" }
                }
              >
                {id === msg.id ? null : msg.id}
              </UserName>
              <ChatMsg
                isEqualId={id === msg.id}
                style={
                  id === msg.id ? { borderRadius: "10px 0 10px 10px" } : {}
                }
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
        <WrapInput>
          <WrapInputBox>
            <InputBox
              onKeyDown={onKeyDown}
              onKeyUp={onKeyUp}
              value={input}
              onChange={onChange}
            />
          </WrapInputBox>
          <SubmitBtn onClick={onSubmit}>전송</SubmitBtn>
        </WrapInput>
      </ChatLogWrap>
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
    context?.onKeyDown(event, input, id); //optional changing 실행은 안시키지만 에러는 발생하지 않음
    setInput("");
  };
  const onKeyUp = (event) => {
    console.log("onkeyup", event.keyCode);
  };
  const onSubmit = (event) => {
    if (input.trim() !== "") {
      context?.setMessage((message) => {
        return [
          ...message,
          {
            id,
            message: input,
            ...getDateTime(),
          },
        ];
      });
      setInput("");
    }
  };
  const onChange = (event) => {
    setInput(event.target.value);
  };
  const onDelete = (index, message) => {
    const date = new Date();
    const deleteTime = date.getTime();
    const indexNumber = Number(index);
    console.log(deleteTime >= context?.message[indexNumber].sendTime + 5000);
    if (deleteTime >= context?.message[indexNumber].sendTime + 5000) {
      context?.setMessage((message) => {
        const msg = [...message];
        msg.splice(index, 1);
        return msg;
      });
    } else {
      return alert(
        Math.floor(
          (deleteTime - (context?.message[indexNumber].sendTime + 5000)) *
            -0.001
        ) + "초 뒤 삭제 가능합니다."
      );
    }
  };

  return (
    <ChatBox>
      <ChatLogWrap>
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
                style={
                  id === msg.id ? { display: "none" } : { display: "block" }
                }
              >
                {id === msg.id ? null : msg.id}
              </UserName>
              <ChatMsg
                style={
                  id === msg.id ? { borderRadius: "10px 0 10px 10px" } : {}
                }
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
        <WrapInput>
          <WrapInputBox>
            <InputBox
              onKeyDown={onKeyDown}
              onKeyUp={onKeyUp}
              value={input}
              onChange={onChange}
            />
          </WrapInputBox>
          <SubmitBtn onClick={onSubmit}>전송</SubmitBtn>
        </WrapInput>
      </ChatLogWrap>
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
const ChatBox = styled.div`
  width: 700px;
  border: solid 1px #ddd;
  height: 700px;
  position: relative;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: #fff;
`;
const WrapInput = styled.div`
  display: flex;
  width: 698px;
  height: 100px;
  justify-content: space-around;
  padding-top: 10px;
  position: absolute;
  bottom: 0;
  left: 0;
  box-sizing: border-box;
  background-color: #eee;
`;
const WrapInputBox = styled.div`
  width: 600px;
  height: 100%;
  box-sizing: border-box;
  line-height: 45px;
  background: #eee;
  outline: none;
  border: none;
  display: inline-block;
`;
const InputBox = styled.textarea`
  width: 600px;
  border: none;
  background-color: #ddd;
  box-sizing: border-box;
  height: 80px;
  outline: none;
  text-indent: 10px;
  padding: 10px 5px;
`;
const MsgLog = styled.ul`
  height: 500px;
  overflow-y: auto;
  padding-right: 5px;
  &::-webkit-scrollbar {
    width: 4px;
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
const ChatMsg = styled.pre`
  background-color: #eee;
  line-height: 15px;
  padding: 5px 10px;
  margin-bottom: 5px;
  word-break: break-all;
  max-width: 380px;
  color: #222;
  border-radius: ${(props) =>
    props.isEqualId ? "10px 0 10px 10px" : "0 10px 10px 10px"};
  white-space: pre-wrap;
  word-break: break-all;
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
  width: 70px;
  text-align: center;
  height: 33px;
  border: none;
  background-color: #bb2649;
  color: #fff;
  cursor: pointer;
`;
const ChatLogWrap = styled.div`
  width: 700px;
  box-sizing: border-box;
  padding: 20px;
  height: 600px;
`;
