docker build -t animals-ui .
docker tag animals-ui:latest catapultcx/animals-ui:latest
docker push catapultcx/animals-ui:latest
