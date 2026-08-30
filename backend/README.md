# TSApp Backend

Backend API для TSApp мессенджера, построенный на Node.js, Express и Socket.IO.

## Требования

- Node.js 16+
- MongoDB 5.0+
- npm или yarn

## Установка и запуск

```bash
cd backend
npm install

# Режим разработки
npm run dev

# Production
npm run build
npm start
```

API будет доступно на `http://localhost:3000`

## Переменные окружения

Создайте файл `.env` в корне backend:

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/tsapp
JWT_SECRET=your_secret_key_here
NODE_ENV=development
CORS_ORIGIN=http://localhost:5173
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Регистрация
- `POST /api/auth/login` - Вход
- `POST /api/auth/logout` - Выход
- `GET /api/auth/me` - Текущий пользователь

### Messages
- `GET /api/messages/:chatId` - Получить сообщения
- `POST /api/messages` - Отправить сообщение
- `DELETE /api/messages/:messageId` - Удалить сообщение

### Chats
- `GET /api/chats` - Список чатов
- `POST /api/chats` - Создать чат
- `GET /api/chats/:chatId` - Получить чат

### Users
- `GET /api/users` - Список пользователей
- `GET /api/users/:userId` - Получить профиль
- `PUT /api/users/:userId` - Обновить профиль

## Real-time Events (Socket.IO)

- `message:send` - Отправка сообщения
- `message:receive` - Получение сообщения
- `user:online` - Пользователь в сети
- `user:offline` - Пользователь вышел
- `typing:start` - Пользователь печатает
- `typing:stop` - Пользователь перестал печатать

## Структура проекта

```
backend/
├── src/
│   ├── models/          # MongoDB модели
│   ├── routes/          # API маршруты
│   ├── controllers/      # Контроллеры
│   ├── middleware/       # Middleware
│   ├── services/         # Бизнес-логика
│   ├── sockets/          # Socket.IO обработчики
│   ├── config/           # Конфигурация
│   └── server.ts         # Точка входа
├── .env                  # Переменные окружения
└── package.json
```

## Security

- JWT для аутентификации
- Bcrypt для хеширования паролей
- CORS защита
- Rate limiting
- Input validation

## Развертывание

Проект готов для развертывания на:
- Heroku
- Railway
- Render
- DigitalOcean
- AWS EC2
