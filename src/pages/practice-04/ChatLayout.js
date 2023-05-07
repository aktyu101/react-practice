import styled from "@emotion/styled";
import { useChat } from "./useChat";

export default function ChatLayout(props) {
  const {
    id,
    input,
    onChange,
    onKeyDown,
    onKeyUp,
    context,
    onSubmit,
    onDelete,
  } = useChat();

  return (
    <>
      <ChatLists>{id}</ChatLists>
      <ChatBox>
        <ChatLogWrap>
          <h2 style={{ marginBottom: "20px", color: "#bb2649" }}>{id}</h2>
          <MsgLog>
            {context?.message.map((msg, index) => (
              <ChatList key={index} isEqualId={id === msg.id}>
                <UserName isEqualId={id === msg.id}>
                  {id === msg.id ? null : msg.id}
                </UserName>
                <ChatMsg isEqualId={id === msg.id}>{msg.message}</ChatMsg>
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
    </>
  );
}

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
  flex-direction: ${(props) => (props.isEqualId ? "row-reverse" : "row")};
  justify-content: ${(props) => (props.isEqualId ? "flex-start" : "normal")};
`;
const ChatMsg = styled.pre`
  background-color: #eee;
  line-height: 15px;
  padding: 5px 10px;
  margin-bottom: 5px;
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
  display: ${(props) => (props.isEqualId ? "none" : "block")};
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
const ChatLists = styled.div`
  width: 200px;
  background-color: #eee;
  height: 500px;
`;
