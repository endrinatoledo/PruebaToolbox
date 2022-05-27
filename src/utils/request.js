const axios = require('axios').default;
const URL = 'https://echo-serv.tbxnet.com/v1/secret'
const externalApi = axios.create({
    baseURL: URL
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

const FileByName = async(file) =>{

    return await  externalApi.get('/file/' + file)
    .then( response => {
        return response.data
     })
     .catch(error => {
        console.log(error)
        return "ERROR"
    });
}

module.exports = { FileList, FileByName } 