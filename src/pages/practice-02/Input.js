import { useState } from "react";
export default function Input() {
  const [id, setId] = useState("");
  const [email, setEmail] = useState();
  const onChangeId = (event) => {
    setId(event.target.value);
    console.log("id", event.target.value);
  };
  const onChangeEmail = (event) => {
    console.log("e", event);
  };
  return (
    <>
      <div>
        <input id="id" type="text" value={id} onChange={onChangeId} />
      </div>
      <div>
        <input id="email" type="text" value={email} onChange={onChangeEmail} />
      </div>
    </>
  );
}
//email값, 입력받은값을 화면에
