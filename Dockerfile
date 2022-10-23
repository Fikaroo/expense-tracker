FROM node:16-alpine

WORKDIR /app

COPY . .

# Install app dependencies
RUN yarn

EXPOSE 3000

CMD ["yarn","dev"]