FROM node:14-alpine

WORKDIR /react_build
COPY ./package*.json /react_build

RUN npm install
RUN ls -la
COPY . .
RUN ls -la
#### RUN npm run build

EXPOSE 3000

CMD ["npm","start"]