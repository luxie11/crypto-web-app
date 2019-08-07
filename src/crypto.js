import axios from 'axios';

const crypto = axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/https://pro-api.coinmarketcap.com/v1/cryptocurrency',
    headers:{
        'X-CMC_PRO_API_KEY': 'ENTER_API_KEY',
        'Content-Type': 'application/x-www-form-urlencoded'
    }
})

export default crypto;
