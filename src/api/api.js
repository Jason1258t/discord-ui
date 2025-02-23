/* eslint-disable no-unused-vars */
const conf = require('./api_config.js')
const axios = require('axios');

class API{
    constructor() {
        this.host = conf.HOST
        this.endpoints = []
        this.get_args = []
        this.post_args = []
    }

    get fullpath() {
        let res = this.host 
        this.endpoints.forEach(value => {
            res += value + '/'
        })
        if (this.get_args.length !== 0) {
            res += '?'
            this.get_args.forEach(value => {
                res += value[0] + '=' + value[1] + '&'
            })
        }
        return res
    }

    get post_args() {
        let res = new FormData()
        this.post_args.forEach(value => {
            res.append(value[0], value[1])
        })
        return res
    }

    add_get(name, value) {
        this.get_args.append([name, value])
    }

    add_post(name, value) {
        this.post_args.append([name, value])
    }

    add_endpoint(endpoint) {
        this.endpoints.append(endpoint)
    }

    get() {
        let config = {
            method: 'GET',
            maxBodyLength: Infinity,
            url: this.fullpath,
        }
        let resp;
        axios.request(config)
            .then((response) => {
                resp = response 
            }).catch((e) => {
                resp = e
            })
        return resp
    }

    post() {
        let args = this.post_args
        let config = {
            method: 'POST',
            maxBodyLength: Infinity,
            url: this.fullpath,
            headers: {
                ...args.getHeaders()
            },
            data: args
        }
        let resp;
        axios.request(config)
            .then((response) => {
                resp = response
            })
            .catch((e) => {
                resp = e
            })
        return resp
    }
}

export default API;