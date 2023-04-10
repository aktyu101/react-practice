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
    <div id="content_wrapper">
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
    <div>
      <ul>
        {context?.message.map((msg, index) => (
          <li key={index}>
            <div>
              {msg.id}: {msg.message}
              {id === msg.id && (
                <button onClick={() => onDelete(index)}>X</button>
              )}
            </div>
            <div>{msg.date}</div>
          </li>
        ))}
      </ul>
      <input
        type="text"
        onKeyDown={onKeyDown}
        value={input}
        onChange={onChange}
      />
    </div>
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
    <div>
      <ul>
        {context?.message.map((msg, index) => (
          <li key={index}>
            {msg.id}: {msg.message}
            {id === msg.id && (
              <button onClick={() => onDelete(index)}>X</button>
            )}
          </li>
        ))}
      </ul>
      <input
        type="text"
        onKeyDown={onKeyDown}
        value={input}
        onChange={onChange}
      />
    </div>
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
