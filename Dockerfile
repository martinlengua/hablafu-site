# Imagen base de Node.js (usa 20-alpine para ligereza)
FROM node:20-alpine
# Directorio de trabajo
WORKDIR /app
# Copiar archivos de dependencias primero (para cache de Docker)
COPY package*.json ./
# Instalar dependencias con --frozen-lockfile para consistencia
RUN npm ci --frozen-lockfile
# Copiar el resto de los archivos del proyecto
COPY . .
# Construir la app para producción
RUN npm run build
# Variables de entorno para Vite preview
ENV HOST=0.0.0.0
ENV PORT=4173
# Exponer el puerto
EXPOSE 4173
# Comando para servir la app construida
CMD ["npm", "run", "preview"]