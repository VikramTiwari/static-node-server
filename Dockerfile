FROM node:latest

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Setup ENV
ENV NODE_ENV "production"

# Install app dependencies
COPY package.json /usr/src/app/
COPY git-sync.js /usr/src/app/
RUN yarn

# Bundle app source
COPY . /usr/src/app

EXPOSE 3000
CMD [ "npm", "start" ]
