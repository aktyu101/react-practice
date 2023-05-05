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

  return {
    id,
    input,
    setInput,
    onKeyDown,
    onKeyUp,
    onSubmit,
    onChange,
    context,
  };
};

const KeyCode = {
  enter: 13,
  shift: 16,
};
