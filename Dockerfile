FROM catapultcx/node:12

COPY --chown=app package*.json ./

RUN npm install

COPY --chown=app . .

EXPOSE 2997
CMD [ "npm", "start" ]
