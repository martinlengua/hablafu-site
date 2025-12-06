# Imagen base de Node.js
FROM node:20-alpine
# Directorio de trabajo
WORKDIR /app
# Copiar package.json y package-lock.json primero
COPY package*.json ./
# Instalar dependencias
RUN npm ci --frozen-lockfile
# Copiar el resto de archivos
COPY . .
# Construir la app para producción
RUN npm run build
# Usar el puerto asignado por Azure
ENV HOST=0.0.0.0
# Exponer el puerto dinámico
EXPOSE $PORT
# Comando para servir la app construida con puerto dinámico
CMD ["sh", "-c", "npm run preview -- --host 0.0.0.0 --port $PORT"]