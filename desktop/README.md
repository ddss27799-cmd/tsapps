# TSApp Desktop

Только приложение TSApp для Windows, macOS и Linux, построенное на Electron и React.

## Установка и запуск

```bash
cd desktop
npm install
npm start
```

## Сборка

### Windows
```bash
npm run build-win
```

### macOS
```bash
npm run build-mac
```

### Linux
```bash
npm run build-linux
```

## Особенности

- Нативная интеграция с ОС (системные уведомления, трей)
- Автообновление
- Шифрование сообщений
- Синхронизация между устройствами
- Темная тема
- Оффлайн-режим

## Структура проекта

```
desktop/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   ├── pages/
│   ├── App.tsx
│   └── index.tsx
├── main.js         # Electron main процесс
├── preload.js      # Preload скрипт
└── package.json
```
