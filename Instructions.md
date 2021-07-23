### SRE Interview Instructions

Please follow the following steps in order to run the frontend and backend applications using docker compose.

#### Clone Repositories

```
mkdir /tmp
git clone https://github.com/catapultcx/animals-ui
git clone https://github.com/catapultcx/animals-api
```

#### Start the applications with docker-compose

```
cd /tmp/animals-ui
docker-compose up
```

#### Run the Jmeter Performance Test for Frontend App

```
cd /tmp/animals-ui/jmeter-test
jmeter -n -t frontend-test-plan.jmx -j frontend-test-plan.log
```

#### Run the Jmeter Performance Test for Backend App

```
cd /tmp/animals-api/jmeter-test
jmeter -n -t backend-test-plan.jmx -j backend-test-plan.log
```
