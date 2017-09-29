FROM node:latest 
WORKDIR /usr/src/react-client
COPY . .
RUN npm install
RUN npm run build
EXPOSE 3000
# ENTRYPOINT ['npm', 'run', 'start']

CMD ["npm", "run", "start"]
# ENV NODE_ENV=production
# RUN ./node_modules/.bin/webpack -p
# CMD ./node_modules/.bin/http-server src/static
