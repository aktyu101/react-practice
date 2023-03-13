import { useState } from "react";
import "./input.css";
export default function Input() {
  const [id, setId] = useState("");
  const [email, setEmail] = useState();
  const onChangeId = (event) => {
    setId(event.target.value);
  };
  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  return (
    <>
      <div id="content_wrapper">
        <div>
          <input id="id" type="text" value={id} onChange={onChangeId} />
        </div>
        <div>
          <input
            id="email"
            type="text"
            value={email}
            onChange={onChangeEmail}
          />
        </div>
        <div>
          <p>{id}</p>
          <p>{email}</p>
        </div>
      </div>
    </>
  );
}
