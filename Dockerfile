FROM node:latest as node

WORKDIR /usr/src/app 

COPY package*.json ./

COPY . .

RUN npm install --force
RUN npm run build --prod

# FROM nginx:alpine
# COPY --from=node /usr/src/app/dist/monkeypox /usr/share/nginx/html

# FROM node:18-alpine as builder

# COPY . /app

# WORKDIR /app 

# RUN npm install --force
# RUN npm run build --prod

# FROM nginx:alpine
# EXPOSE 80
# COPY --from=builder /app/dist/monkeypox /usr/share/nginx/html