FROM node:14.15.5-alpine3.13
# Create app directory
WORKDIR /home/app
# Install app dependencies
COPY package*.json ./

RUN npm ci
# Copy app source code
COPY . /home/app

#Expose port and start application
EXPOSE 3000

CMD ["npm", "start"]