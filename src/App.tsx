import { useState, useEffect, useRef } from "react";
export default function ChatApp() {
  interface msgInterface{
    id:number,
    text:string
  }
  const [messages, setMessages] = useState<msgInterface[]>([{id:0,text:""}]);
  const [input, setInput] = useState<string>();
  const chatEndRef = useRef<HTMLDivElement|null>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior:"smooth" });
  }, [messages]);x

  const sendMessage = () => {
    if (!input) return;
    setMessages((prev)=>[...prev, { id: Date.now(), text: input} ]); // Issue: Sometimes messages disappear.
    setInput(""); // Issue: Input does not clear.
  };
  return (
    <div>
      <div style={{ height: "100px", overflowY: "auto", border: "1px solid black" }}>
        {messages.map((msg) => (
          <div key={msg.id}>{msg.text}</div>
        ))}
        <div ref={chatEndRef} ></div>
      </div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}