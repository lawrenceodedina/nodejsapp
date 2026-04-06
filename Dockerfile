FROM node:20
WORKDIR APP
ADD ./package.json ./server.js .
RUN npm install
EXPOSE 3000
CMD ["npm","start"]