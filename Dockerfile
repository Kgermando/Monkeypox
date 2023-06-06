FROM node:18-alpine
WORKDIR /app

COPY . .

RUN npm install
RUN npm run build --prod

FROM nginx:alpine
COPY --from=node /app/dist/monkeypox /usr/share/nginx/html