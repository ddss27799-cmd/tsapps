import express, { Express, Request, Response } from 'express';
import { createServer } from 'http';
import { Server as SocketIOServer } from 'socket.io';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const httpServer = createServer(app);
const io = new SocketIOServer(httpServer, {
  cors: {
    origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
    methods: ['GET', 'POST'],
  },
});

const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'OK', timestamp: new Date() });
});

app.post('/api/auth/register', (req: Request, res: Response) => {
  const { email, password, username } = req.body;
  
  // Логика регистрации
  res.json({
    success: true,
    message: 'Пользователь зарегистрирован',
    user: { email, username },
  });
});

app.post('/api/auth/login', (req: Request, res: Response) => {
  const { email, password } = req.body;
  
  // Логика входа
  res.json({
    success: true,
    token: 'fake_jwt_token',
    user: { email },
  });
});

app.get('/api/chats', (req: Request, res: Response) => {
  res.json({
    chats: [
      { id: 1, name: 'Группа #1', lastMessage: 'Привет!' },
      { id: 2, name: 'Иван', lastMessage: 'Как дела?' },
    ],
  });
});

app.get('/api/users', (req: Request, res: Response) => {
  res.json({
    users: [
      { id: 1, username: 'ivan', status: 'online' },
      { id: 2, username: 'maria', status: 'offline' },
    ],
  });
});

// Socket.IO
io.on('connection', (socket) => {
  console.log('Пользователь подключен:', socket.id);

  socket.on('message:send', (data) => {
    console.log('Сообщение:', data);
    io.to(data.chatId).emit('message:receive', data);
  });

  socket.on('typing:start', (data) => {
    socket.broadcast.emit('typing:start', { userId: socket.id });
  });

  socket.on('typing:stop', () => {
    socket.broadcast.emit('typing:stop', { userId: socket.id });
  });

  socket.on('disconnect', () => {
    console.log('Пользователь отключен:', socket.id);
  });
});

httpServer.listen(PORT, () => {
  console.log(`🚀 Сервер запущен на http://localhost:${PORT}`);
});

export default httpServer;
