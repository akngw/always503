FROM node:10.14.1-alpine
EXPOSE 3000
RUN mkdir -p /opt/always503
WORKDIR /opt/always503
COPY app.js /opt/always503
COPY package.json /opt/always503
RUN npm install
CMD ["npm", "start"]