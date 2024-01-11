FROM node:18-alpine

WORKDIR /usr/src

COPY package.json /usr/src/package.json
RUN npm install

COPY . /usr/src/

CMD ["npm", "start"]
