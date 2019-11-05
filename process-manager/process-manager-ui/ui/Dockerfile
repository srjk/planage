FROM node:10.16.0
WORKDIR /app
COPY package.json /app/
COPY . /app
RUN npm install && \
    npm run build

CMD npm run serve --host 0.0.0.0 --disableHostCheck true
