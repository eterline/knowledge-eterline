# --- Stage 1: build ---
FROM node:24.7.0-alpine AS builder

WORKDIR /app
COPY . .
RUN npm ci --legacy-peer-deps
COPY deploy .
RUN npm run build


# --- Stage 2: serve ---
FROM nginx:alpine

RUN rm /etc/nginx/conf.d/default.conf
COPY ./deploy/nginx.conf /etc/nginx/conf.d/
COPY --from=builder /app/build /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
