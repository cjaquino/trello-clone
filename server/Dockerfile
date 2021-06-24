FROM node:12-alpine
WORKDIR /app
COPY ./server .
RUN yarn install --production
CMD ["npm", "start"]
EXPOSE 5000