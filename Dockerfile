# Укажите базовый образ
FROM node:16 AS build

# Установите рабочую директорию
WORKDIR /app

# Скопируйте package.json и package-lock.json
COPY package*.json ./

# Установите зависимости
RUN npm install

# Скопируйте все файлы проекта
COPY . .

# Соберите проект
RUN npm run build

# Запустите Nginx для обслуживания статических файлов
FROM nginx:alpine

# Копируйте собранные файлы в Nginx
COPY --from=build /app/.output/public /usr/share/nginx/html

# Убедитесь, что Nginx слушает на 80 порту
EXPOSE 80

# Запустите Nginx
CMD ["nginx", "-g", "daemon off;"]
