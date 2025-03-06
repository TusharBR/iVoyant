import { useState, useEffect, useRef } from "react";

export default function ChatApp() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState();
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]); // Issue: Sometimes does not scroll properly.

  const sendMessage = () => {
    if (!input) return;
    setMessages([...messages, { id: Date.now(), text: input }]); // Issue: Sometimes messages disappear.
    setInput; // Issue: Input does not clear.
  };

  return (
    <div>
      <div style={{ height: "300px", overflowY: "auto", border: "1px solid black" }}>
        {messages.map((msg) => (
          <div key={msg.id}>{msg.text}</div>
        ))}
        <div ref={chatEndRef} />
      </div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}