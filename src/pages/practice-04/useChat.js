import { useState, useRef, useId, useContext } from "react";
import { ChatContext } from "./Chat";
import { getDateTime } from "../../utils/dateUtils";
//hook : 상태 공유 x, component 내부에서 호출
export const useChat = () => {
  const id = useId();
  const [input, setInput] = useState("");
  const pressedKeys = useRef(new Set());
  const context = useContext(ChatContext);

  const onKeyDown = (event) => {
    if (!input.trim()) {
      return;
    }

    pressedKeys.current.add(event.keyCode);

    if (pressedKeys.current.has(KeyCode.enter)) {
      //shift 없음
      if (pressedKeys.current.has(KeyCode.shift)) {
        console.log("shift 있음");
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
    }
  };

  const onKeyUp = (event) => {
    pressedKeys.current.delete(event.keyCode);
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

  return {
    id,
    input,
    setInput,
    onKeyDown,
    onKeyUp,
    onSubmit,
    onChange,
    context,
    onDelete,
  };
};

const KeyCode = {
  enter: 13,
  shift: 16,
};
