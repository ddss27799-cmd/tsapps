# TSApp - Кроссплатформенный Мессенджер

![TSApp](https://img.shields.io/badge/TSApp-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Status](https://img.shields.io/badge/status-Active-brightgreen)

TSApp - это современный, быстрый и безопасный мессенджер, доступный на **Windows, macOS, Linux, iOS, Android и в Web**.

## 🎯 Особенности

- 💬 **Мгновенные сообщения** - отправляйте и получайте сообщения в реальном времени
- 🔐 **Полная безопасность** - End-to-end шифрование всех сообщений
- 🌐 **Кроссплатформенность** - один аккаунт на всех устройствах
- 👥 **Групповые чаты** - общайтесь с несколькими людьми одновременно
- 📁 **Обмен файлами** - делитесь фотографиями и документами
- 🎨 **Темы оформления** - светлый и тёмный режим
- ⚡ **Лёгкое и быстрое** - минимальное потребление памяти
- 🔔 **Push-уведомления** - не пропускайте важные сообщения
- 🌙 **Офлайн-режим** - сообщения синхронизируются при подключении
- 👁️ **Статусы онлайн** - видите когда друзья в сети

## 📋 Структура проекта

```
tsapps/
├── web/              # 🌐 Веб-приложение (React + Vite)
├── desktop/          # 🖥️  Десктопное приложение (Electron)
├── mobile/           # 📱 Мобильное приложение (React Native)
├── backend/          # 🔧 Backend API (Node.js + Express)
├── website/          # 📥 Сайт для скачивания
└── docs/             # 📚 Документация
```

## 🚀 Быстрый старт

### Требования

- Node.js 16+
- npm или yarn
- MongoDB 5.0+ (для backend)
- Git

### Установка и запуск

#### 1. Backend

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

API будет доступно на `http://localhost:3000`

#### 2. Веб-версия

```bash
cd web
npm install
npm run dev
```

Веб будет доступно на `http://localhost:5173`

#### 3. Сайт для скачивания

```bash
cd website
npm install
npm run dev
```

Сайт будет доступно на `http://localhost:5173` (или другой порт)

#### 4. Десктопное приложение

```bash
cd desktop
npm install
npm start
```

#### 5. Мобильное приложение

```bash
cd mobile
npm install
npm run ios    # для iOS
npm run android # для Android
```

## 🔧 Конфигурация Backend

Создайте файл `.env` в папке `backend`:

```env
PORT=3000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/tsapp
JWT_SECRET=your_super_secret_jwt_key
CORS_ORIGIN=http://localhost:5173
```

## 📚 API Документация

### Authentication
- `POST /api/auth/register` - Регистрация нового пользователя
- `POST /api/auth/login` - Вход в аккаунт
- `POST /api/auth/logout` - Выход из аккаунта
- `GET /api/auth/me` - Получить текущего пользователя

### Messages
- `GET /api/messages/:chatId` - Получить сообщения чата
- `POST /api/messages` - Отправить сообщение
- `DELETE /api/messages/:messageId` - Удалить сообщение
- `PUT /api/messages/:messageId` - Редактировать сообщение

### Chats
- `GET /api/chats` - Список всех чатов
- `POST /api/chats` - Создать новый чат
- `GET /api/chats/:chatId` - Получить информацию о чате
- `PUT /api/chats/:chatId` - Обновить чат
- `DELETE /api/chats/:chatId` - Удалить чат

### Users
- `GET /api/users` - Список всех пользователей
- `GET /api/users/:userId` - Получить профиль пользователя
- `PUT /api/users/:userId` - Обновить профиль
- `DELETE /api/users/:userId` - Удалить аккаунт

## 🔌 Real-time Events (Socket.IO)

```javascript
// Подключение
const socket = io('http://localhost:3000');

// События
socket.on('message:send', (data) => {})
socket.on('message:receive', (data) => {})
socket.on('user:online', (userId) => {})
socket.on('user:offline', (userId) => {})
socket.on('typing:start', () => {})
socket.on('typing:stop', () => {})
```

## 🐳 Docker

### Запуск всех сервисов в Docker

```bash
docker-compose up -d
```

### Запуск отдельного сервиса

```bash
# Backend
docker build -t tsapp-backend ./backend
docker run -p 3000:3000 tsapp-backend

# Web
docker build -t tsapp-web ./web
docker run -p 5173:5173 tsapp-web
```

## 📦 Сборка

### Веб
```bash
cd web
npm run build
```

### Десктоп (все платформы)
```bash
cd desktop
npm run build          # все платформы
npm run build-win      # только Windows
npm run build-mac      # только macOS
npm run build-linux    # только Linux
```

### Мобиль
```bash
cd mobile
npm run build:ios
npm run build:android
```

## 🔐 Безопасность

- ✅ **JWT Authentication** - безопасная аутентификация
- ✅ **Bcrypt** - хеширование паролей
- ✅ **HTTPS/SSL** - зашифрованное соединение
- ✅ **CORS Protection** - защита от кросс-доменных атак
- ✅ **Rate Limiting** - ограничение количества запросов
- ✅ **Input Validation** - проверка входных данных
- ✅ **End-to-End Encryption** - шифрован��е сообщений

## 🧪 Тестирование

```bash
# Backend
cd backend && npm test

# Web
cd web && npm test

# Mobile
cd mobile && npm test
```

## 📝 Лицензия

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Разработка

### Ветки Git

- `main` - Стабильная версия
- `develop` - Версия в разработке
- `feature/*` - Новые функции
- `bugfix/*` - Исправления ошибок

### Как внести вклад

1. Форкните репозиторий
2. Создайте ветку для вашей функции (`git checkout -b feature/AmazingFeature`)
3. Сделайте коммит с изменениями (`git commit -m 'Add some AmazingFeature'`)
4. Отправьте ветку на GitHub (`git push origin feature/AmazingFeature`)
5. Откройте Pull Request

## 🐛 Известные проблемы

Нет известных проблем. Если вы нашли баг, пожалуйста, откройте [Issue](https://github.com/ddss27799-cmd/tsapps/issues).

## 📞 Поддержка

- 📧 Email: support@tsapp.com
- 🐦 Twitter: [@TSAppMessenger](https://twitter.com/tsappmessenger)
- 💬 Discord: [Присоединяйтесь к серверу](https://discord.gg/tsapp)
- 🌐 Веб-сайт: [tsapp.com](https://tsapp.com)

## 🎓 Обучение

- [Документация по API](./docs/API.md)
- [Руководство разработчика](./docs/DEVELOPER.md)
- [Архитектура приложения](./docs/ARCHITECTURE.md)

## 🏆 Спасибо

Большое спасибо всем, кто внёс вклад в этот проект!

## 📈 Дорожная карта

- [ ] Video calls (видеозвонки)
- [ ] Voice calls (голосовые звонки)
- [ ] End-to-end encryption (E2EE)
- [ ] Message reactions (реакции на сообщения)
- [ ] Message threading (ветки сообщений)
- [ ] Bot API
- [ ] Plugin system (система плагинов)
- [ ] Desktop notifications (уведомления на рабочий стол)
- [ ] Message search (поиск сообщений)
- [ ] User profiles (профили пользователей)

---

**Сделано с ❤️ для свободного общения**
