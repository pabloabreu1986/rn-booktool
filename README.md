Proyecto [**React Native**](https://reactnative.dev) usando [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Preparar el ambiente local

> **Nota**: Completar las [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instrucciones hasta el paso "Crear una nueva aplicación", antes de continuar.

## Preparar .env

- Copiar y pegar el archivo `.env.example`
- Renombrar a `.env`
- En en el archivo `.env`, definir la variable `BOOKS_API_URL` con el valor devuelto en consola por `ngrok` en _"Forwarding"_ seguido del la ruta `/books`
- Quedaría definida en el `.env` de la siguiente manera:

```bash
# BOOKSAPI
  BOOKS_API_URL=https://cadena-de-ngrok-mostrada-en-consola.ngrok-free.app/books
```

## Levantar Metro Server

Para iniciar Metro, ejecute el siguiente comando desde la _raíz_ del proyecto:

```bash
npm start
```

## Levantar la App

Deje que Metro Bundler se ejecute en su propia terminal. Abra una _nueva_ terminal desde la _raíz_ del proyecto. Ejecute el siguiente comando para iniciar su aplicación _Android_ o _iOS_:

### Para Android

```bash
npm run android
```

### Para iOS

```bash
npx npx pod-install ios

npm run ios
```

Si todo está configurado _correctamente_, debería ver su nueva aplicación ejecutándose en su _Emulador de Android_ o _Simulador de iOS_ en breve, siempre que haya configurado su emulador/simulador correctamente.

Esta es una forma de ejecutar su aplicación; también puede ejecutarla directamente desde Android Studio y Xcode respectivamente.

### Algunos TODOs

- Separar ambientes en archivos: `.env.development | .env.production `
- Implementar manejo global de errores
- Realizar las pruebas unitarias
- Añadir login usando Firebase
- Notificación de nuevos libros
- Actualización dinámica de la lista
