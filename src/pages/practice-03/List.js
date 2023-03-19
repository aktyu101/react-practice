import { css } from "@emotion/react"; // /css
import { useState } from "react";
import styled from "@emotion/styled";

const WrapListItem = styled.ul`
  justify-content: space-between;
`;
const ListItem = styled.li`
  width: 100%;
  border: 1px solid #ddd;
  padding: 20px;
  font-size: 15px;
  background-color: ${(props) => props.color};
`;
const Input = styled.input`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 12px;
`;

const InputWrapper = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
`;

export default function List() {
  const [color, setColor] = useState("#fff");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  //   const listBaseStyles = css`
  //     border: 1px solid #ddd;
  //     padding: 20px;
  //     font-size: 15px;
  //   `;
  //   const listStyles = css`
  //     ${listBaseStyles}
  //     background-color: ${color};
  //   `;
  const [lists, setLists] = useState([
    { id: 1, userName: "judy", email: "judy@gmail.com", active: true },
    { id: 2, userName: "nick", email: "nick@gmail.com", active: false },
    { id: 3, userName: "kevin", email: "kevin@gmail.com", active: true },
  ]);
  const changeColor = () => {
    setColor("hotpink");
  };
  const onChangeName = (event) => {
    setName(event.target.value);
  };
  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const addUser = () => {
    const user = {
      id: lists.length + 1,
      userName: name,
      email: email,
      active: false,
    };
    setLists((lists) => {
      return [...lists, user];
    });
  };
  const titleStyle = css`
    color: red;
  `;
  return (
    <div id="content_wrapper">
      <h1 css={titleStyle}>list Render</h1>
      <InputWrapper>
        <div>
          <label>name:</label>
          <Input value={name} onChange={onChangeName} />
        </div>
        <div>
          <label>email:</label>
          <Input value={email} onChange={onChangeEmail} />
        </div>
        <button onClick={addUser}>add User</button>
      </InputWrapper>

      <WrapListItem>
        {lists.map((list) => {
          return (
            <ListItem key={list.id} color={color}>
              {list.userName}
            </ListItem>
          );
        })}
      </WrapListItem>
      <button></button>
      <button onClick={changeColor}>changeColor</button>
    </div>
  );
}
//과제 : 입력후 필드 초기화, 삭제, 수정
