const request = require('request');

class Http {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.auth = undefined;
    }

    _request(url, options) {
        return new Promise(function (resolve, reject) {
          request(options, (error, res, body) => {
              if (error || String(res.statusCode)[0] !== '2') {
                  console.log(`Http.error: ${error}`);
                  reject({error: error, response: res, body: body});
              }
              console.log(`Http.statusCode: ${res.statusCode}`);
              resolve(body);
          })
        });
    }

    get(url) {
        const options = {
            headers: this._headers(),
            url: url
        };
        return this._request(url, options);
    }

    patch(url, data) {
        return this._create(url, data, 'PATCH');
    }

    post(url, data) {
        return this._create(url, data, 'POST');
    }

    put(url, data) {
        return this._create(url, data, 'PUT');
    }

    _create(url, data, httpMethod) {
        let options = {
            headers: this._headers(),
            method: httpMethod,
            url: url,
            json: data
        };
        return this._request(url, options);
    }

    delete(url) {
        let options = {
            headers: this._headers(),
            url: url
        };
        return new Promise(function (resolve, reject) {
            request.delete(url, options, (error, res, body) => {
                if (error) {
                    console.log(`Http.error: ${error}`);
                    reject(error);
                }
                console.log(`statusCode: ${res.statusCode}`);
                resolve(typeof body === "string" ? JSON.parse(body) : body);
            });
        });

    }

    getToken() {
        if (this.auth !== undefined) {
            return this.auth;
        } else {
            const token = btoa(`${process.env.OKTA_CLIENT_ID}:${process.env.OKTA_CLIENT_SECRET}`);
            let url = `${process.env.OKTA_ORG_URL}/oauth2/default/v1/token`;
            let authData = {
                json: true,
                uri: url,
                method: 'POST',
                headers: {
                    authorization: `Basic ${token}`
                },
                form: {
                    grant_type: 'client_credentials',
                    scope: 'api'
                }
            };

            return this._request(url, authData).then(data => {
                this.auth = data;
            });
        }
    }

    _headers() {
        let headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };
        if (this.apiKey !== undefined) {
            headers['Authorization'] = 'OAuth ' + this.apiKey;
        }
        if (this.auth !== undefined) {
            headers['Authorization'] = `${this.auth.token_type} ${this.auth.access_token}`;
        }
        return headers;
    }
}

module.exports = Http;
