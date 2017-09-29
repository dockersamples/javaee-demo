FROM node:latest 
WORKDIR /usr/src/react-client
COPY . .
RUN npm install
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "start"]
