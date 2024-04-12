FROM node:alpine

RUN npm install -g pm2

WORKDIR /code

COPY ./package.json ./
RUN npm install .

# Make sure you delete node_modules on your host, before building the image
COPY ./ ./

CMD ["npm", "run", "dev"]