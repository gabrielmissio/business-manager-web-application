import axios from 'axios';

const bmApi = axios.create({
    baseURL: 'https://ovxslxadt5.execute-api.us-east-1.amazonaws.com/dev/',
    headers: { 
        'accept': 'application/json', 
        'authorization': 'Bearer ' + window.sessionStorage.getItem("token"),
        'Content-Type': 'application/json'
    },
});

export default bmApi;