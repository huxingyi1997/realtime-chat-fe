import { FC, useState, useEffect, KeyboardEvent } from "react";
// Import our new component from it's relative path
import Header from "./components/Header";
import "./App.css";
import { connect, sendMsg } from "./api";
import ChatHistory from "./components/ChatHistory";
import ChatInput from "./components/ChatInput";

const send = (event: KeyboardEvent<HTMLInputElement>) => {
  if (event.key === "Enter") {
    sendMsg(event.target.value);
    event.target.value = "";
  }
};

const App: FC = () => {
  const [chatHistory, setChatHistory] = useState<Array<MessageEvent>>([]);
  useEffect(() => {
    connect((msg) => {
      setChatHistory([...chatHistory, msg]);
    });
  }, [chatHistory]);

  return (
    <div className="App">
      <Header />
      <ChatHistory chatHistory={chatHistory} />
      <ChatInput send={send} />
    </div>
  );
};

export default App;
