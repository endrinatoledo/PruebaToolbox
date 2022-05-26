// import axios from "axios";

const axios = require('axios').default;

const externalApi = axios.create({
    baseURL: 'https://echo-serv.tbxnet.com/v1/secret'
});

externalApi.defaults.headers.common['Content-Type'] = 'application/json';
externalApi.defaults.headers.common['authorization'] = 'Bearer aSuperSecretKey';

// });


const FileList = async() =>{

    return await  externalApi.get('/files')
    .then( response => {
        return response.data.files
     })
     .catch(error => {
        console.log(error)
        return "ERROR"
    });
}

module.exports = { FileList } 