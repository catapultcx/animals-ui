FROM catapultcx/node:12

COPY --chown=app package*.json ./

RUN npm install

COPY --chown=app . .

ENV API_URL=http://localhost:8080/api/1

EXPOSE 2997
CMD [ "npm", "start" ]
