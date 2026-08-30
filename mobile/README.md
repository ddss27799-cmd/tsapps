# TSApp Mobile

Мобильное приложение TSApp для iOS и Android, построенное на React Native.

## Требования

- Node.js 16+
- npm или yarn
- Xcode (для iOS)
- Android Studio (для Android)

## Установка

```bash
cd mobile
npm install

# Для iOS
npm run ios

# Для Android
npm run android
```

## Особенности

- Нативная производительность
- Push-уведомления
- Кэширование сообщений
- Синхронизация с десктопом и вебом
- Темная тема
- Офлайн-режим
- Биометрическая аутентификация

## Стр��ктура проекта

```
mobile/
├── app/
│   ├── screens/
│   │   ├── ChatScreen.tsx
│   │   ├── LoginScreen.tsx
│   │   ├── ProfileScreen.tsx
│   │   └── ContactsScreen.tsx
│   ├── components/
│   ├── navigation/
│   ├── store/
│   └── App.tsx
├── android/
├── ios/
└── package.json
```
