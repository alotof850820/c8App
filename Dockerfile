FROM node:16-alpine
WORKDIR /usr/src/c8app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5050
CMD [ "npm", "run", "dev" ]