import React, { useState } from 'react'
import './App.css'

function App() {
  const [messages, setMessages] = useState<any[]>([])
  const [input, setInput] = useState('')

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, timestamp: new Date() }])
      setInput('')
    }
  }

  return (
    <div className="app-container">
      <div className="window-controls">
        <div className="app-title">TSApp</div>
        <div className="controls">
          <button onClick={() => window.electron?.minimize()}>_</button>
          <button onClick={() => window.electron?.maximize()}>□</button>
          <button onClick={() => window.electron?.close()}>✕</button>
        </div>
      </div>

      <div className="main-content">
        <aside className="sidebar">
          <div className="sidebar-header">
            <h2>Чаты</h2>
            <button>+</button>
          </div>
          <div className="chat-list">
            <div className="chat-item active">Группа №1</div>
            <div className="chat-item">Иван</div>
            <div className="chat-item">Мария</div>
          </div>
        </aside>

        <main className="chat-window">
          <div className="chat-header">
            <h1>Группа №1</h1>
            <div className="chat-actions">
              <button>☎️</button>
              <button>📹</button>
              <button>⚙️</button>
            </div>
          </div>

          <div className="messages-container">
            {messages.map((msg, idx) => (
              <div key={idx} className="message">
                <p>{msg.text}</p>
                <span className="timestamp">{msg.timestamp.toLocaleTimeString()}</span>
              </div>
            ))}
          </div>

          <div className="message-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Введите сообщение..."
            />
            <button onClick={handleSend}>Отправить</button>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
