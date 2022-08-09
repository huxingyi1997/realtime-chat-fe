import { FC } from "react";
import Message from "../Message";
import "./ChatHistory.scss";

interface ChatHistoryProps {
  chatHistory: Array<MessageEvent>;
}

const ChatHistory: FC<ChatHistoryProps> = (props: ChatHistoryProps) => {
  const { chatHistory } = props;
  const messages = chatHistory.map((msg, index) => {
    let data: string = "";
    try {
      data =  JSON.parse(msg.data).body;
    } catch(e) {

    }
    
    return <Message key={index} message={data}/>
  });

  return (
    <div className="ChatHistory">
      <h2>Chat History</h2>
      {messages}
    </div>
  );
};

export default ChatHistory;
