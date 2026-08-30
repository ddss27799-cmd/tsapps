import React, { useState, useRef, useEffect } from 'react'
import './App.css'

interface Message {
  id: string
  text: string
  sender: 'user' | 'other'
  timestamp: Date
  avatar?: string
  username?: string
}

interface Chat {
  id: string
  name: string
  avatar: string
  lastMessage: string
  unread: number
  isOnline: boolean
}

function App() {
  const [selectedChat, setSelectedChat] = useState<Chat | null>(null)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Привет! Как дела? 👋',
      sender: 'other',
      timestamp: new Date(Date.now() - 300000),
      username: 'Иван',
      avatar: '🟦'
    },
    {
      id: '2',
      text: 'Привет! Все хорошо! 😊',
      sender: 'user',
      timestamp: new Date(Date.now() - 240000),
      username: 'Ты',
      avatar: '🟦'
    },
    {
      id: '3',
      text: 'Как работа?',
      sender: 'other',
      timestamp: new Date(Date.now() - 180000),
      username: 'Иван',
      avatar: '🟦'
    },
  ])
  const [inputText, setInputText] = useState('')
  const [chats, setChats] = useState<Chat[]>([
    { id: '1', name: 'Иван', avatar: '🟦', lastMessage: 'Как работа?', unread: 0, isOnline: true },
    { id: '2', name: 'Мария', avatar: '🟪', lastMessage: 'Спасибо!', unread: 2, isOnline: false },
    { id: '3', name: 'Группа #1', avatar: '🟨', lastMessage: 'Собрание в 14:00', unread: 0, isOnline: true },
    { id: '4', name: 'Петр', avatar: '🟩', lastMessage: 'До встречи!', unread: 1, isOnline: true },
  ])
  const [searchText, setSearchText] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [darkMode, setDarkMode] = useState(false)
  const [showSettings, setShowSettings] = useState(false)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  useEffect(() => {
    if (chats.length > 0 && !selectedChat) {
      setSelectedChat(chats[0])
    }
  }, [])

  const handleSendMessage = () => {
    if (inputText.trim() && selectedChat) {
      const newMessage: Message = {
        id: String(Date.now()),
        text: inputText,
        sender: 'user',
        timestamp: new Date(),
        username: 'Ты',
        avatar: '🟦'
      }
      setMessages([...messages, newMessage])
      setInputText('')
      
      // Имитация ответа
      setTimeout(() => {
        const replyMessage: Message = {
          id: String(Date.now() + 1),
          text: '👍 Получил!',
          sender: 'other',
          timestamp: new Date(),
          username: selectedChat.name,
          avatar: selectedChat.avatar
        }
        setMessages(prev => [...prev, replyMessage])
      }, 500)
    }
  }

  const filteredChats = chats.filter(chat =>
    chat.name.toLowerCase().includes(searchText.toLowerCase())
  )

  return (
    <div className={`app ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      {/* Sidebar */}
      <div className="sidebar">
        {/* Header */}
        <div className="sidebar-header">
          <div className="header-title">
            <h1>✨ TSApp</h1>
            <span className="version">v1.0</span>
          </div>
          <div className="header-actions">
            <button className="icon-btn" title="Новый чат" onClick={() => {}}>
              ➕
            </button>
            <button 
              className="icon-btn" 
              title="Настройки"
              onClick={() => setShowSettings(!showSettings)}
            >
              ⚙️
            </button>
            <button 
              className="icon-btn" 
              title="Тема"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="search-container">
          <input
            type="text"
            placeholder="🔍 Поиск чатов..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="search-input"
          />
        </div>

        {/* Chats List */}
        <div className="chats-list">
          {filteredChats.map(chat => (
            <div
              key={chat.id}
              className={`chat-item ${selectedChat?.id === chat.id ? 'active' : ''}`}
              onClick={() => setSelectedChat(chat)}
            >
              <div className="chat-avatar">
                <span className="avatar-emoji">{chat.avatar}</span>
                {chat.isOnline && <span className="online-indicator"></span>}
              </div>
              <div className="chat-info">
                <h3>{chat.name}</h3>
                <p>{chat.lastMessage}</p>
              </div>
              {chat.unread > 0 && (
                <div className="unread-badge">{chat.unread}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="chat-container">
        {selectedChat ? (
          <>
            {/* Chat Header */}
            <div className="chat-header">
              <div className="header-left">
                <div className="chat-avatar">
                  <span className="avatar-emoji">{selectedChat.avatar}</span>
                  {selectedChat.isOnline && <span className="online-indicator"></span>}
                </div>
                <div className="header-info">
                  <h2>{selectedChat.name}</h2>
                  <p>{selectedChat.isOnline ? '🟢 онлайн' : '⚫ оффлайн'}</p>
                </div>
              </div>
              <div className="header-actions">
                <button className="icon-btn" title="Звонок">☎️</button>
                <button className="icon-btn" title="Видеозвонок">📹</button>
                <button className="icon-btn" title="Информация">ℹ️</button>
              </div>
            </div>

            {/* Messages */}
            <div className="messages">
              {messages.map(msg => (
                <div key={msg.id} className={`message-group ${msg.sender}`}>
                  <div className="message-avatar">{msg.avatar}</div>
                  <div className="message-content">
                    {msg.sender === 'other' && <p className="message-username">{msg.username}</p>}
                    <div className={`message-bubble ${msg.sender}`}>
                      {msg.text}
                    </div>
                    <p className="message-time">
                      {msg.timestamp.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="message-input-area">
              <div className="input-actions">
                <button className="action-btn" title="Прикрепить файл">📎</button>
                <button className="action-btn" title="Эмодзи">😊</button>
                <button className="action-btn" title="Голос">🎤</button>
              </div>
              <div className="input-wrapper">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Введите сообщение..."
                  className="message-input"
                />
              </div>
              <button
                onClick={handleSendMessage}
                className="send-btn"
                disabled={!inputText.trim()}
              >
                ✈️
              </button>
            </div>
          </>
        ) : (
          <div className="empty-state">
            <div className="empty-icon">💬</div>
            <p>Выберите чат для начала общения</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
