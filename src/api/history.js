import axios from 'axios';

const API_KEY = 'a29f9204a758e282e60e325886fb08cebffa2c0ce5488635a30cdbf1d43c992c'

const history = axios.create({
    baseURL:`https://min-api.cryptocompare.com/data/`,
    headers:{
        'authorization': 'Apikey' + API_KEY
    }
})

export default history;