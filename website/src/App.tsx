import React from 'react'
import { FiDownload, FiSmartphone, FiMonitor, FiGlobe } from 'react-icons/fi'
import { FaApple, FaWindows, FaLinux, FaAndroid } from 'react-icons/fa'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = React.useState('all')

  const downloads = [
    {
      name: 'Windows',
      icon: <FaWindows size={32} />,
      version: '1.0.0',
      size: '125 MB',
      url: '#',
      category: 'desktop',
      description: 'Для Windows 7 и выше'
    },
    {
      name: 'macOS',
      icon: <FaApple size={32} />,
      version: '1.0.0',
      size: '98 MB',
      url: '#',
      category: 'desktop',
      description: 'Для Mac OS 10.13 и выше'
    },
    {
      name: 'Linux',
      icon: <FaLinux size={32} />,
      version: '1.0.0',
      size: '110 MB',
      url: '#',
      category: 'desktop',
      description: 'AppImage и DEB пакеты'
    },
    {
      name: 'iOS',
      icon: <FaApple size={32} />,
      version: '1.0.0',
      size: '89 MB',
      url: 'https://apps.apple.com',
      category: 'mobile',
      description: 'iPhone и iPad'
    },
    {
      name: 'Android',
      icon: <FaAndroid size={32} />,
      version: '1.0.0',
      size: '76 MB',
      url: 'https://play.google.com',
      category: 'mobile',
      description: 'Android 6.0 и выше'
    },
  ]

  const filteredDownloads = activeTab === 'all' 
    ? downloads 
    : downloads.filter(d => d.category === activeTab)

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <nav className="navbar">
          <div className="logo">
            <h1>TSApp</h1>
            <p>Мессенджер</p>
          </div>
          <ul className="nav-links">
            <li><a href="#features">Возможности</a></li>
            <li><a href="#download">Скачать</a></li>
            <li><a href="#about">О нас</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h2>Свяжитесь с друзьями и семьей</h2>
          <p>Быстрый, надежный и безопасный мессенджер для всех устройств</p>
          <div className="hero-buttons">
            <a href="#download" className="btn btn-primary">
              <FiDownload size={20} /> Скачать
            </a>
            <a href="https://github.com/ddss27799-cmd/tsapps" className="btn btn-secondary">
              GitHub
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="phone-mockup"></div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <h2>Основные возможности</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">💬</div>
            <h3>Мгновенные сообщения</h3>
            <p>Отправляйте сообщения, фото и файлы в реальном времени</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Безопасность</h3>
            <p>End-to-end шифрование всех ваших сообщений</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🌐</div>
            <h3>Синхронизация</h3>
            <p>Используйте на всех устройствах одновременно</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">👥</div>
            <h3>Групповые чаты</h3>
            <p>Общайтесь с несколькими людьми одновременно</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎨</div>
            <h3>Темы оформления</h3>
            <p>Выберите светлую или темную тему по вкусу</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Быстро и легко</h3>
            <p>Минимальное потребление памяти и трафика</p>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="download">
        <h2>Скачать TSApp</h2>
        
        <div className="platform-tabs">
          <button 
            className={`tab ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            Все платформы
          </button>
          <button 
            className={`tab ${activeTab === 'desktop' ? 'active' : ''}`}
            onClick={() => setActiveTab('desktop')}
          >
            <FiMonitor size={18} /> Десктоп
          </button>
          <button 
            className={`tab ${activeTab === 'mobile' ? 'active' : ''}`}
            onClick={() => setActiveTab('mobile')}
          >
            <FiSmartphone size={18} /> Мобила
          </button>
        </div>

        <div className="downloads-grid">
          {filteredDownloads.map((download, idx) => (
            <div key={idx} className="download-card">
              <div className="download-icon">
                {download.icon}
              </div>
              <h3>{download.name}</h3>
              <p className="description">{download.description}</p>
              <div className="download-info">
                <span className="version">v{download.version}</span>
                <span className="size">{download.size}</span>
              </div>
              <a href={download.url} className="download-btn">
                <FiDownload size={18} /> Скачать
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="about-content">
          <h2>О TSApp</h2>
          <p>
            TSApp - это современный кроссплатформенный мессенджер, разработанный с учетом
            потребностей пользователей. Мы предлагаем быстрый, надежный и безопасный способ
            общения с друзьями и семьей на любом устройстве.
          </p>
          <div className="tech-stack">
            <h3>Технологический стек:</h3>
            <ul>
              <li><strong>Веб:</strong> React, Vite, Tailwind CSS</li>
              <li><strong>Десктоп:</strong> Electron, React</li>
              <li><strong>Мобила:</strong> React Native</li>
              <li><strong>Backend:</strong> Node.js, Express, Socket.IO, MongoDB</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>TSApp</h4>
            <p>Мессенджер для всех</p>
          </div>
          <div className="footer-section">
            <h4>Ссылки</h4>
            <ul>
              <li><a href="#features">Возможности</a></li>
              <li><a href="#download">Скачать</a></li>
              <li><a href="https://github.com/ddss27799-cmd/tsapps">GitHub</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Поддержка</h4>
            <ul>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Контакты</a></li>
              <li><a href="#">Приватность</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 TSApp. Все права защищены.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
