FROM node:lts-slim

COPY --chown=app package*.json ./
RUN npm install

COPY --chown=app . .

EXPOSE 2997
CMD [ "npm", "start" ]