FROM node:latest AS build
WORKDIR /usr/src/react-client
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /usr/src/react-client/src/static /usr/share/nginx/html
