#base image
FROM node:18-alpine

RUN mkdir -p /usr/app/
WORKDIR /usr/app

#copy from current directory to working directory that is /usr/app/
COPY ./ ./


RUN npm install
RUN npm run build

EXPOSE 3000
CMD [ "npm", "start" ]