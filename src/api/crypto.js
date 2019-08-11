import axios from 'axios';

const crypto = axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/https://pro-api.coinmarketcap.com/v1/cryptocurrency',
    headers:{
        'X-CMC_PRO_API_KEY': '30805c7c-3102-4c6e-8b6e-f1f98feb8516',
        'Content-Type': 'application/x-www-form-urlencoded'
    }
})

export default crypto; 