import { FC, useState, useEffect } from "react";
import "./Message.scss";

interface MessageProps {
  message: string;
}

const Message: FC<MessageProps> = (props: MessageProps) => {
  const { message } = props;

  return <div className="Message">{message}</div>;
};

export default Message;
