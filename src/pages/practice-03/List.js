import { css } from "@emotion/react"; // /css
import { useState } from "react";
import styled from "@emotion/styled";
import { ClassNames } from "@emotion/react";
//css
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
  box-sizing: border-box;
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
const Edit = styled.button`
  width: 50px;
  height: 25px;
  background-color: #222;
  color: #fff;
  border-radius: 20px;
  cursor: pointer;
`;
const ListChangeBtn = styled.button`
  width: 30px;
  height: 25px;
  color: #222;
  border-radius: 20px;
  cursor: pointer;
`;
const Listspan = styled.span`
  margin-right: 15px;
  background-color: #fff;
`;
const EventBtn = styled.button`
  width: 100px;
  height: 35px;
  margin-left: 5px;
  margin-top: 10px;
  background-color: #fff;
  border: solid 1px #222;
  cursor: pointer;
  float: right;
`;
const titleStyle = css`
  color: red;
`;

export default function List() {
  const [color, setColor] = useState("#fff");
  const [email, setEmail] = useState("@gmail.com");
  const [name, setName] = useState("");
  const [lists, setLists] = useState([
    {
      id: 1,
      userName: "judy",
      email: "judy@gmail.com",
      active: true,
      checked: false,
    },
    {
      id: 2,
      userName: "nick",
      email: "nick@gmail.com",
      active: false,
      checked: false,
    },
    {
      id: 3,
      userName: "kevin",
      email: "kevin@gmail.com",
      active: false,
      checked: false,
    },
  ]);
  const changeColor = () => {
    setColor(color === null ? "#eee" : null);
  };
  const onChangeName = (event) => {
    setName(event.target.value);
  };
  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  //유저추가
  const addUser = () => {
    console.log("email", email);
    const user = {
      id: lists.length + 1,
      userName: name,
      email: email,
      active: false,
      checked: false,
    };
    setLists((lists) => {
      return [...lists, user];
    });
    setName([]);
    setEmail([]);
  };
  //전체삭제
  const AllClearList = () => {
    setLists([]);
  };
  //체크확인
  const handleCheckList = (event) => {
    const id = Number(event.target.name);
    const checked = event.target.checked;
    setLists((lists) =>
      lists.map((list, index) => {
        return {
          ...list,
          checked: list.id === id ? checked : list.checked,
        };
      })
    );
  };
  //선택삭제
  const DeleteList = () => {
    const noneChecked = lists
      .filter((lists) => lists.checked === false)
      .map((lists) => ({ ...lists }));
    setLists(noneChecked);
  };

  //리스트수정
  const editList = (event) => {
    console.log("변경");
  };

  //변경
  const active = lists.active;
  console.log(lists);
  //변경 적용
  const listTextChange = () => {};

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
                <CheckBox
                  type="checkbox"
                  onChange={handleCheckList}
                  name={list.id}
                />
                {active ? (
                  <ul style={{ display: "flex", gap: "10px" }}>
                    <li>
                      id: <input type="text" value={list.userName} />
                    </li>
                    <li>
                      email: <input type="text" value={list.email} />
                    </li>
                    <ListChangeBtn onChange={listTextChange}>ok</ListChangeBtn>
                  </ul>
                ) : (
                  <div>
                    <Listspan>id: {list.userName}</Listspan>
                    <Listspan>email: {list.email}</Listspan>
                  </div>
                )}
                <Edit onChange={editList} name={list.id}>
                  edit
                </Edit>
              </ListItem>
            </>
          );
        })}
      </WrapListItem>
      <EventBtn onClick={changeColor}>changeColor</EventBtn>
      <EventBtn onClick={AllClearList}>Delete All</EventBtn>
      <EventBtn onClick={DeleteList}>Ddelete</EventBtn>
    </div>
  );
}
