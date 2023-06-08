FROM node:latest as build

WORKDIR /usr/local/app

COPY package*.json ./

COPY ./ /usr/local/app/

RUN npm install --force

RUN npm run build

FROM nginx:latest
COPY --from=build /usr/local/app/dist/monkeypox /usr/share/nginx/html
EXPOSE 80