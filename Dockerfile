# ---------- STAGE 1: Build ----------
FROM node:20-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm ci --frozen-lockfile

COPY . .
RUN npm run build


# ---------- STAGE 2: Production (Nginx) ----------
FROM nginx:stable-alpine

# Copiar el build de Vite al root de nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Opcional: copia tu meta.json si existe
# COPY meta.json /usr/share/nginx/html

# Exponer puerto 80 para Azure Web App (OBLIGATORIO)
EXPOSE 80

# Iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
