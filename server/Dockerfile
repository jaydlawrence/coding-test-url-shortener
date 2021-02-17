FROM node:14.15.5-alpine3.13
# Create app directory
WORKDIR /home/app
# Install app dependencies
COPY package*.json ./

RUN npm ci

COPY . /home/app

EXPOSE 4000

CMD ["npm", "start"]