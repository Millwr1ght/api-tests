FROM node:alpine

#setup
WORKDIR /usr/app

COPY package.json /usr/app

COPY server.js /usr/app

#install
RUN npm install

EXPOSE 3000

#run
CMD ["node", "server.js"]