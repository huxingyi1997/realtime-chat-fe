import { FC, KeyboardEventHandler } from "react";
import "./ChatInput.scss";

interface ChatInputProps {
  send: KeyboardEventHandler<HTMLInputElement>;
}

const ChatInput: FC<ChatInputProps> = (props: ChatInputProps) => {
  const { send } = props;
  return (
    <div className="ChatInput">
      <input onKeyDown={send} />
    </div>
  );
};

export default ChatInput;
