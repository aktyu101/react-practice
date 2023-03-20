import { css } from "@emotion/react"; // /css
import { useState } from "react";
import styled from "@emotion/styled";

const WrapListItem = styled.ul`
  justify-content: space-between;
`;
const ListItem = styled.li`
  display: flex;
  width: 100%;
  border: 1px solid #ddd;
  padding: 20px;
  font-size: 15px;
  background-color: ${(props) => props.color};
  gap: 10px;
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
const CheckBox = styled.input`
  margin-right: 10px;
`;
const Clear = styled.button`
  width: 30px;
  height: 20px;
`;
const Listspan = styled.span`
  margin-right: 15px;
  background-color: #fff;
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
    setColor(color === null ? "hotpink" : null);
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
    setName([]);
    setEmail([]);
  };
  const AllClearList = () => {
    setLists([]);
  };
  const titleStyle = css`
    color: red;
  `;
  return (
    <div id="content_wrapper">
      <h1 css={titleStyle}>list Render</h1>
      <InputWrapper>
        <div>
          <label>name: </label>
          <Input value={name} onChange={onChangeName} />
        </div>
        <div>
          <label>email: </label>
          <Input value={email} onChange={onChangeEmail} />
        </div>
        <button onClick={addUser}>add User</button>
      </InputWrapper>

      <WrapListItem>
        {lists.map((list) => {
          return (
            <>
              <ListItem key={list.id} color={color}>
                <CheckBox type="checkbox" />
                <div>
                  <Listspan>id: {list.userName}</Listspan>
                  <Listspan>email: {list.email}</Listspan>
                </div>
                <Clear>x</Clear>
              </ListItem>
            </>
          );
        })}
      </WrapListItem>
      <button onClick={changeColor}>changeColor</button>
      <button onClick={AllClearList}>All clear</button>
    </div>
  );
}
//과제 : 입력후 필드 초기화0, 삭제0, 개별 삭제, 수정, 알럿(입력 안했을경우)
