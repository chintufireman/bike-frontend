#base image
FROM node:18-alpine AS build

WORKDIR /app

#copy from current directory to working directory that is /app/
COPY ./ ./

RUN npm install
RUN npm run build

FROM node:18-alpine

WORKDIR /app

COPY --from=build /app .

EXPOSE 3000
CMD [ "npm", "start" ]