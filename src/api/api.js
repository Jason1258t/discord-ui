/* eslint-disable no-unused-vars */
import axios from 'axios'
const conf = require('./api_config.js')

class API{
    constructor() {
        this.host = conf.HOST
        this.endpoints = []
        this.get_args = []
        this.post_args = []
    }

    getfullpath(method) {
        let res = this.host 
        this.endpoints.forEach(value => {
            res += value + '/'
        })
        if(method === 'GET'){
            res = res.slice(0, -1)
        }
        if (this.get_args.length !== 0) {
            res += '?'
            this.get_args.forEach(value => {
                res += value[0] + '=' + value[1] + '&'
            })
        }
        return res
    }

    get_post_args() {
        let res = new FormData()
        this.post_args.forEach(value => {
            res.push(value[0], value[1])
        })
        return res
    }

    add_get(name, value) {
        this.get_args.push([name, value])
    }

    add_post(name, value) {
        this.post_args.push([name, value])
    }

    add_endpoint(endpoint) {
        this.endpoints.push(endpoint)
    }

    async get() {
        let config = {
            method: 'GET',
            maxBodyLength: Infinity,
            url: this.getfullpath("GET"),
        }
        let resp;
        await axios.get(config.url)
            .then((response) => {
                resp = response.data
            }).catch((e) => {
                resp = e
            })
        return resp
    }

    async post() {
        let args = this.get_post_args
        let config = {
            method: 'POST',
            maxBodyLength: Infinity,
            url: this.getfullpath("POST"),
            
            data: args
        }
        let resp;
        axios.post(config)
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