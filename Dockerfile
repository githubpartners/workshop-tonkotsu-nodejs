# Container image that runs your code
FROM node:12

# Copies your code file from your action repository to the filesystem path `/` of the container
COPY package.json .
RUN npm install
COPY . .

CMD [ "npm", "start" ]
