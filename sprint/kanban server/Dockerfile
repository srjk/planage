FROM node:12.4.0-alpine
RUN apk update && apk add git openssh-client
WORKDIR /app

# Bundle app source
COPY package.json ./app
COPY . .
#RUN npm install
EXPOSE 3001
CMD [ "npm", "start" ]